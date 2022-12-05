import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faMedium,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import Team from './Team';

const FooterContainer = styled.footer`
  background: url(/assets/footer_bg.svg), ${(p) => p.theme.colors.background};
  background-size: cover;
  color: #ffffff;
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
      color: ${(p) => p.theme.colors.primary};
    }
  }

  ${(p) => p.theme.mediaQueries.mobile} {
    a {
      margin: 0 10px;
    }
  }
`;

const Links = styled.div`
  display: flex;
  gap: 1em;
  justify-content: center;
  margin-bottom: 32px;  

  a {
    transition: color 200ms;
    text-decoration: underline;

    &:hover {
      color: ${(p) => p.theme.colors.primary};
    }
  }
`;

const profiles = [
  {
    img: '/assets/profiles/Alan_Wang.png',
    name: 'Alan Wang',
    emoji: '🪐',
    color: '#FFFFFF',
    title: 'nwHacks Logistics Coordinator'
  },
  {
    img: '/assets/profiles/Alex_Hernandez.png',
    name: 'Alex Hernandez',
    emoji: '🦖',
    color: '#A1C9BA',
    title: 'Design Co-Director'
  },
  {
    img: '/assets/profiles/Alvin_Zhou.png',
    name: 'Alvin Zhou',
    emoji: '✨',
    color: '#FFFFFF',
    title: 'nwHacks Logistics Coordinator'
  },
  {
    img: '/assets/profiles/Amy_Jo.png',
    name: 'Amy Jo',
    emoji: '✨',
    color: '#ffc0b5',
    title: 'Development Coordinator'
  },
  {
    img: '/assets/profiles/Angela_Zhou.png',
    name: 'Angela Zhou',
    emoji: '🐣',
    color: '#FAF4EA',
    title: 'cmd-f Logistics Coordinator'
  },
  {
    img: '/assets/profiles/Angelina_Hsu.png',
    name: 'Angelina Hsu',
    emoji: '🧃',
    color: '#90A58A',
    title: 'Marketing Coordinator'
  },
  {
    img: '/assets/profiles/Anson_Chung.png',
    name: 'Anson Chung',
    emoji: '🤡',
    color: '#878EBB',
    title: 'Development Coordinator'
  },
  {
    img: '/assets/profiles/Aurora_Cheng.png',
    name: 'Aurora Cheng',
    emoji: '✨',
    color: '#FFF',
    title: 'Marketing Coordinator'
  },
  {
    img: '/assets/profiles/Austin_Leung.png',
    name: 'Austin Leung',
    emoji: '🫡',
    color: '#FFF',
    title: 'Marketing Coordinator'
  },
  {
    img: '/assets/profiles/Ben_Cheung.png',
    name: 'Ben Cheung',
    emoji: '🚀',
    color: '#FFBF00',
    title: 'Engagement Co-Director'
  },
  {
    img: '/assets/profiles/Bernice_Tang.png',
    name: 'Bernice Tang',
    emoji: '🦋',
    color: '#B19BF0',
    title: 'Sponsorship Director'
  },
  {
    img: '/assets/profiles/Byron_Wang.png',
    name: 'Byron Wang',
    emoji: '😌',
    color: '#B90E0A',
    title: 'HackCamp Logistics Coordinator'
  },
  {
    img: '/assets/profiles/Carmen_Xu.png',
    name: 'Carmen Xu',
    emoji: '🍰',
    color: '#616F5E',
    title: 'cmd-f Logistics Coordinator'
  },
  {
    img: '/assets/profiles/Charlene_Chiu.png',
    name: 'Charlene Chiu',
    emoji: '🌸',
    color: '#EBCEDF',
    title: 'Marketing Coordinator'
  },
  {
    img: '/assets/profiles/Daphne_Tian.png',
    name: 'Daphne Tian',
    emoji: '🐅',
    color: '#BDB5D5',
    title: 'Design Coordinator'
  },
  {
    img: '/assets/profiles/Derek_Chen.png',
    name: 'Derek Chen',
    emoji: '✨',
    color: '#D56217',
    title: 'Development Coordinator'
  },
  {
    img: '/assets/profiles/Donald_Lee.png',
    name: 'Donald Lee',
    emoji: '😮',
    color: '#3988FF',
    title: 'Development Coordinator'
  },
  {
    img: '/assets/profiles/Edward_Li.png',
    name: 'Edward Li',
    emoji: '🧙‍♂️',
    color: '#66b900',
    title: 'First Year Representative'
  },
  {
    img: '/assets/profiles/Gordon_Wu.png',
    name: 'Gordon Wu',
    emoji: '🤠',
    color: '#5E6B62',
    title: 'Design Coordinator'
  },
  {
    img: '/assets/profiles/Irene_Zhang.png',
    name: 'Irene Zhang',
    emoji: '🖌️',
    color: '#AED5D9',
    title: 'Design Co-Director'
  },
  {
    img: '/assets/profiles/Isaac_Chung.png',
    name: 'Isaac Chung',
    emoji: '🙃',
    color: '#113969',
    title: 'Sponsorships Coordinator'
  },
  {
    img: '/assets/profiles/JaeWu_Chun.png',
    name: 'Jae Wu Chun',
    emoji: '🍗',
    color: '#FFC6ED',
    title: 'Development Director'
  },
  {
    img: '/assets/profiles/Janaye_Cheong.png',
    name: 'Janaye Cheong',
    emoji: '🥮',
    color: '#73b791',
    title: 'HackCamp Logistics Coordinator'
  },
  {
    img: '/assets/profiles/Jessica_Liu.png',
    name: 'Jessica Liu',
    emoji: '☕️',
    color: '#FFDDE6',
    title: 'Engagement Co-Director'
  },
  {
    img: '/assets/profiles/Joanne_Lee.png',
    name: 'Joanne Lee',
    emoji: '✨',
    color: '#7FBCF5',
    title: 'cmd-f Logistics Coordinator'
  },
  {
    img: '/assets/profiles/Katie_Wong.png',
    name: 'Katie Wong',
    emoji: '🐰',
    color: '#808080',
    title: 'Marketing Coordinator'
  },
  {
    img: '/assets/profiles/Kevin_Wu.png',
    name: 'Kevin Wu',
    emoji: '🥖',
    color: '#FFFFFF',
    title: 'Project Manager'
  },
  {
    img: '/assets/profiles/Kitty_Liu.png',
    name: 'Kitty Liu',
    emoji: '🐈',
    color: '#FFFFFF',
    title: 'Marketing Coordinator'
  },
  {
    img: '/assets/profiles/Lincoln_Lee.png',
    name: 'Lincoln Lee',
    emoji: '🦍',
    color: '#2E2E54',
    title: 'Sponsorship Coordinator'
  },
  {
    img: '/assets/profiles/Linda_Ma.png',
    name: 'Linda Ma',
    emoji: '💫',
    color: '#dcd0ff',
    title: 'Sponsorship Coordinator'
  },
  {
    img: '/assets/profiles/Maggie_Wang.png',
    name: 'Maggie Wang',
    emoji: '🐎',
    color: '#810081',
    title: 'cmd-f Logistics Director'
  },
  {
    img: '/assets/profiles/Martin_Cai.png',
    name: 'Martin Cai',
    emoji: '☃',
    color: '#FFF8DC',
    title: 'nwHacks Logistics Director'
  },
  {
    img: '/assets/profiles/Maureen_Luo.png',
    name: 'Maureen Luo',
    emoji: '🫶🏻',
    color: '#c4d6bf',
    title: 'Design Coordinator'
  },
  {
    img: '/assets/profiles/Melvin_Teo.png',
    name: 'Melvin Teo',
    emoji: '💡',
    color: '#003366',
    title: 'HackCamp Logistics Director'
  },
  {
    img: '/assets/profiles/Michelle_Fung.png',
    name: 'Michelle Fung',
    emoji: '🤩',
    color: '#D9E7E2',
    title: 'Design Coordinator'
  },
  {
    img: '/assets/profiles/Michelle_Kim.png',
    name: 'Michelle Kim',
    emoji: '🧸',
    color: '#0DEFE1',
    title: 'Co-President'
  },
  {
    img: '/assets/profiles/Michelle_Wang.png',
    name: 'Michelle Wang',
    emoji: '❄️',
    color: '#9CDDFB',
    title: 'Design Coordinator'
  },
  {
    img: '/assets/profiles/Nicholas_Wong.png',
    name: 'Nicholas Wong',
    emoji: '✨',
    color: '#FFF',
    title: 'Development Coordinator'
  },
  {
    img: '/assets/profiles/Rachel_Dong.png',
    name: 'Rachel Dong',
    emoji: '🥳',
    color: '#bfe6ff',
    title: 'First Year Representative'
  },
  {
    img: '/assets/profiles/Samantha_Tseng.png',
    name: 'Samantha Tseng',
    emoji: '✨',
    color: '#FF6666',
    title: 'Treasurer'
  },
  {
    img: '/assets/profiles/ShuTing_Hu.png',
    name: 'ShuTing Hu',
    emoji: '🐲',
    color: '#CCD5C0',
    title: 'Engagement'
  },
  {
    img: '/assets/profiles/Sophia_Lee.png',
    name: 'Sophia Lee',
    emoji: '☕️',
    color: '#be86f7',
    title: 'Sponsorship Coordinator'
  },
  {
    img: '/assets/profiles/Stephanie_Chen.png',
    name: 'Stephanie Chen',
    emoji: '🌱',
    color: '#F4F7C5',
    title: 'Design Coordinator'
  },
  {
    img: '/assets/profiles/Taryn_Wou.png',
    name: 'Taryn Wou',
    emoji: '🦦',
    color: '#ABF0E3',
    title: 'cmd-f Logistics Director'
  },
  {
    img: '/assets/profiles/Trisha_Sia.png',
    name: 'Trisha Sia',
    emoji: '🐑',
    color: '#9fb9e7',
    title: 'HackCamp Logistics Director'
  },
  {
    img: '/assets/profiles/Victoria_Lim.png',
    name: 'Victoria Lim',
    emoji: '🤩',
    color: '#BDE6EC',
    title: 'Co-President'
  },
  {
    img: '/assets/profiles/Yan_Sidyakin.png',
    name: 'Yan Sidyakin',
    emoji: '🌚',
    color: '#FF7E4D',
    title: 'Sponsorship Coordinator'
  }
]

export default function Footer() {
  return (
    <FooterContainer>
      <Team profiles={profiles} />
      <SocialMediaIcons>
        <a
          href='https://www.facebook.com/nwplusubc'
          target='_blank'
          rel='noreferrer'
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a
          href='https://www.instagram.com/nwplusubc'
          target='_blank'
          rel='noreferrer'
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          href='https://twitter.com/nwplusubc'
          target='_blank'
          rel='noreferrer'
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
          href='https://www.linkedin.com/company/nwplus'
          target='_blank'
          rel='noreferrer'
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a
          href='https://www.youtube.com/c/nwPlusUBC'
          target='_blank'
          rel='noreferrer'
        >
          <FontAwesomeIcon icon={faYoutube} />
        </a>
        <a href='https://medium.com/nwplusubc' target='_blank' rel='noreferrer'>
          <FontAwesomeIcon icon={faMedium} />
        </a>
      </SocialMediaIcons>
      <Links>
          <a href="mailto:info@nwplus.io" target="_blank" rel='noreferrer'>Email Us</a>
          <a href="mailto:sponsorship@nwplus.io?subject=Sponsorship" target="_blank" rel='noreferrer'>Become a Sponsor</a>
      </Links>
      <div>Copyright &copy; 2022 nwPlus</div>
    </FooterContainer>
  );
}
