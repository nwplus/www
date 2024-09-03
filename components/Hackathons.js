// import { useState } from 'react';
import styled from 'styled-components';
// import HackathonCard from './HackathonCard';
// import NewsletterModal from './NewsletterModal';
// import { Body, Title2 } from './Typography';
import Button from './Button';

const HackCampData = {
  imgSrc: '/assets/HackCampPlanet.svg',
  link: 'https://hackcamp.nwplus.io',
  date: 'Nov 9 - 10',
  registrationOpenDate: "Oct 6",
  open: false,
};
const nwHacksData = {
  imgSrc: '/assets/nwhacksPlanet.svg',
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
  width: 100%;
  justify-content: center;
  display: grid;
  grid-template-columns: 2fr 2fr;
  margin: 10% auto;

  ${(p) => p.theme.mediaQueries.mobile} {
    flex-direction: column;
    align-items: center;
  }
`;

const HackathonPlanet = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 0.5fr 2fr;
`

const HackathonImageContainer = styled.div`
  border-radius: 50%;
  overflow: hidden;
  position: relative;
`

const DashedConnector = styled.div`
  position: relative;
  width: 100%;
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

const HackathonImage = styled.img`
  width: 100%;
  height: 100%;
  filter: blur(3.5px);
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
`

export default function Hackathons() {
  // const [showModal, setShowModal] = useState(false);

  return (
    <>
      <HackathonsContainer>
        {/* HackCamp */}
        <HackathonPlanet>
          <HackathonDetails open={HackCampData.open} style={{ top: "-100px" }}>
            <HackathonTitle>HackCamp</HackathonTitle>
            <HackathonDescriptions>Canada’s largest beginner hackathon, focused on learning.</HackathonDescriptions>
            <HackathonDate>{HackCampData.date}</HackathonDate>
            <HackathonButton href={HackCampData.link} target="_blank">Visit website</HackathonButton>
          </HackathonDetails>

          <DashedConnector open={HackCampData.open} style={{ top: "0px", left: "10px", transform: "rotate(30deg)" }}></DashedConnector>

          <HackathonImageContainer style={{width: "179px", height: "179px", float: "right"}}>
            <HackathonImage src={HackCampData.imgSrc} />
          </HackathonImageContainer>
        </HackathonPlanet>

        {/* nwHacks */}
        <HackathonPlanet>
          <HackathonImageContainer style={{width: "304px", height: "304px"}}>
            <HackathonImage src={nwHacksData.imgSrc} />
          </HackathonImageContainer>
          <DashedConnector open={nwHacksData.open} style={{ top: "80px", left: "-5px", transform: "rotate(-30deg)" }}></DashedConnector>
          <HackathonDetails open={nwHacksData.open} style={{ textAlign: "left" }}>
            <HackathonTitle>nwHacks</HackathonTitle>
            <HackathonDescriptions>Our flagship hackathon – largest in Western Canada.</HackathonDescriptions>
            <HackathonDate>{nwHacksData.date}</HackathonDate>
            <HackathonButton href={nwHacksData.link} target="_blank">Interest Form Open</HackathonButton>
          </HackathonDetails>
        </HackathonPlanet>

        {/* cmd-f */}
        <HackathonPlanet>
          <HackathonDetails open={cmdfData.open} style={{ top: "50px", left: "-10px" }}>
            <HackathonTitle>cmd-f</HackathonTitle>
            <HackathonDescriptions>Hackathon celebrating underrepresented genders in tech.</HackathonDescriptions>
            <HackathonDate>{cmdfData.date}</HackathonDate>
            <HackathonButton href={cmdfData.link} target="_blank">Interest Form Open</HackathonButton>
          </HackathonDetails>

          <DashedConnector open={cmdfData.open} style={{ top: "120px", left: "-5px", transform: "rotate(-30deg)" }}></DashedConnector>

          <HackathonImageContainer style={{width: "214.75px", height: "214.75px", textAlign: "right"}}>
            <HackathonImage src={cmdfData.imgSrc} />
          </HackathonImageContainer>

        </HackathonPlanet>
      </HackathonsContainer>
    </>
  );
}
