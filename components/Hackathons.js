// import { useState } from 'react';
import styled from 'styled-components';
import fireDb from '../utilities/firebase';

import SpaceDeer from '../public/assets/space-deer.svg';
// nwHacks
import nwHacksPlanet from '../public/assets/nwHacksPlanet.png';
import nwMoonOneImg from '../public/assets/nwmoon-1.svg';
import nwMoonTwoImg from '../public/assets/nwmoon-2.svg';
import nwMoonThreeImg from '../public/assets/nwmoon-3.svg';
// cmd-f
import cmdfPlanet from '../public/assets/cmdfPlanet.png';
import cmdfMoonOneImg from '../public/assets/cmdfmoon-1.svg';
import cmdfMoonTwoImg from '../public/assets/cmdfmoon-2.svg';
import cmdfMoonThreeImg from '../public/assets/cmdfmoon-3.svg';
// HackCamp
import hcPlanet from '../public/assets/HackCampPlanet.png';
import hcMoonOneImg from '../public/assets/hcmoon-1.svg';
import hcMoonTwoImg from '../public/assets/hcmoon-2.svg';
import hcMoonThreeImg from '../public/assets/hcmoon-3.svg';
// Mobile tooltips
import leftToolTip from '../public/assets/moon-left-tooltip.svg';
import rightToolTip from '../public/assets/moon-right-tooltip.svg';
import { useState } from 'react';
import { useEffect } from 'react';

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
  margin: 50px 0;
`;

const MoonContainer = styled.a`
  position: absolute;
  cursor: pointer;
  opacity: 0;
  transition: 0.5s;
  ${(p) => p.theme.mediaQueries.mobile} {
    opacity: 1;
  }
  z-index: 100;
`;

const HackathonPlanetContainers = styled.div`
  &:hover ${MoonContainer} {
    opacity: 1;
  }
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
  width: 80%;
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
  filter: blur(2.5px);
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

  &:hover {
    cursor: pointer;
    background: linear-gradient(45deg, #19cbcb 0%, #78ff96 100%);
  }
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

const SpaceDeerImg = styled.img`
  position: absolute;
  float: right;
  margin-top: -60px;
  right: 20px;

  animation: floatDeer 5s ease-in-out infinite;

  @keyframes floatDeer {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px) rotate(20deg);
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

const Moon = styled.img`
  position: relative;
  width: 60px; /* Set moon size */
  height: 60px; /* Set moon size */
`;

const MoonYear = styled.p`
  position: absolute;
  top: -35px;
  left: 20px;
  // display: none;
`;

const ToolTip = styled.img`
  position: absolute;
  top: 60px;
  left: 0px;
  width: 60px;
  height: 60px;
`;

export default function Hackathons() {
  const [hackathonData, setHackathonData] = useState(null);
  const [HackCampData, setHackCampData] = useState(null);
  const [nwHacksData, setNwHacksData] = useState(null);
  const [cmdfData, setCmdfData] = useState(null);
  // const [nextHackathon, setNextHackathon] = useState(null);

  const getHackathonData = async () => {
    const hackathonData = await fireDb.getHackathonData();
    setHackathonData(hackathonData);

    const hackathons = [
      {
        name: 'HackCamp',
        data: {
          imgSrc: hcPlanet,
          link: 'https://hackcamp.nwplus.io',
          date: hackathonData['hackathonWeekend']['hackcamp'],
          start: hackathonData['hackathonStart']['hackcamp'],
          open: hackathonData['applicationsOpen']['hackcamp'],
        },
      },
      {
        name: 'nwHacks',
        data: {
          imgSrc: nwHacksPlanet,
          link: 'https://nwhacks.io',
          date: hackathonData['hackathonWeekend']['nwhacks'],
          start: hackathonData['hackathonStart']['nwhacks'],
          open: hackathonData['applicationsOpen']['nwhacks'],
        },
      },
      {
        name: 'cmd-f',
        data: {
          imgSrc: cmdfPlanet,
          link: 'https://cmd-f.nwplus.io',
          date: hackathonData['hackathonWeekend']['cmd-f'],
          start: hackathonData['hackathonStart']['cmd-f'],
          open: hackathonData['applicationsOpen']['cmd-f'],
        },
      },
    ];

    const sortedHackathons = hackathons.sort((a, b) => {
      const today = new Date();
      const threeDayBuffer = (date) => {
        const bufferDate = new Date(date);
        bufferDate.setDate(bufferDate.getDate() + 3);
        return bufferDate;
      };

      const aDate = new Date(a.data.start);
      const bDate = new Date(b.data.start);

      // Check if the events are past
      const aIsPast = today > threeDayBuffer(a.data.start);
      const bIsPast = today > threeDayBuffer(b.data.start);

      // If one is past and the other isn't, sort accordingly
      if (aIsPast && !bIsPast) return 1;
      if (!aIsPast && bIsPast) return -1;

      // Otherwise, sort by date
      return aDate - bDate;
    });
    // Styling based on the position
    const getStyleForHackathon = (index) => {
      switch (index) {
        case 0:
          return { width: '254px', height: '254px' };
        case 1:
          return { width: '220px', height: '220px' };
        case 2:
          return { width: '214.75px', height: '214.75px' };
        default:
          return {};
      }
    };
    // Add dynamic width and height to each hackathon data
    sortedHackathons.forEach((hackathon, index) => {
      const style = getStyleForHackathon(index);
      hackathon.data.width = style.width;
      hackathon.data.height = style.height;
    });
    // Dynamically set the data based on the sorted order
    if (sortedHackathons.length > 0) {
      // Ensure names are correctly assigned to their respective states
      sortedHackathons.forEach((hackathon) => {
        switch (hackathon.name) {
          case 'HackCamp':
            setHackCampData(hackathon.data || {});
            break;
          case 'nwHacks':
            setNwHacksData(hackathon.data || {});
            break;
          case 'cmd-f':
            setCmdfData(hackathon.data || {});
            break;
          default:
            break;
        }
      });
    }
  };

  useEffect(() => {
    console.log('HackCampData updated:', HackCampData);
  }, [HackCampData]);

  useEffect(() => {
    console.log('nwHacksData updated:', nwHacksData);
  }, [nwHacksData]);

  useEffect(() => {
    console.log('cmdfData updated:', cmdfData);
  }, [cmdfData]);

  useEffect(() => {
    getHackathonData();
  }, []);

  if (!hackathonData || !HackCampData || !nwHacksData || !cmdfData) {
    return <></>;
  }

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
              Visit Website
            </HackathonButton>
          </HackathonDetails>

          <DashedConnector
            open={HackCampData.open}
            style={{ top: '0px', left: '10px', transform: 'rotate(30deg)' }}
          ></DashedConnector>

          <HackathonPlanetContainers
            style={{ animation: 'float 5s ease-in-out infinite' }}
          >
            {/* Position the moons around the planet */}

            <MoonContainer
              href='https://hackcamp2022.nwplus.io/'
              style={{
                top: '-30%',
                left: '-28px',
                transform: 'translateY(-50%)',
              }}
            >
              <MoonYear style={{ color: '#595E8F' }}>2022</MoonYear>
              <Moon src={hcMoonTwoImg} />
            </MoonContainer>

            <MoonContainer
              href='https://hackcamp2023.nwplus.io/'
              style={{
                top: '-20%',
                left: '110%',
                transform: 'translateX(-50%)',
              }}
            >
              <MoonYear style={{ color: '#8A8183' }}>2023</MoonYear>
              <Moon src={hcMoonOneImg} />
            </MoonContainer>

            <MoonContainer
              href='https://hackcamp2021.nwplus.io/'
              style={{
                top: '80%',
                right: '42px',
                transform: 'translateY(-50%)',
              }}
            >
              <MoonYear style={{ color: '#265F71' }}>2021</MoonYear>
              <Moon src={hcMoonThreeImg} />
            </MoonContainer>

            <HackathonImageContainer
              style={{
                width: HackCampData.width,
                height: HackCampData.height,
                top: '-75px',
              }}
            >
              <HackathonImage src={HackCampData.imgSrc} />
            </HackathonImageContainer>
          </HackathonPlanetContainers>
        </HackathonPlanet>

        {/* nwHacks */}
        <HackathonPlanet>
          <HackathonPlanetContainers
            style={{ animation: 'float 4s ease-in-out infinite' }}
          >
            {/* Position the moons around the planet */}
            <MoonContainer
              href='https://2023.nwhacks.io/'
              style={{
                top: '20%',
                left: '-14px',
                transform: 'translateY(-50%)',
              }}
            >
              <MoonYear style={{ color: '#3E6C8C' }}>2023</MoonYear>
              <Moon src={nwMoonOneImg} />
            </MoonContainer>

            <MoonContainer
              href='https://2024.nwhacks.io/'
              style={{
                top: '-25%',
                left: '100%',
                transform: 'translateX(-50%)',
              }}
            >
              <MoonYear style={{ color: '#B89C9F' }}>2024</MoonYear>
              <Moon src={nwMoonTwoImg} />
            </MoonContainer>

            <MoonContainer
              href='https://2022.nwhacks.io/'
              style={{
                top: '105%',
                right: '-0px',
                transform: 'translateY(-50%)',
              }}
            >
              <MoonYear style={{ color: '#574D94' }}>2022</MoonYear>
              <Moon src={nwMoonThreeImg} />
            </MoonContainer>

            <HackathonImageContainer
              style={{
                width: nwHacksData.width,
                height: nwHacksData.height,
                float: 'right',
              }}
            >
              <HackathonImage src={nwHacksData.imgSrc} />
            </HackathonImageContainer>
          </HackathonPlanetContainers>

          <DashedConnector
            open={nwHacksData.open}
            style={{ top: '80px', left: '5px', transform: 'rotate(-30deg)' }}
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
              Visit website
            </HackathonButton>
          </HackathonDetails>
        </HackathonPlanet>

        {/* cmd-f */}
        <HackathonPlanet style={{ position: 'relative', left: '100px' }}>
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
            <HackathonButton href={cmdfData.link} target="_blank">Visit website</HackathonButton>
          </HackathonDetails>

          <DashedConnector
            open={cmdfData.open}
            style={{ top: '160px', left: '5px', transform: 'rotate(-30deg)' }}
          ></DashedConnector>

          <HackathonPlanetContainers
            style={{ animation: 'float 3.5s ease-in-out infinite' }}
          >
            {/* Position the moons around the planet */}
            <MoonContainer
              href='https://cmd-f2023.nwplus.io/'
              style={{
                top: '0%',
                left: '-56px',
                transform: 'translateY(-50%)',
              }}
            >
              <MoonYear style={{ color: '#3B9884' }}>2023</MoonYear>
              <Moon src={cmdfMoonThreeImg} />
            </MoonContainer>

            <MoonContainer
              href='https://cmd-f2024.nwplus.io/'
              style={{
                top: '-5%',
                left: '100%',
                transform: 'translateX(-50%)',
              }}
            >
              <MoonYear style={{ color: '#DDC4B1' }}>2024</MoonYear>
              <Moon src={cmdfMoonOneImg} />
            </MoonContainer>

            <MoonContainer
              href='https://cmd-f2022.nwplus.io/'
              style={{
                top: '110%',
                left: '50%',
                transform: 'translateY(-50%)',
              }}
            >
              <MoonYear style={{ color: '#E7D1C7' }}>2022</MoonYear>
              <Moon src={cmdfMoonTwoImg} />
            </MoonContainer>

            <HackathonImageContainer
              style={{
                width: cmdfData.width,
                height: cmdfData.height,
                textAlign: 'right',
              }}
            >
              <HackathonImage src={cmdfData.imgSrc} />
            </HackathonImageContainer>
          </HackathonPlanetContainers>
        </HackathonPlanet>
      </HackathonsContainer>

      <MobileHackathonsContainer>
        {/* HackCamp */}
        <MobileHackathonPlanet>
          <HackathonPlanetContainers
            style={{ animation: 'float 5s ease-in-out infinite' }}
          >
            <MoonContainer
              href='https://hackcamp2022.nwplus.io/'
              style={{
                top: '20%',
                right: '0px',
                transform: 'translateY(-50%)',
              }}
            >
              <MoonYear style={{ color: '#595E8F' }}>2022</MoonYear>
              <Moon src={hcMoonTwoImg} />
            </MoonContainer>

            <MoonContainer
              href='https://hackcamp2023.nwplus.io/'
              style={{ top: '0%', left: '10%', transform: 'translateX(-50%)' }}
            >
              <MoonYear style={{ color: '#8A8183' }}>2023</MoonYear>
              <Moon src={hcMoonOneImg} />
              <ToolTip src={rightToolTip} />
            </MoonContainer>

            <MoonContainer
              href='https://hackcamp2021.nwplus.io/'
              style={{ top: '100%', right: '0', transform: 'translateY(-50%)' }}
            >
              <MoonYear style={{ color: '#265F71' }}>2021</MoonYear>
              <Moon src={hcMoonThreeImg} />
            </MoonContainer>

            <MobileHackathonImageContainer>
              <MobileHackathonImage src={HackCampData.imgSrc} />
            </MobileHackathonImageContainer>
          </HackathonPlanetContainers>

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
          <HackathonPlanetContainers
            style={{ animation: 'float 4s ease-in-out infinite' }}
          >
            {/* Position the moons around the planet */}
            <MoonContainer
              href='https://2023.nwhacks.io/'
              style={{
                top: '20%',
                right: '0px',
                transform: 'translateY(-50%)',
              }}
            >
              <MoonYear style={{ color: '#3E6C8C' }}>2023</MoonYear>
              <Moon src={nwMoonOneImg} />
              <ToolTip src={leftToolTip} />
            </MoonContainer>

            <MoonContainer
              href='https://2024.nwhacks.io/'
              style={{ top: '-5%', left: '10%', transform: 'translateX(-50%)' }}
            >
              <MoonYear style={{ color: '#B89C9F' }}>2024</MoonYear>
              <Moon src={nwMoonTwoImg} />
            </MoonContainer>

            <MoonContainer
              href='https://2022.nwhacks.io/'
              style={{
                top: '100%',
                left: '10%',
                transform: 'translateY(-50%)',
              }}
            >
              <MoonYear style={{ color: '#574D94' }}>2022</MoonYear>
              <Moon src={nwMoonThreeImg} />
            </MoonContainer>

            <MobileHackathonImageContainer>
              <MobileHackathonImage src={nwHacksData.imgSrc} />
            </MobileHackathonImageContainer>
          </HackathonPlanetContainers>

          <MobileDashedConnector
            open={nwHacksData.open}
            style={{ transform: 'rotate(40deg)', left: '260px' }}
          ></MobileDashedConnector>

          <MobileHackathonDetails open={nwHacksData.open}>
            <MobileHackathonTitle>
              nwHacks {nwHacksData.open && <LiveBadge>Live</LiveBadge>}
            </MobileHackathonTitle>
            <MobileHackathonDate>{nwHacksData.date}</MobileHackathonDate>

            <HackathonDescriptions>Our flagship hackathon – largest in Western Canada.</HackathonDescriptions>
            <HackathonButton href={nwHacksData.link} target="_blank">Visit website</HackathonButton>
          </MobileHackathonDetails>
        </MobileHackathonPlanet>

        {/* cmd-f */}
        <MobileHackathonPlanet>
          <HackathonPlanetContainers
            style={{ animation: 'float 3.5s ease-in-out infinite' }}
          >
            <MoonContainer
              href='https://cmd-f2023.nwplus.io/'
              style={{
                top: '20%',
                right: '0px',
                transform: 'translateY(-50%)',
              }}
            >
              <MoonYear style={{ color: '#3B9884' }}>2023</MoonYear>
              <Moon src={cmdfMoonThreeImg} />
            </MoonContainer>

            <MoonContainer
              href='https://cmd-f2024.nwplus.io/'
              style={{ top: '0%', left: '10%', transform: 'translateX(-50%)' }}
            >
              <MoonYear style={{ color: '#DDC4B1' }}>2024</MoonYear>
              <Moon src={cmdfMoonOneImg} />
              <ToolTip src={rightToolTip} />
            </MoonContainer>

            <MoonContainer
              href='https://cmd-f2022.nwplus.io/'
              style={{ top: '100%', right: '0', transform: 'translateY(-50%)' }}
            >
              <MoonYear style={{ color: '#E7D1C7' }}>2022</MoonYear>
              <Moon src={cmdfMoonTwoImg} />
            </MoonContainer>

            <MobileHackathonImageContainer>
              <MobileHackathonImage src={cmdfData.imgSrc} />
            </MobileHackathonImageContainer>
          </HackathonPlanetContainers>

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
              Apply now!
            </HackathonButton>
          </MobileHackathonDetails>
        </MobileHackathonPlanet>
      </MobileHackathonsContainer>

      <SpaceDeerImg src={SpaceDeer} />
    </>
  );
}
