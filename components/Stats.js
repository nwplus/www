import React from 'react';
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
 * @param {{ stats: { title: string, description: string }[] }} props
 * @returns
 */
export default function Stats(props) {

  return (
    <StatsContainer numRows={props.stats.length}>
      {props.stats.map((s, i) => (
        <StatContainer key={i}>
          <Title1 withGradient>{s.title}</Title1>
          <StatDescription>{s.description}</StatDescription>
        </StatContainer>
      ))}
    </StatsContainer>
  );
}
