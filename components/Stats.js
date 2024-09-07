import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Title1 } from './Typography';

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
/**
 *
 * @param {{ stats: { value: number, type: string, description: string }[] }} props
 * @returns
 */
export default function Stats(props) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stats = window.document.querySelector('.stats');
      const renderCountAnimation = () => {
        const valueDisplays = window.document.querySelectorAll('.num');
        const interval = 500;
        valueDisplays.forEach((valueDisplay) => {
          let startValue = 0;
          const endValue = parseInt(valueDisplay.getAttribute('data-val'));
          const id = valueDisplay.getAttribute('id');
          const duration = Math.floor(interval / endValue);
          const counter = setInterval(function () {
            startValue += Math.max(Math.floor((endValue - startValue)/50), 1);
            if (id === 'moneysign') {
              valueDisplay.textContent = `$${startValue}+`;
            } else {
              valueDisplay.textContent = `${startValue}+`;
            }

            if (startValue === endValue) {
              clearInterval(counter);
            }
          }, duration);
        });
      };
      const observer = new window.IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) {
          renderCountAnimation();
        }
      });
      observer.observe(stats);
    }
  });

  return (
    <StatsContainer numRows={props.stats.length} className='stats'>
      {props.stats.map((s, i) => (
        <StatContainer key={i}>
          <Title1 withGradient className='num' id={s.type} data-val={s.value}>
            0
          </Title1>
          <StatDescription>{s.description}</StatDescription>
        </StatContainer>
      ))}
    </StatsContainer>
  );
}
