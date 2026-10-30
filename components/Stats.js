import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Title1 } from './Typography';

// Browsers clamp repeating timers to at least 4ms.
const MIN_TIMER_MS = 4;

const StatsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const StatContainer = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 80px 20px;
  background-image: linear-gradient(to bottom, #e9e2ff4d, #4836814d);
  border-radius: 8px;
  text-align: center;

  ${(p) => p.theme.mediaQueries.mobile} {
    width: 150px;
    padding: 40px 16px;
  }
`;

const StatDescription = styled.div`
  font-size: 21px;
  color: #e2d6ff;
  text-transform: uppercase;
  font-weight: bold;

  ${(p) => p.theme.mediaQueries.mobile} {
    font-size: 16px;
  }
`;

/** @typedef {{ value: number, type: string, description: string }} StatProps */

/**
 * @param {{stat: StatProps}} param0
 */
function Stat({ stat: s }) {
  // const cardRef = useRef(null);

  // useEffect(() => {
  //   const card = cardRef.current;

  //   const spinAnimation = anime({
  //     targets: card,
  //     rotateX: '360deg',
  //     duration: 400,
  //     easing: 'easeInOutSine',
  //     autoplay: false,
  //     complete: () => {
  //       cardRef.current.style.transform = 'rotateX(0deg)';
  //     },
  //   });

  //   const onMouseEnter = () => {
  //     spinAnimation.play();
  //   };

  //   const onMouseLeave = () => {
  //     spinAnimation.reverse();
  //     spinAnimation.play();
  //   }

  //   card.addEventListener('mouseenter', onMouseEnter);
  //   card.addEventListener('mouseleave', onMouseLeave);

  //   return () => {
  //     card.removeEventListener('mouseenter', onMouseEnter);
  //     card.removeEventListener('mouseleave', onMouseLeave);
  //   };
  // }, []);

  return (
    <StatContainer>
      <Title1 withGradient className='num' id={s.type} data-val={s.value}>
        0
      </Title1>
      <StatDescription>{s.description}</StatDescription>
    </StatContainer>
  );
}

/**
 *
 * @param {{ stats: StatProps[] }} props
 * @returns
 */
export default function Stats(props) {
  const [observed, setObserved] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stats = window.document.querySelector('.stats');

      const observer = new window.IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting && !observed) {
          renderCountAnimation();
          setObserved(true);
        }
      });
      observer.observe(stats);

      const renderCountAnimation = () => {
        const valueDisplays = window.document.querySelectorAll('.num');
        const interval = 500;
        // One animation-frame loop drives every counter. Each counter still steps at the
        // cadence its old setInterval had (browsers run timers at most every 4ms), so the
        // count-up looks the same, but the page is only updated once per frame.
        const counters = Array.from(valueDisplays).map((valueDisplay) => {
          const endValue = parseInt(valueDisplay.getAttribute('data-val'));
          return {
            valueDisplay,
            endValue,
            isMoney: valueDisplay.getAttribute('id') === 'moneysign',
            stepMs: Math.max(Math.floor(interval / endValue), MIN_TIMER_MS),
            value: 0,
            steps: 0,
          };
        });
        const start = window.performance.now();

        const tick = (now) => {
          let running = false;
          counters.forEach((counter) => {
            const dueSteps = Math.floor((now - start) / counter.stepMs);
            if (counter.value !== counter.endValue && counter.steps < dueSteps) {
              while (counter.steps < dueSteps && counter.value !== counter.endValue) {
                counter.value += Math.max(
                  Math.floor((counter.endValue - counter.value) / 50),
                  1
                );
                counter.steps += 1;
              }
              counter.valueDisplay.textContent = counter.isMoney
                ? `$${counter.value}+`
                : `${counter.value}+`;
            }
            if (counter.value !== counter.endValue) {
              running = true;
            }
          });
          if (running) {
            window.requestAnimationFrame(tick);
          }
        };
        window.requestAnimationFrame(tick);
      };

      return () => observer.disconnect();
    }
  }, [observed]);

  return (
    <StatsContainer numRows={props.stats.length} className='stats'>
      {props.stats.map((s, i) => (
        <Stat stat={s} key={i} />
      ))}
    </StatsContainer>
  );
}
