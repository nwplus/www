import { useState } from 'react';
import styled from 'styled-components';
import HackathonCard from './HackathonCard';
import NewsletterModal from './NewsletterModal';
import { Body, Title2 } from './Typography';
import Button from './Button';

const HackCampData = {
  imgSrc: '/assets/HackCamp2023.png',
  link: 'https://hackcamp.nwplus.io',
  date: 'Nov 9 - 10',
  registrationOpenDate: "Oct 6",
  open: false,
};
const nwHacksData = {
  imgSrc: '/assets/nwHacks2024.png',
  link: 'https://nwhacks.io',
  date: 'Jan 18 - 19',
  open: true,
};
const cmdfData = {
  imgSrc: '/assets/cmd-f2024.png',
  link: 'https://cmd-f.nwplus.io',
  date: 'Mar 8 - 9',
  open: true,
};

const HackathonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2em;

  ${(p) => p.theme.mediaQueries.mobile} {
    flex-direction: column;
    align-items: center;
  }
`;

const ActionButton = styled(Button)`
  width: 200px;
  height: 60px;
  font-size: 22px;
  margin: auto;
  margin-top: 24px;

  ${(p) => p.theme.mediaQueries.mobile} {
    height: 60px;
    width: 200px;
  }

  &:hover {
    cursor: pointer;
  }
`;

export default function Hackathons() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <HackathonsContainer>
        <HackathonCard
          registrationOpen={HackCampData.open}
          link={HackCampData.link}
          dateString={HackCampData.date}
          // registrationOpenDate={HackCampData.registrationOpenDate}
          imageLink={HackCampData.imgSrc}
        />
        <HackathonCard
          registrationOpen={nwHacksData.open}
          link={nwHacksData.link}
          dateString={nwHacksData.date}
          imageLink={nwHacksData.imgSrc}
        />
        <HackathonCard
          registrationOpen={cmdfData.open}
          link={cmdfData.link}
          dateString={cmdfData.date}
          imageLink={cmdfData.imgSrc}
        />
      </HackathonsContainer>
      <Title2 align='center' lineHeight='6px'>
        Subscribe to our newsletter
      </Title2>
      <Body align='center'>Stay up to date on our hackathons!</Body>
      <ActionButton
        align='center'
        fontColor='white'
        onClick={() => setShowModal(true)}
      >
        Subscribe
      </ActionButton>
      <NewsletterModal show={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}
