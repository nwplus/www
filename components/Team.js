import React, { useRef, useEffect, useState } from 'react'
import styled from 'styled-components';
import { default as anime }  from '../node_modules/animejs/lib/anime.es.js'

const MOCK_PROFILE = {
    img: 'https://i.imgur.com/TjIKbQu.png',
    name: 'Travis Scott',
    title: 'Founder of the travis scott burger'
}
  
const profiles = Array(20).fill(MOCK_PROFILE)

profiles.push({
    img: 'https://pbs.twimg.com/profile_images/864282616597405701/M-FEJMZ0_400x400.jpg',
    name: 'Sundar',
    title: 'CEO of ABCs'
})

const Header = styled.h2`
    font-weight: 500;
    font-size: 1.9em;
`

const ProfileContent = styled.p`
    color: white;
`

const ProfileList = styled.div`
    height: 130px;
    overflow-x: hidden;
    white-space: nowrap;
    margin-bottom: 20px;
`

const ProfileImage = styled.img`
    &:hover {
    transform: scale(1.15);
    opacity: 1;
    }
    width: 100px;
    height: 100px;
    border-radius: 12px;
    background-color: red;
    object-fit: cover;
    margin: 10px;
    transition: all 100ms ease-in-out;
    opacity: 0.7;
`

let lastTime = -1
let accumulateTime = -1
const MAX_SPEED = 1

export default function Team() {
    const [animator, setAnimator] = useState()
    const [selectedProfile, setSelectedProfile] = useState(profiles[8])
    const [accel, setAccel] = useState(1)
    const requestRef = useRef()
  
    // https://codesandbox.io/s/anime-js-speed-adjustment-lm0ui?file=/src/index.js:158-166
    // https://animejs.com/documentation/#tick
    // https://css-tricks.com/using-requestanimationframe-with-react-hooks/
    const animate = (animator, accel, velocity, t) => {
      if (accumulateTime === -1) {
        accumulateTime = t
      } else {
        const deltaT = t - lastTime;
        velocity = velocity += 0.05 * accel
        velocity = Math.max(0, velocity)
        velocity = Math.min(MAX_SPEED, velocity)
        accumulateTime += deltaT * velocity;
      }
      lastTime = t;
      animator.tick(accumulateTime)
      requestRef.current = window.requestAnimationFrame((t) => animate(animator, accel, velocity, t));
    }
    
    useEffect(() => {
      if (animator) {
        const vel = accel === 1 ? 0 : MAX_SPEED;
        requestRef.current = window.requestAnimationFrame((t) => animate(animator, accel, vel, t))
      }
      // Cleanup animation frame listener
      return () => window.cancelAnimationFrame(requestRef.current);
    }, [animator, accel])
  
    useEffect(() => {
      setAnimator(anime({
        targets: ['#anim-profiles'],
        easing: 'linear',
        loop: true,
        translateX: [-(124 * profiles.length), 0],
        duration: 4000 * profiles.length,
        autoplay: false,
      }))
    }, [setAnimator]);

    return (
        <>
            <Header>Meet the minds behind nwPlus</Header>
            <ProfileContent>
                <b>{selectedProfile.name}</b> {selectedProfile.title}
            </ProfileContent>
            <ProfileList
                onMouseEnter={() => {
                    setAccel(-1)
                }}
                onMouseLeave={() => {
                    setAccel(1)
                }}
            >
            {/* will-change enables hardware acceleration for smoother animations */}
            {/* duplicate profile maps so that the carousel can loop infinitely */}
            <div style={{ 'will-change': 'transform' }} id="anim-profiles">
                {profiles.map((profile, i) => (
                <ProfileImage
                    key={i}
                    src={profile.img}
                    onClick={() => setSelectedProfile(profile)}
                    onMouseEnter={() => setSelectedProfile(profile)}
                />
                ))}
                {profiles.map((profile, i) => (
                <ProfileImage
                    key={i}
                    src={profile.img}
                    onClick={() => setSelectedProfile(profile)}
                    onMouseEnter={() => setSelectedProfile(profile)}
                />
                ))}
            </div>
            </ProfileList>
        </>
    )
    
}