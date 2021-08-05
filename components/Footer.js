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

const MOCK_PROFILE = {
  img: 'https://www.pngall.com/wp-content/uploads/2016/06/Obama-Free-Download-PNG.png',
  name: 'Travis Scott',
  title: 'Founder of the travis scott burger'
}

const profiles = Array(20).fill(MOCK_PROFILE)

const FooterContainer = styled.footer`
  background: url(/assets/footer_bg.svg), ${p => p.theme.colors.background};
  background-size: cover;
  color: ${p => p.theme.colors.primary};
  text-align: center;
  padding: 64px 0;
`;

const Header = styled.h2`
  font-weight: 500;
  font-size: 1.9em;
`

const ProfileList = styled.div`
  height: 140px;
  overflow-x: auto;
  white-space: nowrap;
  scrollbar-height: none; 
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 12px;
  background-color: red;
  object-fit: cover;
  margin: 0 1em;
`

const SocialMediaIcons = styled.div`
  font-size: 32px;
  margin-bottom: 32px;

  a {
    margin: 0 32px;

    &:hover {
      color: #FFFFFF;
    }
  }
`;

export default function Footer() {
  console.log(profiles)
  return (
    <FooterContainer>
      <Header>Meet the minds behind nwPlus</Header>
      <ProfileList>
        {profiles.map((profile) => (
          <ProfileImage src={profile.img} />
        ))}
      </ProfileList>
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
      Copyright &copy; 2021 nwPlus
    </FooterContainer>
  )
}
