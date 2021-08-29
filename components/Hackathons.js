import { useContext, useState } from 'react'
import styled, { ThemeContext } from 'styled-components'
import HackathonCard from './HackathonCard'
import NewsletterModal from './NewsletterModal'
import { Body } from './Typography';

export default function Hackathons() {
  const themeContext = useContext(ThemeContext);
  const [showModal, setShowModal] = useState(false);

  const HackathonsContainer = styled.div`
    display: flex;

    ${themeContext.mediaQueries.mobile} {
      flex-direction: column;
      align-items: center;
    }
  `;

  const CTA = styled.span`
    font-weight: bold;
    text-decoration: underline;

    &:hover {
      cursor: pointer;
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
      <Body align="center"><CTA onClick={() => setShowModal(true)}>Subscribe</CTA> to our newsletter to stay up to date on our hackathons!</Body>
      <NewsletterModal
        show={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  )
}