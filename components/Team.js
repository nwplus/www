import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { default as anime } from '../node_modules/animejs/lib/anime.es.js';
import { Title2 } from './Typography.js';

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

const ProfileImage = styled.img`
  &:hover {
    transform: scale(1.15);
    opacity: 1;
  }
  width: 100px;
  height: 100px;
  border-radius: 12px;
  background-color: ${(p) => p.color};
  object-fit: cover;
  margin: 10px;
  transition: all 100ms ease-in-out;
  opacity: 0.42;

  ${(p) => p.theme.mediaQueries.mobile} {
    width: 46px;
    height: 46px;
  }
`;

let lastTime = -1;
let accumulateTime = -1;
const MAX_SPEED = 2;

export default function Team({ profiles }) {
  const [animator, setAnimator] = useState();
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [accel, setAccel] = useState(1);
  const requestRef = useRef();

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

  useEffect(() => {
    if (animator) {
      const vel = accel === 1 ? 0 : MAX_SPEED;
      requestRef.current = window.requestAnimationFrame((t) =>
        animate(animator, accel, vel, t)
      );
    }
    // Cleanup animation frame listener
    return () => window.cancelAnimationFrame(requestRef.current);
  }, [animator, accel]);

  useEffect(() => {
    setAnimator(
      anime({
        targets: ['#anim-profiles'],
        easing: 'linear',
        loop: true,
        translateX: [-(124 * profiles.length), 0],
        duration: 4000 * profiles.length,
        autoplay: false,
      })
    );
  }, [setAnimator]);

  return (
    <>
      <StyledTitle>Meet the minds behind nwPlus</StyledTitle>
      <ProfileContent>
        <span>
          <b>{selectedProfile?.name}</b> {selectedProfile?.emoji}
        </span>{' '}
        {selectedProfile?.title}
      </ProfileContent>
      <ProfileList
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
          {profiles.map((profile, i) => (
            <ProfileImage
              key={i}
              src={profile.img}
              color={profile.color}
              onClick={() => setSelectedProfile(profile)}
              onMouseEnter={() => setSelectedProfile(profile)}
              onMouseLeave={() => setSelectedProfile({})}
            />
          ))}
          {profiles.map((profile, i) => (
            <ProfileImage
              key={i}
              src={profile.img}
              color={profile.color}
              onClick={() => setSelectedProfile(profile)}
              onMouseEnter={() => setSelectedProfile(profile)}
              onMouseLeave={() => setSelectedProfile({})}
            />
          ))}
        </div>
      </ProfileList>
    </>
  );
}
