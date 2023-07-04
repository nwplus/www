import { useState } from 'react'
import styled from 'styled-components'
import HackathonCard from './HackathonCard'
import NewsletterModal from './NewsletterModal'
import { Body, LinkBody } from './Typography';

const HackCampData = {
  imgSrc: '/assets/HackCamp2022.png',
  link: 'https://hackcamp.nwplus.io',
  date: 'Nov 5 - 6',
  open: false, 
}
const nwHacksData = {
  imgSrc: '/assets/nwHacks2023.jpg',
  link: 'https://nwhacks.io',
  date: 'Jan 21 - 22',
  open: false,
}
const cmdfData = {
  imgSrc: '/assets/cmd-f2023.jpg',
  link: 'https://cmd-f.nwplus.io',
  date: 'Mar 11 - 12',
  open: false,
}
const subscribeCTAText = 'to our newsletter to stay up to date on our hackathons!';

const HackathonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2em;

  ${(p) => p.theme.mediaQueries.mobile} {
    flex-direction: column;
    align-items: center;
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
      <Body align="center"><LinkBody onClick={() => setShowModal(true)}>Subscribe</LinkBody> {subscribeCTAText}</Body>
      <NewsletterModal
        show={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  )
}
