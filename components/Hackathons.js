// import { useState } from 'react';
import styled from 'styled-components';
// import HackathonCard from './HackathonCard';
// import NewsletterModal from './NewsletterModal';
// import { Body, Title2 } from './Typography';
// import Button from './Button';
import SpaceDeer from '../public/assets/space-deer.svg';
import PurpleTexture from '../public/assets/purple-texture.svg';
import hackCampImg from '../public/assets/HackCampPlanet.svg';
import nwHacksImg from '../public/assets/nwHacksPlanet.svg';
import cmdFImg from '../public/assets/cmdfPlanet.svg'

const HackCampData = {
  imgSrc: hackCampImg,
  link: 'https://hackcamp.nwplus.io',
  date: 'Nov 9 - 10',
  registrationOpenDate: 'Oct 6',
  open: false,
};
const nwHacksData = {
  imgSrc: nwHacksImg,
  link: 'https://nwhacks.io',
  date: 'Jan 18 - 19',
  open: true,
};
const cmdfData = {
  imgSrc: cmdFImg,
  link: 'https://cmd-f.nwplus.io',
  date: 'Mar 8 - 9',
  open: true,
};

const HackathonsContainer = styled.div`
  width: 90%;
  justify-content: center;
  display: grid;
  grid-template-columns: 2fr 2fr;
  margin: 10% auto;

  ${(p) => p.theme.mediaQueries.mobile} {
    display: none; /* Hide on mobile */
  }
`;

const MobileHackathonsContainer = styled.div`
  display: none;

  ${(p) => p.theme.mediaQueries.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }
`;

const HackathonPlanet = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 0.5fr 2fr;

  ${(p) => p.theme.mediaQueries.mobile} {
    display: block;
  }
`;

const MobileHackathonPlanet = styled.div`
  display: block;
  width: 100%;
  margin: 10px 0;
`;

const HackathonImageContainer = styled.div`
  border-radius: 50%;
  overflow: hidden;
  position: relative;

  @keyframes float {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

const DashedConnector = styled.div`
  position: relative;
  width: 100%;
  height: 0px;
  border: 1.66px solid #bdbac3;
  border-style: dashed;

  ${(props) =>
    props.open &&
    `
      border: 1.66px solid #00D88A;
      border-style: dashed;
  `}
`;

const MobileDashedConnector = styled.div`
  position: relative;
  width: 80px;
  height: 0px;
  border: 1.66px solid #bdbac3;
  border-style: dashed;
  top: -30px;

  ${(props) =>
    props.open &&
    `
      border: 1.66px solid #00D88A;
      border-style: dashed;
  `}
`;

const HackathonImage = styled.img`
  width: 100%;
  height: 100%;
  filter: blur(3px);
`;

const HackathonDetails = styled.div`
  position: relative;
  border: 1.66px solid #bdbac3;
  border-radius: 24.84px;
  position: relative;
  border-style: dashed;
  text-align: right;
  width: 280px;
  padding: 20px;
  height: 260px;

  ${(props) =>
    props.open &&
    `
      border: 1.66px solid #00D88A;
      border-style: dashed;
  `}
`;

const HackathonTitle = styled.h2`
  color: #fff;
  font-size: 2em;
  margin-top: 0px;
`;

const LiveBadge = styled.span`
  background: #f65c5c;
  color: white;
  padding: 4px 8px;
  border-radius: 6.21px;
  font-size: 0.5em;
`;

const HackathonDescriptions = styled.p`
  color: #fff;
`;

const HackathonDate = styled.p`
  color: #bdbac3;
`;

const HackathonButton = styled.a`
  background: linear-gradient(90deg, #00dbce 0%, #00d88a 100%);
  color: #433860;
  padding: 7px 14px;
  border-radius: 7.76px;
  font-weight: bold;
`;

const MobileHackathonDetails = styled.div`
  position: relative;
  border: 1.66px solid #bdbac3;
  border-radius: 24.84px;
  position: relative;
  border-style: dashed;
  text-align: left;
  width: 100%;
  padding: 20px;
  height: 190px;

  ${(props) =>
    props.open &&
    `
      border: 1.66px solid #00D88A;
      border-style: dashed;
  `}
`;

const MobileHackathonTitle = styled.span`
  color: #fff;
  font-size: 2em;
  margin-top: 0px;
`;

const MobileHackathonDate = styled.span`
  color: #bdbac3;
  float: right;
`;

const PurpleTextureImg = styled.img`
  position: absolute;
  left: -20px;
  margin-top: -60px;
  float: left;

  ${(p) => p.theme.mediaQueries.mobile} {
  }
`;

const SpaceDeerImg = styled.img`
  position: absolute;
  float: right;
  margin-top: -60px;
  right: 20px;

  animation: float 5s ease-in-out infinite;

  @keyframes float {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0);
    }
  }

  ${(p) => p.theme.mediaQueries.mobile} {
    display: none;
  }
`;

const MobileHackathonImageContainer = styled.div`
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  width: 160px;
  height: 160px;
  margin: 20px auto;
`;

const MobileHackathonImage = styled.img`
  width: 100%;
  height: 100%;
  filter: blur(3px);
`;

export default function Hackathons() {
  // const [showModal, setShowModal] = useState(false);

  return (
    <>
      <HackathonsContainer>
        {/* HackCamp */}
        <HackathonPlanet>
          <HackathonDetails open={HackCampData.open} style={{ top: '-100px' }}>
            <HackathonTitle>
              HackCamp {HackCampData.open && <LiveBadge>Live</LiveBadge>}
            </HackathonTitle>
            <HackathonDescriptions>
              Canada’s largest beginner hackathon, focused on learning.
            </HackathonDescriptions>
            <HackathonDate>{HackCampData.date}</HackathonDate>
            <HackathonButton href={HackCampData.link} target='_blank'>
              Visit website
            </HackathonButton>
          </HackathonDetails>

          <DashedConnector
            open={HackCampData.open}
            style={{ top: '0px', left: '10px', transform: 'rotate(30deg)' }}
          ></DashedConnector>

          <HackathonImageContainer
            style={{
              width: '254px',
              height: '254px',
              top: '-30px',
              animation: 'float 5s ease-in-out infinite',
            }}
          >
            <HackathonImage src={HackCampData.imgSrc} />
          </HackathonImageContainer>
        </HackathonPlanet>

        {/* nwHacks */}
        <HackathonPlanet>
          <HackathonImageContainer
            style={{
              width: '220px',
              height: '220px',
              float: 'right',
              animation: 'float 4s ease-in-out infinite',
            }}
          >
            <HackathonImage src={nwHacksData.imgSrc} />
          </HackathonImageContainer>
          <DashedConnector
            open={nwHacksData.open}
            style={{ top: '80px', left: '-25px', transform: 'rotate(-30deg)' }}
          ></DashedConnector>
          <HackathonDetails
            open={nwHacksData.open}
            style={{ textAlign: 'left' }}
          >
            <HackathonTitle>
              nwHacks {nwHacksData.open && <LiveBadge>Live</LiveBadge>}
            </HackathonTitle>
            <HackathonDescriptions>
              Our flagship hackathon – largest in Western Canada.
            </HackathonDescriptions>
            <HackathonDate>{nwHacksData.date}</HackathonDate>
            <HackathonButton href={nwHacksData.link} target='_blank'>
              Interest Form Open
            </HackathonButton>
          </HackathonDetails>
        </HackathonPlanet>

        {/* cmd-f */}
        <HackathonPlanet>
          <HackathonDetails
            open={cmdfData.open}
            style={{ top: '50px', left: '-10px' }}
          >
            <HackathonTitle>
              cmd-f {cmdfData.open && <LiveBadge>Live</LiveBadge>}
            </HackathonTitle>
            <HackathonDescriptions>
              Hackathon celebrating underrepresented genders in tech.
            </HackathonDescriptions>
            <HackathonDate>{cmdfData.date}</HackathonDate>
            <HackathonButton href={cmdfData.link} target='_blank'>
              Interest Form Open
            </HackathonButton>
          </HackathonDetails>

          <DashedConnector
            open={cmdfData.open}
            style={{ top: '120px', left: '-5px', transform: 'rotate(-30deg)' }}
          ></DashedConnector>

          <HackathonImageContainer
            style={{
              width: '214.75px',
              height: '214.75px',
              textAlign: 'right',
              animation: 'float 3.5s ease-in-out infinite',
            }}
          >
            <HackathonImage src={cmdfData.imgSrc} />
          </HackathonImageContainer>
        </HackathonPlanet>
      </HackathonsContainer>

      <MobileHackathonsContainer>
        {/* HackCamp */}
        <MobileHackathonPlanet>
          <MobileHackathonImageContainer>
            <MobileHackathonImage src={HackCampData.imgSrc} />
          </MobileHackathonImageContainer>

          <MobileDashedConnector
            open={HackCampData.open}
            style={{ transform: 'rotate(-40deg)', left: '50px' }}
          ></MobileDashedConnector>

          <MobileHackathonDetails open={HackCampData.open}>
            <MobileHackathonTitle>
              HackCamp {HackCampData.open && <LiveBadge>Live</LiveBadge>}
            </MobileHackathonTitle>
            <MobileHackathonDate>{HackCampData.date}</MobileHackathonDate>

            <HackathonDescriptions>
              Canada’s largest beginner hackathon, focused on learning.
            </HackathonDescriptions>
            <HackathonButton href={HackCampData.link} target='_blank'>
              Visit website
            </HackathonButton>
          </MobileHackathonDetails>
        </MobileHackathonPlanet>

        {/* nwHacks */}
        <MobileHackathonPlanet>
          <MobileHackathonImageContainer>
            <MobileHackathonImage src={nwHacksData.imgSrc} />
          </MobileHackathonImageContainer>

          <MobileDashedConnector
            open={nwHacksData.open}
            style={{ transform: 'rotate(40deg)', left: '260px' }}
          ></MobileDashedConnector>

          <MobileHackathonDetails open={nwHacksData.open}>
            <MobileHackathonTitle>
              nwHacks {nwHacksData.open && <LiveBadge>Live</LiveBadge>}
            </MobileHackathonTitle>
            <MobileHackathonDate>{nwHacksData.date}</MobileHackathonDate>

            <HackathonDescriptions>
              Our flagship hackathon – largest in Western Canada.
            </HackathonDescriptions>
            <HackathonButton href={nwHacksData.link} target='_blank'>
              Interest Form Open
            </HackathonButton>
          </MobileHackathonDetails>
        </MobileHackathonPlanet>

        {/* cmd-f */}
        <MobileHackathonPlanet>
          <MobileHackathonImageContainer>
            <MobileHackathonImage src={cmdfData.imgSrc} />
          </MobileHackathonImageContainer>

          <MobileDashedConnector
            open={cmdfData.open}
            style={{ transform: 'rotate(-40deg)', left: '50px' }}
          ></MobileDashedConnector>

          <MobileHackathonDetails open={cmdfData.open}>
            <MobileHackathonTitle>
              cmd-f {cmdfData.open && <LiveBadge>Live</LiveBadge>}
            </MobileHackathonTitle>
            <MobileHackathonDate>{cmdfData.date}</MobileHackathonDate>

            <HackathonDescriptions>
              Hackathon celebrating underrepresented genders in tech.
            </HackathonDescriptions>
            <HackathonButton href={cmdfData.link} target='_blank'>
              Interest Form Open
            </HackathonButton>
          </MobileHackathonDetails>
        </MobileHackathonPlanet>
      </MobileHackathonsContainer>

      <PurpleTextureImg src={PurpleTexture} />
      <SpaceDeerImg src={SpaceDeer} />
    </>
  );
}
