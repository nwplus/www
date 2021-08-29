import { useContext, useState } from 'react'
import styled, { ThemeContext } from 'styled-components'
import HackathonCard from './HackathonCard'
import NewsletterModal from './NewsletterModal'
import { Body, LinkBody } from './Typography';

export default function Hackathons() {
  const themeContext = useContext(ThemeContext);
  const [showModal, setShowModal] = useState(false);

  const HackathonsContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 2em;

    ${themeContext.mediaQueries.mobile} {
      flex-direction: column;
      align-items: center;
    }
  `;

  return (
    <>
      <HackathonsContainer>
        <HackathonCard
          registrationOpen={false}
          link="https://hackcamp.nwplus.io"
          dateString="TBA"
          imageLink="/assets/HackCamp2021.png"
        />
        <HackathonCard
          registrationOpen={false}
          link="https://nwhacks.io"
          dateString="TBA"
          imageLink="/assets/nwHacks2021.png"
        />
        <HackathonCard
          registrationOpen={false}
          link="https://cmd-f.nwplus.io"
          dateString="TBA"
          imageLink="/assets/cmd-f2021.png"
        />
      </HackathonsContainer>
      <Body align="center"><LinkBody onClick={() => setShowModal(true)}>Subscribe</LinkBody> to our newsletter to stay up to date on our hackathons!</Body>
      <NewsletterModal
        show={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  )
}