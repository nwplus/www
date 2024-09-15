// import { useState } from 'react';
import styled from 'styled-components';
// import HackathonCard from './HackathonCard';
// import NewsletterModal from './NewsletterModal';
// import { Body, Title2 } from './Typography';
// import Button from './Button';
import SpaceDeer from '../public/assets/space-deer.svg'
import PurpleTexture from '../public/assets/purple-texture.svg'
import moonOneImg from '../public/assets/moon-1.svg'
import moonTwoImg from '../public/assets/moon-2.svg'
import moonThreeImg from '../public/assets/moon-3.svg'

const HackCampData = {
  imgSrc: '/assets/HackCampPlanet.svg',
  link: 'https://hackcamp.nwplus.io',
  date: 'Nov 9 - 10',
  registrationOpenDate: "Oct 6",
  open: false,
};
const nwHacksData = {
  imgSrc: '/assets/nwHacksPlanet.svg',
  link: 'https://nwhacks.io',
  date: 'Jan 18 - 19',
  open: true,
};
const cmdfData = {
  imgSrc: '/assets/cmdfPlanet.svg',
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
`

const MobileHackathonPlanet = styled.div`
  display: block;
    width: 100%;
  margin: 10px 0;
`;

const MoonContainer = styled.a`
  position: absolute;
  cursor: pointer;
  opacity: 0;
  transition: 0.5s;
`

const HackathonPlanetContainers = styled.div`
  &:hover ${MoonContainer} {
    opacity: 1;
  }
`


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
`

const DashedConnector = styled.div`
  position: relative;
  width: 80%;
  height: 0px;
  border: 1.66px solid #BDBAC3;
  border-style: dashed;

  
  ${(props) =>
    props.open &&
    `
      border: 1.66px solid #00D88A;
      border-style: dashed;
  `}
`

const MobileDashedConnector = styled.div`
  position: relative;
  width: 80px;
  height: 0px;
  border: 1.66px solid #BDBAC3;
  border-style: dashed;
  top: -30px;
  
  ${(props) =>
    props.open &&
    `
      border: 1.66px solid #00D88A;
      border-style: dashed;
  `}
`


const HackathonImage = styled.img`
  width: 100%;
  height: 100%;
  filter: blur(3px);
`

const HackathonDetails = styled.div`
  position: relative;
  border: 1.66px solid #BDBAC3;
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
`

const HackathonTitle = styled.h2`
  color: #FFF;
  font-size: 2em;
  margin-top: 0px;
`

const LiveBadge = styled.span`
  background: #F65C5C;
  color: white;
  padding: 4px 8px;
  border-radius: 6.21px;
  font-size: 0.5em;
`;

const HackathonDescriptions = styled.p`
  color: #FFF;
`

const HackathonDate = styled.p`
  color: #BDBAC3;
`

const HackathonButton = styled.a`
  background: linear-gradient(90deg, #00DBCE 0%, #00D88A 100%);
  color: #433860;
  padding: 7px 14px;
  border-radius: 7.76px;
  font-weight: bold;
`

const MobileHackathonDetails = styled.div`
  position: relative;
  border: 1.66px solid #BDBAC3;
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
`

const MobileHackathonTitle = styled.span`
  color: #FFF;
  font-size: 2em;
  margin-top: 0px;
`

const MobileHackathonDate = styled.span`
  color: #BDBAC3;
  float: right;
`

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


const Moon = styled.img`
  position: relative;
  width: 60px; /* Set moon size */
  height: 60px; /* Set moon size */
`;

const MoonYear = styled.p`
    position: absolute;
    top: -35px;
    // display: none;

`

export default function Hackathons() {
  // const [showModal, setShowModal] = useState(false);

  return (
    <>
      <HackathonsContainer>
        {/* HackCamp */}
        <HackathonPlanet>
          <HackathonDetails open={HackCampData.open} style={{ top: "-100px" }}>
            <HackathonTitle>HackCamp {HackCampData.open && <LiveBadge>Live</LiveBadge>}</HackathonTitle>
            <HackathonDescriptions>Canada’s largest beginner hackathon, focused on learning.</HackathonDescriptions>
            <HackathonDate>{HackCampData.date}</HackathonDate>
            <HackathonButton href={HackCampData.link} target="_blank">Visit website</HackathonButton>
          </HackathonDetails>

          <DashedConnector open={HackCampData.open} style={{ top: "0px", left: "10px", transform: "rotate(30deg)" }}></DashedConnector>

          <HackathonPlanetContainers style={{ animation: "float 5s ease-in-out infinite" }}>
            {/* Position the moons around the planet */}

            <MoonContainer href="https://hackcamp2022.nwplus.io/" style={{top: "-30%", left: "-28px", transform: "translateY(-50%)"}}>
              <MoonYear style={{color: "#3E6C8C"}}>2022</MoonYear>
              <Moon src={moonOneImg} />
            </MoonContainer>

            <MoonContainer href="https://hackcamp2023.nwplus.io/" style={{top: "-25%", left: "105%", transform: "translateX(-50%)"}}>
              <MoonYear style={{color:"#B89C9F"}}>2023</MoonYear>
              <Moon src={moonTwoImg} />
            </MoonContainer>

            <MoonContainer href="https://hackcamp2021.nwplus.io/" style={{top: "90%", right: "42px", transform: "translateY(-50%)"}}>
              <MoonYear style={{color:"#574D94"}}>2021</MoonYear>
              <Moon src={moonThreeImg} />
            </MoonContainer>

            <HackathonImageContainer style={{width: "254px", height: "254px", top:"-75px" }}>
              <HackathonImage src={HackCampData.imgSrc} />
            </HackathonImageContainer>
          </HackathonPlanetContainers>
        </HackathonPlanet>

        {/* nwHacks */}
        <HackathonPlanet>

          <HackathonPlanetContainers style={{ animation: "float 4s ease-in-out infinite" }}>
            {/* Position the moons around the planet */}
            <MoonContainer href="https://2023.nwhacks.io/" style={{top: "20%", left: "-14px", transform: "translateY(-50%)"}}>
              <MoonYear style={{color: "#3E6C8C"}}>2023</MoonYear>
              <Moon src={moonOneImg} />
            </MoonContainer>

            <MoonContainer href="https://2024.nwhacks.io/" style={{top: "-25%", left: "100%", transform: "translateX(-50%)"}}>
              <MoonYear style={{color:"#B89C9F"}}>2024</MoonYear>
              <Moon src={moonTwoImg} />
            </MoonContainer>

            <MoonContainer href="https://2022.nwhacks.io/" style={{top: "100%", right: "-0px", transform: "translateY(-50%)"}}>
              <MoonYear style={{color:"#574D94"}}>2022</MoonYear>
              <Moon src={moonThreeImg} />
            </MoonContainer>

            <HackathonImageContainer style={{width: "220px", height: "220px", float: "right" }}>
              <HackathonImage src={nwHacksData.imgSrc} />
            </HackathonImageContainer>

          </HackathonPlanetContainers>

          <DashedConnector open={nwHacksData.open} style={{ top: "80px", left: "5px", transform: "rotate(-30deg)" }}></DashedConnector>

          <HackathonDetails open={nwHacksData.open} style={{ textAlign: "left" }}>
            <HackathonTitle>nwHacks {nwHacksData.open && <LiveBadge>Live</LiveBadge>}</HackathonTitle>
            <HackathonDescriptions>Our flagship hackathon – largest in Western Canada.</HackathonDescriptions>
            <HackathonDate>{nwHacksData.date}</HackathonDate>
            <HackathonButton href={nwHacksData.link} target="_blank">Interest Form Open</HackathonButton>
          </HackathonDetails>
        </HackathonPlanet>

        {/* cmd-f */}
        <HackathonPlanet>
          <HackathonDetails open={cmdfData.open} style={{ top: "50px", left: "-10px" }}>
            <HackathonTitle>cmd-f {cmdfData.open && <LiveBadge>Live</LiveBadge>}</HackathonTitle>
            <HackathonDescriptions>Hackathon celebrating underrepresented genders in tech.</HackathonDescriptions>
            <HackathonDate>{cmdfData.date}</HackathonDate>
            <HackathonButton href={cmdfData.link} target="_blank">Interest Form Open</HackathonButton>
          </HackathonDetails>

          <DashedConnector open={cmdfData.open} style={{ top: "160px", left: "5px", transform: "rotate(-30deg)" }}></DashedConnector>

          <HackathonPlanetContainers style={{ animation: "float 3.5s ease-in-out infinite" }}>
            {/* Position the moons around the planet */}
            <MoonContainer href="https://cmd-f2023.nwplus.io/" style={{top: "0%", left: "-56px", transform: "translateY(-50%)"}}>
              <MoonYear style={{color: "#3E6C8C"}}>2023</MoonYear>
              <Moon src={moonOneImg} />
            </MoonContainer>

            <MoonContainer href="https://cmd-f2024.nwplus.io/" style={{top: "-5%", left: "100%", transform: "translateX(-50%)"}}>
              <MoonYear style={{color:"#B89C9F"}}>2024</MoonYear>
              <Moon src={moonTwoImg} />
            </MoonContainer>

            <MoonContainer href="https://cmd-f2022.nwplus.io/" style={{top: "110%", left: "50%", transform: "translateY(-50%)"}}>
              <MoonYear style={{color:"#574D94"}}>2022</MoonYear>
              <Moon src={moonThreeImg} />
            </MoonContainer>

            <HackathonImageContainer style={{width: "214.75px", height: "214.75px", textAlign: "right" }}>
              <HackathonImage src={cmdfData.imgSrc} />
            </HackathonImageContainer>
            
          </HackathonPlanetContainers>

        </HackathonPlanet>
      </HackathonsContainer>

      <MobileHackathonsContainer>
        {/* HackCamp */}
        <MobileHackathonPlanet>
          <MobileHackathonImageContainer>
            <MobileHackathonImage src={HackCampData.imgSrc} />
          </MobileHackathonImageContainer>

          <MobileDashedConnector open={HackCampData.open} style={{ transform: "rotate(-40deg)", left: "50px" }}></MobileDashedConnector>

          <MobileHackathonDetails open={HackCampData.open}>
            <MobileHackathonTitle>HackCamp {HackCampData.open && <LiveBadge>Live</LiveBadge>}</MobileHackathonTitle>
            <MobileHackathonDate>{HackCampData.date}</MobileHackathonDate>

            <HackathonDescriptions>Canada’s largest beginner hackathon, focused on learning.</HackathonDescriptions>
            <HackathonButton href={HackCampData.link} target="_blank">Visit website</HackathonButton>
          </MobileHackathonDetails>
        </MobileHackathonPlanet>

        {/* nwHacks */}
        <MobileHackathonPlanet>
          <MobileHackathonImageContainer>
            <MobileHackathonImage src={nwHacksData.imgSrc} />
          </MobileHackathonImageContainer>

          <MobileDashedConnector open={nwHacksData.open} style={{ transform: "rotate(40deg)", left: "260px" }}></MobileDashedConnector>

          <MobileHackathonDetails open={nwHacksData.open}>
            <MobileHackathonTitle>nwHacks {nwHacksData.open && <LiveBadge>Live</LiveBadge>}</MobileHackathonTitle>
            <MobileHackathonDate>{nwHacksData.date}</MobileHackathonDate>

            <HackathonDescriptions>Our flagship hackathon – largest in Western Canada.</HackathonDescriptions>
            <HackathonButton href={nwHacksData.link} target="_blank">Interest Form Open</HackathonButton>
          </MobileHackathonDetails>
        </MobileHackathonPlanet>

        {/* cmd-f */}
        <MobileHackathonPlanet>
          <MobileHackathonImageContainer>
            <MobileHackathonImage src={cmdfData.imgSrc} />
          </MobileHackathonImageContainer>

          <MobileDashedConnector open={cmdfData.open} style={{ transform: "rotate(-40deg)", left: "50px" }}></MobileDashedConnector>

          <MobileHackathonDetails open={cmdfData.open}>
            <MobileHackathonTitle>cmd-f {cmdfData.open && <LiveBadge>Live</LiveBadge>}</MobileHackathonTitle>
            <MobileHackathonDate>{cmdfData.date}</MobileHackathonDate>

            <HackathonDescriptions>Hackathon celebrating underrepresented genders in tech.</HackathonDescriptions>
            <HackathonButton href={cmdfData.link} target="_blank">Interest Form Open</HackathonButton>
          </MobileHackathonDetails>

        </MobileHackathonPlanet>

      </MobileHackathonsContainer>

      <PurpleTextureImg src={PurpleTexture} />
      <SpaceDeerImg src={SpaceDeer} />
    </>
  );
}
