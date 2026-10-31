import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { default as anime } from '../node_modules/animejs/lib/anime.es.js';
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

let lastTime = -1;
let accumulateTime = -1;
const MAX_SPEED = 2;

export default function Team({ profiles }) {
  const [animator, setAnimator] = useState();
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [accel, setAccel] = useState(1);
  const [isOnScreen, setIsOnScreen] = useState(false);
  const requestRef = useRef();
  const listRef = useRef();
  const pausedRef = useRef(true);

  // https://codesandbox.io/s/anime-js-speed-adjustment-lm0ui?file=/src/index.js:158-166
  // https://animejs.com/documentation/#tick
  // https://css-tricks.com/using-requestanimationframe-with-react-hooks/
  const animate = (animator, accel, velocity, t) => {
    if (accumulateTime === -1) {
      accumulateTime = t;
    } else {
      const deltaT = t - lastTime;
      velocity = velocity += 0.05 * accel;
      velocity = Math.max(0, velocity);
      velocity = Math.min(MAX_SPEED, velocity);
      accumulateTime += deltaT * velocity;
    }
    lastTime = t;
    animator.tick(accumulateTime);
    requestRef.current = window.requestAnimationFrame((t) =>
      animate(animator, accel, velocity, t)
    );
  };

  // Only run the animation loop while the carousel is on (or about to come on) screen.
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

  useEffect(() => {
    if (!animator || !isOnScreen) {
      pausedRef.current = true;
      return undefined;
    }
    // Coming back on screen, carry on at the speed it would have settled at by now, without
    // jumping ahead by the time spent off screen.
    const resuming = pausedRef.current;
    pausedRef.current = false;
    const startVel = accel === 1 ? 0 : MAX_SPEED;
    const settledVel = accel === 1 ? MAX_SPEED : 0;
    const vel = resuming ? settledVel : startVel;
    requestRef.current = window.requestAnimationFrame((t) => {
      if (resuming) {
        lastTime = t;
      }
      animate(animator, accel, vel, t);
    });
    // Cleanup animation frame listener
    return () => window.cancelAnimationFrame(requestRef.current);
  }, [animator, accel, isOnScreen]);

  useEffect(() => {
    const animation = anime({
      targets: ['#anim-profiles'],
      easing: 'linear',
      loop: true,
      translateX: [-(124 * profiles.length), 0],
      duration: 4000 * profiles.length,
      autoplay: false,
    });
    // Position the strip right away. The loop only runs while it's on screen, so otherwise it
    // would sit untransformed and jump the first time it scrolls into view.
    accumulateTime = window.performance.now();
    animation.tick(accumulateTime);
    setAnimator(animation);
  }, [setAnimator]);

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
        onMouseEnter={() => {
          setAccel(-1);
        }}
        onMouseLeave={() => {
          setAccel(1);
        }}
      >
        {
          // will-change enables hardware acceleration for smoother animations
          // duplicate profile maps so that the carousel can loop infinitely
        }
        <div style={{ willChange: 'transform' }} id='anim-profiles'>
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
