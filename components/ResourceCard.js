import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  position: relative;
`;
const BadgeContainer = styled.div`
  display: flex;
  position: absolute;
  top: -30px;
  left: -30px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ThumbnailContainer = styled.div`
  display: flex;
  background-image: url(${(props) => props.image});
  width: 295px;
  height: 210px;
  border-radius: 10px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  justify-content: center;
  align-items: center;
  ${(p) => p.theme.mediaQueries.mobile} {
    width: 160px;
    height: 111px;
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
  icon,
  badge = null,
}) {
  return (
    <CardContainer>
      {badge && (
        <BadgeContainer>
          <img width='60px' height='60px' src={badge} />
        </BadgeContainer>
      )}
      <ThumbnailContainer image={image}>
        <img width='40px' height='40px' src={icon} />
      </ThumbnailContainer>
      <TextContainer>
        <ResourceName>{name}</ResourceName>
        <EventName>{event ? event + ' | ' + year : year}</EventName>
      </TextContainer>
    </CardContainer>
  );
}
