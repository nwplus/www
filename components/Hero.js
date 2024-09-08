import React, { useState, useRef } from 'react';
import Lottie from 'lottie-react';
import styled from 'styled-components';
import axios from 'axios';
import { ContentContainer } from './ContentContainer';
import { LargeTitle, Title2 } from './Typography';
import scollAnimation from './lotties/scroll.json';
import Button from './Button';

const HeroContainer = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 69%;
  background: url(/assets/hero_illustration.svg);
  background-repeat: no-repeat;
  background-position: top;
  background-size: contain;
  ${(div) => div.theme.mediaQueries.mobile} {
    background: url(/assets/hero_illustration_mobile.svg);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    padding-bottom: 100%;
  }
`;

const HeroTextContainer = styled.div`
  padding-top: 28%;
`;

const NewsletterForm = styled.div`
  margin-top: -2.5%;
`;

const FormText = styled.p`
  color: white;
  font-size: 1.4em;
    ${(p) => p.theme.mediaQueries.mobile} {
      font-size: 1em;
    }
`;

const FormResponseText = styled.p`
  font-size: 1em;
`

const ComboButton = styled(Button)`
  position: relative;
  margin-top: -31px;
  margin-left: 250px;
  width: 65px;
  height: 28px;
  z-index: 1;

  ${(p) => p.theme.mediaQueries.mobile} {
    height: 32px;
    width: 90px;
    margin-top: -32px;
    margin-left: calc(100% - 160px);
  }

  &:hover {
    cursor: pointer;
  }
`;

const StyledInput = styled.input`
  border: none;
  border-radius: 8px;
  padding: 8px 12px;
  background: white;
  color: black;
  font-weight: normal;
  font-size: 1em;
  width: 320px;

  ${(p) => p.theme.mediaQueries.mobile} {
    padding: 4px 8px;
    font-size: 14px;
    line-height: 24px;
    width: 230px;
  }
`;

const SponsorshipCTA = styled.p`
  color: #78FF96; // turn into gradient later
  font-size: 1em;
`

const ScrollContainer = styled.div`
  float: left;
  display: flex;
  align-items: center;
  color: ${(p) => p.theme.colors.metadata};
  font-size: 13.5px;
  ${(p) => p.theme.mediaQueries.mobile} {
    display: none;
  }
`;

const ScrollText = styled.p`
  margin-top: -4px;
`;

const ScrollOval = styled.span`
  position: relative;
  top: 10px;
  background: transparent;
  border: 1px solid white;
  border-radius: 50px;
  width: 15px;
  height: 30px;
  display: inline-block;
  margin-right: 15px;
`;

export default function Hero() {
  // const themeContext = useContext(ThemeContext);
  const [inputMessage, setInputMessage] = useState('');
  const [inputMessageColor, setinputMessageColor] = useState('');

  const emailInput = useRef();

  function addToMailingList() {
    setInputMessage('');
    setinputMessageColor('#F65C5C')

    const email = emailInput.current.value;
    const validEmail = validateEmail(email);

    if (validEmail) {
      axios({
        method: 'POST',
        url: 'https://us-central1-nwplus-ubc.cloudfunctions.net/addToMailingList',
        data: { email },
      })
        .then(() => {
          setInputMessage(`Thank you for subscribing!`);
          setinputMessageColor('#78FF96');
          emailInput.current.value = '';
        })
        .catch((err) => {
          if (err.response?.status === 409) {
            setInputMessage(`${email} is already subscribed!`);
            emailInput.current.value = '';
          } else {
            setInputMessage('Something went wrong, please try again later.');
          }
        });
    } else {
      setInputMessage('Please enter a valid email.');
    }
  }

  function validateEmail(email) {
    if (!email.includes('@')) return false;
    const [localPart, domain] = email.split('@');
    if (!localPart || !domain.includes('.') || domain.split('.').some(part => part.length < 1)) {
      return false;
    }
    return true;
  }

  return (
    <HeroContainer>
      <HeroTextContainer>
        <ContentContainer>
          <LargeTitle withGradient>nwPlus</LargeTitle>
          <Title2>Leading Western Canada&#39;s <br /> Biggest Hackathons</Title2>
        </ContentContainer>
      </HeroTextContainer>
      <NewsletterForm>
        <ContentContainer>
          <FormText>Get notified when exciting things drop</FormText>
          <StyledInput
            ref={emailInput}
            name="email"
            type="email"
            placeholder="Email Address"
          />
          <ComboButton
            height="41px"
            width="200px"
            margin="0"
            padding="0"
            onClick={addToMailingList}
          >
            Submit
          </ComboButton>
          {inputMessage && <FormResponseText style={{color: inputMessageColor}}>{inputMessage}</FormResponseText>}
          <SponsorshipCTA>Interested in sponsoring? Reach us at <a href="mailto:sponsorship@nwplus.io">sponsorship@nwplus.io</a>!</SponsorshipCTA>
        </ContentContainer>
      </NewsletterForm>

      <ContentContainer>
        <ScrollContainer>
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: scollAnimation,
              rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice',
              },
            }}
            height={44}
            width={28}
          />
          <ScrollText>
            <ScrollOval></ScrollOval>Scroll to check out our hackathons and resources!
          </ScrollText>
        </ScrollContainer>
      </ContentContainer>
    </HeroContainer>
  );
}
