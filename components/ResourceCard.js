import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const BadgeContainer = styled.div`
  display: flex; 
  position: absolute; 
  margin-top: -30px; 
  margin-left: -30px;
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
`;

const ResourceName = styled.span`
  margin-top: 8px;
  color: ${p => p.theme.colors.primary}; 
  font-weight: 700; 
  font-size: 18px;
`;

const EventName = styled.span`
  margin-top: 8px;
  color: ${p => p.theme.colors.secondary}; 
  font-size: 13.5px;
`;

export default function ResourceCard ({ name, event = null, year, image, icon, badge = null }) {
    return (
      <div>
        {badge &&
          <BadgeContainer>
            <Image width='60px' height='60px' src={badge} />   
          </BadgeContainer>        
        }          
        <ThumbnailContainer image={image}>   
          <Image width='40px' height='40px' src={icon} />
        </ThumbnailContainer>
        <TextContainer>
          <ResourceName>{name}</ResourceName>
          <EventName>{event ? event + ' | ' + year : year}</EventName>
        </TextContainer>
      </div>
    )
}
