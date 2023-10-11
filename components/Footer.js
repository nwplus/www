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
      color: '#01DACC',
      title: 'nwHacks Logistics Director',
      social: ""
    },
    {
      img: '/assets/profiles/Alex_Hernandez.png',
      name: 'Alex Hernandez',
      emoji: '🦖',
      color: '#A1C9BA',
      title: 'nwHacks Logistics Coordinator',
      social: ""
    },
    {
      img: '/assets/profiles/Alvin_Kam.png',
      name: 'Alvin Kam',
      emoji: '💀',
      color: '#01DACC',
      title: 'Development Coordinator',
      social: ""
    },
    {
      img: '/assets/profiles/Alvin_Zhou.png',
      name: 'Alvin Zhou',
      emoji: '✨',
      color: '#01DACC',
      title: 'Sponsorship Coordinator',
      social: ""
    },
    {
      img: '/assets/profiles/Angela_Zhou.png',
      name: 'Angela Zhou',
      emoji: '🐣',
      color: '#FAF4EA',
      title: 'cmd-f Logistics Director',
      social: ""
    },
    {
      img: '/assets/profiles/Angelina_Hsu.png',
      name: 'Angelina Hsu',
      emoji: '🧃',
      color: '#90A58A',
      title: 'Design Coordinator',
      social: ""
    },
    {
      img: '/assets/profiles/Aurora_Cheng.png',
      name: 'Aurora Cheng',
      emoji: '🍡',
      color: '#01DACC',
      title: 'Marketing Coordinator',
      social: ""
    },
    {
      img: '/assets/profiles/Bernice_Tang.png',
      name: 'Bernice Tang',
      emoji: '🦋',
      color: '#B19BF0',
      title: 'Engagement Coordinator',
      social: ""
    },
    {
      img: '/assets/profiles/Byron_Wang.png',
      name: 'Byron Wang',
      emoji: '😌',
      color: '#D1FFDF',
      title: 'HackCamp Logistics Director',
      social: ""
    },
    {
      img: '/assets/profiles/Charlene_Chiu.png',
      name: 'Charlene Chiu',
      emoji: '🌸',
      color: '#EBCEDF',
      title: 'cmd-f Logistics Coordinator',
      social: ""
    },
    {
      img: '/assets/profiles/Cristen_Lin.png',
      name: 'Cristen Lin',
      emoji: '🍪',
      color: '#59896C',
      title: 'Marketing Coordinator',
      social: ""
    },
    {
      img: '/assets/profiles/Daphne_Tian.png',
      name: 'Daphne Tian',
      emoji: '🐅',
      color: '#BDB5D5',
      title: 'Marketing Coordinator',
      social: ""
    },
    {
      img: '/assets/profiles/Donald_Lee.png',
      name: 'Donald Lee',
      emoji: '😮',
      color: '#3988FF',
      title: 'Development Coordinator',
      social: "https://donaldlee.xyz/"
    },
    {
      img: '/assets/profiles/Edward_Li.png',
      name: 'Edward Li',
      emoji: '🧙‍♂️',
      color: '#66b900',
      title: 'nwHacks Logistics Coordinator',
      social: ""
    },
    {
      img: '/assets/profiles/Gordon_Wu.png',
      name: 'Gordon Wu',
      emoji: '🤠',
      color: '#5E6B62',
      title: 'Design Coordinator',
      social: ""
    },
    {
      img: '/assets/profiles/Irene_Zhang.png',
      name: 'Irene Zhang',
      emoji: '🖌️',
      color: '#AED5D9',
      title: 'Engagement Coordinator',
      social: ""
    },
    {
      img: '/assets/profiles/Isaac_Chung.png',
      name: 'Isaac Chung',
      emoji: '🙈',
      color: '#113969',
      title: 'Sponsorship Director',
      social: ""
    },
    {
      img: '/assets/profiles/Jade_Permata.png',
      name: 'Jade Permata',
      emoji: '✨',
      color: '#01DACC',
      title: 'Design Coordinator',
      social: ""
    },
    {
      img: '/assets/profiles/JaeWu_Chun.png',
      name: 'Jae Wu Chun',
      emoji: '🍗',
      color: '#FFC6ED',
      title: 'Treasurer',
      social: ""
    },
    {
      img: '/assets/profiles/Janaye_Cheong.png',
      name: 'Janaye Cheong',
      emoji: '🎐',
      color: '#73b791',
      title: 'Treasurer Coordinator',
      social: ""
    },
    {
      img: '/assets/profiles/Jennifer_Nguyen.png',
      name: 'Jennifer Nguyen',
      emoji: '☆',
      color: '#01DACC',
      title: 'nwHacks Logistics Coordinator',
      social: ""
    },
    {
      img: '/assets/profiles/Jennifer_Shui.png',
      name: 'Jennifer Shui',
      emoji: '🦜',
      color: '#ABCFFF',
      title: 'Content Writer',
      social: ""
    },
    {
      img: '/assets/profiles/Jessica_Liu.png',
      name: 'Jessica Liu',
      emoji: '☕️',
      color: '#FFDDE6',
      title: 'Engagement Coordinator',
      social: ""
    },
    {
      img: '/assets/profiles/Joanne_Lee.png',
      name: 'Joanne Lee',
      emoji: '✨',
      color: '#7FBCF5',
      title: 'Design Coordinator',
      social: ""
    },
    {
      img: '/assets/profiles/Kashish_Garg.png',
      name: 'Kashish Garg',
      emoji: '🐒',
      color: '#01DACC',
      title: 'HackCamp Logistics Coordinator',
      social: ""
    },
    {
      img: '/assets/profiles/Kevin_Gu.png',
      name: 'Kevin Gu',
      emoji: '🍏',
      color: '#13B1C9',
      title: 'Sponsorship Coordinator',
      social: ""
    },
    {
      img: '/assets/profiles/Kitty_Liu.png',
      name: 'Kitty Liu',
      emoji: '🐈',
      color: '#FFE633',
      title: 'Hackcamp Logistics Coordinator',
      social: ""
    },
    {
      img: '/assets/profiles/Lincoln_Lee.png',
      name: 'Lincoln Lee',
      emoji: '🦝',
      color: '#2E2E54',
      title: 'Development Coordinator',
      social: ""
    },
    {
      img: '/assets/profiles/Linda_Ma.png',
      name: 'Linda Ma',
      emoji: '💫',
      color: '#dcd0ff',
      title: 'Engagement Director',
      social: ""
    },
    {
      img: '/assets/profiles/Martin_Cai.png',
      name: 'Martin Cai',
      emoji: '🍵',
      color: '#FFF8DC',
      title: 'Co-President',
      social: ""
    },
    {
      img: '/assets/profiles/Maureen_Luo.png',
      name: 'Maureen Luo',
      emoji: '🫶🏻',
      color: '#c4d6bf',
      title: 'Design Director',
      social: ""
    },
    {
      img: '/assets/profiles/Melvin_Teo.png',
      name: 'Melvin Teo',
      emoji: '💡',
      color: '#003366',
      title: 'Development Director',
      social: ""
    },
    {
      img: '/assets/profiles/Michelle_Fung.png',
      name: 'Michelle Fung',
      emoji: '🤩',
      color: '#D9E7E2',
      title: 'Sponsorship Coordinator',
      social: ""
    },
    {
      img: '/assets/profiles/Michelle_Kim.png',
      name: 'Michelle Kim',
      emoji: '🧸',
      color: '#0DEFE1',
      title: 'Project Manager',
      social: ""
    },
    {
      img: '/assets/profiles/Michelle_Wang.png',
      name: 'Michelle Wang',
      emoji: '❄️',
      color: '#9CDDFB',
      title: 'Sponsorship Coordinator',
      social: ""
    },
    {
      img: '/assets/profiles/Nicholas_Wong.png',
      name: 'Nicholas Wong',
      emoji: '😎',
      color: '#01DACC',
      title: 'HackCamp Logistics Coordinator',
      social: ""
    },
    {
      img: '/assets/profiles/Oliver_Luo.png',
      name: 'Oliver Luo',
      emoji: '👴',
      color: '#FFA500',
      title: 'HackCamp Logistics Coordinator',
      social: ""
    },
    {
      img: '/assets/profiles/Samantha_Tseng.png',
      name: 'Samantha Tseng',
      emoji: '🍁',
      color: '#FF6666',
      title: 'Development Coordinator',
      social: ""
    },
    {
      img: '/assets/profiles/Sami_Nourji.png',
      name: 'Sami Nourji',
      emoji: '🌊',
      color: '#EFC69A',
      title: 'nwHacks Logistics Coordinator',
      social: ""
    },
    {
      img: '/assets/profiles/Sophia_Lee.png',
      name: 'Sophia Lee',
      emoji: '🤡',
      color: '#be86f7',
      title: 'Sponsorship Coordinator',
      social: ""
    },
    {
      img: '/assets/profiles/Taryn_Wou.png',
      name: 'Taryn Wou',
      emoji: '🦦',
      color: '#ABF0E3',
      title: 'Co-President',
      social: ""
    },
    {
      img: '/assets/profiles/Trisha_Sia.png',
      name: 'Trisha Sia',
      emoji: '🌱',
      color: '#9fb9e7',
      title: 'cmd-f Logistics Coordinator',
      social: ""
    },
    {
      img: '/assets/profiles/Victoria_Lim.png',
      name: 'Victoria Lim',
      emoji: '✨',
      color: '#BDE6EC',
      title: 'Marketing Director',
      social: ""
    },
    {
      img: '/assets/profiles/Yan_Sidyakin.png',
      name: 'Yan Sidyakin',
      emoji: '🌚',
      color: '#FF7E4D',
      title: 'Development Coordinator',
      social: ""
    },
    {
      img: '/assets/profiles/Yeojun Han.png',
      name: 'Yeojun Han',
      emoji: '🧸',
      color: '#B3CEE5',
      title: 'cmd-f Logistics Coordinator',
      social: ""
    }
  ];

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
      <div>Copyright &copy; 2023 nwPlus</div>
    </FooterContainer>
  );
}
