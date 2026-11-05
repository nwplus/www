import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Title2 } from './Typography.js';
import WebpPicture from './WebpPicture';

// Organizer photos that have a WebP copy (listed at build time in next.config.js).
const PROFILE_WEBPS = new Set((process.env.PROFILE_WEBPS || '').split(','));

const webpFor = (img) => {
  const webp = img.replace(/\.png$/i, '.webp');
  return PROFILE_WEBPS.has(webp.split('/').pop()) ? webp : null;
};

const StyledTitle = styled(Title2)`
  color: ${(p) => p.theme.colors.primary};
`;

const ProfileContent = styled.p`
  color: white;
  span {
    margin-right: 8px;
  }
  height: 1em;
  b {
    margin-right: 8px;
  }
`;

const ProfileList = styled.div`
  height: 130px;
  overflow-x: hidden;
  white-space: nowrap;
  margin-bottom: 20px;
`;

const ProfileLink = styled.a`
  &:hover {
    transform: scale(1.15);
  }
  border-radius: 12px;
  margin: 10px;
  width: 100px;
  height: 100px;

  ${(p) => p.theme.mediaQueries.mobile} {
    width: 46px;
    height: 46px;
  }
`;

// A plain 100x100 inline-block on the text baseline, the same box next/image used to render
// (its resizing never worked in the static export, so it only added extra markup).
const ProfileImage = styled.img`
  &:hover {
    opacity: 1;
  }
  display: inline-block;
  border-radius: 12px;
  background-color: ${(p) => p.color};
  object-fit: cover;
  transition: all 100ms ease-in-out;
  opacity: 0.42;
  width: 100px;
  height: 100px;
`;

// The speed the carousel has always scrolled at (124 px every 4 s, doubled).
const SPEED_PX_PER_MS = 0.062;
// How long it takes to glide to a stop on hover, or to get back up to speed.
const RAMP_MS = 670;

const setRate = (animation, rateRef, rate) => {
  rateRef.current = rate;
  if (animation.updatePlaybackRate) {
    animation.updatePlaybackRate(rate);
  } else {
    animation.playbackRate = rate;
  }
};

export default function Team({ profiles }) {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isOnScreen, setIsOnScreen] = useState(false);
  const listRef = useRef();
  const stripRef = useRef();
  const animationRef = useRef();
  const rateRef = useRef(1);

  // Scroll the strip with the Web Animations API. The browser runs it on the compositor, off the
  // main thread, so other work on the page can't make it stutter.
  useEffect(() => {
    const strip = stripRef.current;
    if (typeof strip.animate !== 'function') {
      return undefined;
    }
    // The strip holds the profiles twice. The distance between the two copies is one loop, so the
    // wrap-around lands exactly where it started.
    const items = strip.children;
    const loop =
      items[profiles.length].getBoundingClientRect().left - items[0].getBoundingClientRect().left;
    if (!(loop > 0)) {
      return undefined;
    }
    const animation = strip.animate(
      [{ transform: `translateX(${-loop}px)` }, { transform: 'translateX(0px)' }],
      { duration: loop / SPEED_PX_PER_MS, iterations: Infinity }
    );
    animation.pause();
    animationRef.current = animation;
    return () => {
      animationRef.current = undefined;
      animation.cancel();
    };
  }, [profiles.length]);

  // Only run the animation while the carousel is on (or about to come on) screen.
  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      setIsOnScreen(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      // Use the latest entry if several arrive together.
      (entries) => setIsOnScreen(entries[entries.length - 1].isIntersecting),
      { rootMargin: '200px 0px' }
    );
    observer.observe(listRef.current);
    return () => observer.disconnect();
  }, []);

  // Glide to a stop while hovered and back up to speed afterwards.
  useEffect(() => {
    const animation = animationRef.current;
    if (!animation) {
      return undefined;
    }
    if (!isOnScreen) {
      animation.pause();
      return undefined;
    }
    const target = isHovered ? 0 : 1;
    if (animation.playState === 'paused') {
      // Coming back on screen, carry on at the speed it would have settled at by now.
      setRate(animation, rateRef, target);
      animation.play();
      return undefined;
    }
    let frame;
    let lastTime;
    const step = (t) => {
      if (lastTime !== undefined) {
        const change = (t - lastTime) / RAMP_MS;
        const rate = rateRef.current;
        setRate(
          animation,
          rateRef,
          target > rate ? Math.min(target, rate + change) : Math.max(target, rate - change)
        );
      }
      lastTime = t;
      if (rateRef.current !== target) {
        frame = window.requestAnimationFrame(step);
      }
    };
    frame = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(frame);
  }, [isOnScreen, isHovered]);

  return (
    <>
      <StyledTitle>Meet the minds behind nwPlus 💚</StyledTitle>
      <ProfileContent>
        <span>
          <b>{selectedProfile?.name} {selectedProfile?.pronouns && ` (${selectedProfile.pronouns})`}</b> {selectedProfile?.emoji}
        </span>{' '}
        {selectedProfile?.title}
      </ProfileContent>
      <ProfileList
        ref={listRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {
          // will-change enables hardware acceleration for smoother animations
          // duplicate profile maps so that the carousel can loop infinitely
        }
        <div ref={stripRef} style={{ willChange: 'transform' }} id='anim-profiles'>
          {[...profiles, ...profiles].map((profile, i) => (
            <ProfileLink
              href={profile.social}
              key={i}
            >
              <WebpPicture webp={webpFor(profile.img)}>
                <ProfileImage
                  src={profile.img}
                  alt={profile.name}
                  color={profile.color}
                  loading='lazy'
                  decoding='async'
                  onClick={() => setSelectedProfile(profile)}
                  onMouseEnter={() => setSelectedProfile(profile)}
                  onMouseLeave={() => setSelectedProfile({})}
                />
              </WebpPicture>
            </ProfileLink>
          ))}
        </div>
      </ProfileList>
    </>
  );
}
