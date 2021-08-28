import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faMediumM,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import Team from './Team'

const FooterContainer = styled.footer`
  background: url(/assets/footer_bg.svg), ${p => p.theme.colors.background};
  background-size: cover;
  color: ${p => p.theme.colors.primary};
  text-align: center;
  padding: 64px 0;
  width: 100%;
`;

const SocialMediaIcons = styled.div`
  font-size: 32px;
  margin-bottom: 32px;

  a {
    margin: 0 32px;
    transition: color 200ms;

    &:hover {
      color: #FFFFFF;
    }
  }
`;


// TODO: Grab profiles from firebase (Do this statically?)

const MOCK_PROFILE = {
  img: 'https://i.imgur.com/TjIKbQu.png',
  name: 'Travis Scott',
  emoji: '🍔',
  color: '#33D39A',
  title: 'Founder of the travis scott burger'
}

const profiles = Array(20).fill(MOCK_PROFILE)

profiles.push({
  img: 'https://pbs.twimg.com/profile_images/864282616597405701/M-FEJMZ0_400x400.jpg',
  name: 'Sundar',
  emoji: '🔤',
  color: '#33D39A',
  title: 'CEO of ABCs'
})

export default function Footer() {
  return (
    <FooterContainer>
      <Team profiles={profiles} />
      <SocialMediaIcons>
        <a href="https://www.facebook.com/nwplusubc" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://www.instagram.com/nwplusubc" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://twitter.com/nwplusubc" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://www.linkedin.com/company/nwplus" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a href="https://www.youtube.com/c/nwPlusUBC" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
        <a href="https://medium.com/nwplusubc" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faMediumM} />
        </a>
      </SocialMediaIcons>
      <div>Copyright &copy; 2021 nwPlus</div>
    </FooterContainer>
  )
}
