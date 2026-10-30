import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import onFirstInteraction from '../utilities/onFirstInteraction';
import { ContentContainer } from './ContentContainer';
import { LargeTitle, Title2 } from './Typography';
import Button from './Button';
import { SCREEN_BREAKPOINTS } from '../pages/_app';
import heroBg from '../public/assets/hero_illustration.png';
import heroBgWebp from '../public/assets/hero_illustration.webp';
import heroBg1440Webp from '../public/assets/hero_illustration-1440w.webp';
import heroBg1920Webp from '../public/assets/hero_illustration-1920w.webp';
import heroBg2560Webp from '../public/assets/hero_illustration-2560w.webp';
import heroBgMobile from '../public/assets/hero_illustration_mobile.png';
import heroBgMobileWebp from '../public/assets/hero_illustration_mobile.webp';

const MOBILE_MEDIA = `only screen and (max-width: ${SCREEN_BREAKPOINTS.mobile}px)`;

// The illustration spans the full width, so the browser picks the smallest version that covers
// the screen's actual pixel width: standard laptops get the 1440px one, retina screens the full
// 2890px original.
const HERO_WEBP_SRCSET = [
  `${heroBg1440Webp} 1440w`,
  `${heroBg1920Webp} 1920w`,
  `${heroBg2560Webp} 2560w`,
  `${heroBgWebp} 2890w`,
].join(', ');

const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 69%;
  ${(div) => div.theme.mediaQueries.mobile} {
    padding-bottom: 100%;
  }
`;

// The illustration is an <img> rather than a CSS background so the browser finds it in the
// server-rendered HTML and starts downloading it right away. It's the page's LCP image.
const HeroBackground = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  pointer-events: none;
  user-select: none;
  ${(p) => p.theme.mediaQueries.mobile} {
    object-fit: fill;
  }
  @media print {
    display: none;
  }
`;

const HeroTextContainer = styled.div`
  padding-top: 32%;
  ${(div) => div.theme.mediaQueries.mobile} {
    padding-top: 55%;
  }
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
  margin-left: 222.5px;
  width: 65px;
  height: 28px;
  z-index: 1;
  font-size: 0.8em;
  font-weight: 600;

  ${(p) => p.theme.mediaQueries.mobile} {
    height: 22px;
    width: 49px;
    margin-top: -22px;
    margin-left: 200px;
    font-size: 0.8em;
    border-radius: 6px;
  }
`;

const StyledInput = styled.input`
  border: none;
  border-radius: 8px;
  padding: 0px 12px;
  background: white;
  color: black;
  font-weight: normal;
  font-size: 0.7em;
  width: 291px;
  height: 36px;

  ${(p) => p.theme.mediaQueries.mobile} {
    padding: 4px 8px;
    font-size: 10px;
    line-height: 24px;
    width: 179.42px;
    height: 22.2px;
    border-radius: 6px;
  }
`;

const SponsorshipCTA = styled.p`
  background: linear-gradient(92.58deg, #0DEFE1 0%, #78FF96 25%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1em;
`;

const SponsorLink = styled.a`
  font-weight: 600;
  text-decoration: underline;
  text-decoration-color: #78FF96;
`;

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

  // Fetch axios (used by the newsletter form) as soon as the visitor interacts with the page;
  // they have to click or tap into the form before submitting anyway. That way submitting doesn't
  // depend on a later download that could fail, e.g. if a deploy has replaced the file since.
  useEffect(() => onFirstInteraction(() => import('axios').catch(() => {})), []);

  function addToMailingList() {
    setInputMessage('');
    setinputMessageColor('#F65C5C')

    const email = emailInput.current.value;
    const validEmail = validateEmail(email);

    if (validEmail) {
      // Not part of the page's initial JavaScript; normally already fetched by the effect above.
      import('axios')
        .then(({ default: axios }) =>
          axios({
            method: 'POST',
            url: 'https://us-central1-nwplus-ubc.cloudfunctions.net/addToMailingList',
            data: { email },
          })
        )
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
      <picture style={{ display: 'contents' }}>
        <source media={MOBILE_MEDIA} srcSet={heroBgMobileWebp} type='image/webp' />
        <source media={MOBILE_MEDIA} srcSet={heroBgMobile} />
        <source srcSet={HERO_WEBP_SRCSET} sizes='100vw' type='image/webp' />
        <HeroBackground src={heroBg} alt='' fetchpriority='high' draggable='false' />
      </picture>

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
          <SponsorshipCTA>Interested in sponsoring? <SponsorLink href="https://forms.gle/aoT68YNTYYgNxF4f7">Let&apos;s connect!</SponsorLink></SponsorshipCTA>
        </ContentContainer>
      </NewsletterForm>

      <ContentContainer>
        <ScrollContainer>
          <ScrollText>
            <ScrollOval></ScrollOval>Scroll to check out our hackathons and resources!
          </ScrollText>
        </ScrollContainer>
      </ContentContainer>
    </HeroContainer>
  );
}
