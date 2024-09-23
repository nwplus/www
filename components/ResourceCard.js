import React from 'react';
import styled from 'styled-components';
import { getResourceIcon } from '../utils/ResourceUtils';

const CardContainer = styled.div`
  position: relative;
  text-align: left;
  ${(p) => p.theme.mediaQueries.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;
const BadgeContainer = styled.div`
  display: flex;
  position: absolute;
  top: -30px;
  left: -30px;

  ${(p) => p.theme.mediaQueries.mobile} {
    top: -24px;
    left: 48px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ThumbnailContainer = styled.div`
  display: flex;
  background-image: url(${(props) => props.image});
  width: 100%;
  height: 210px;
  border-radius: 10px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  justify-content: center;
  align-items: center;  
  ${(p) => p.theme.mediaQueries.mobile} {
    width: 160px;
    height: 112px;
  }
  &:hover {
    background-size: 150%;
  }
  &:hover #icon {
    display: none;
    cursor: pointer;        
  }  
`;

const ResourceName = styled.span`
  margin-top: 8px;
  color: ${(p) => p.theme.colors.primary};
  font-weight: 700;
  font-size: 18px;
`;

const EventName = styled.span`
  margin-top: 8px;
  color: ${(p) => p.theme.colors.secondary};
  font-size: 13.5px;
`;

export default function ResourceCard({
  name,
  event = null,
  year,
  image,
  type,
  badge = null,
  link,
}) {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <CardContainer>
        {badge && (
          <BadgeContainer>
            <img width='60px' height='60px' src={badge} />
          </BadgeContainer>
        )}
        <ThumbnailContainer image={image}>
          <img id='icon' width='40px' height='40px' src={getResourceIcon(type)} />
        </ThumbnailContainer>
        <TextContainer>
          <ResourceName>{name}</ResourceName>
          <EventName>{event ? event + ' | ' + year : year}</EventName>
        </TextContainer>
      </CardContainer>
    </a>
  );
}
