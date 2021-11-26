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

const profiles = [
  {
    img: '/assets/profiles/Alex_Hernandez.png',
    name: 'Alex Hernandez',
    emoji: '🦖',
    color: '#A1C9BA',
    title: 'Design Coordinator',
  },
  {
    img: '/assets/profiles/Allison_Chiang.png',
    name: 'Allison Chiang',
    emoji: '👩🏻‍💻',
    color: '#C879E0',
    title: 'Content Writer',
  },
  {
    img: '/assets/profiles/Andy_Kwan.png',
    name: 'Andy Kwan',
    emoji: '✊',
    color: '#10D1DA',
    title: 'Development Coordinator',
  },
  {
    img: '/assets/profiles/Anne_Guo.png',
    name: 'Anne Guo',
    emoji: '✨',
    color: '#FFFFFF',
    title: 'Project Manager',
  },
  {
    img: '/assets/profiles/Anson_Chung.png',
    name: 'Anson Chung',
    emoji: '🤡',
    color: '#878EBB',
    title: 'Development Coordinator',
  },
  {
    img: '/assets/profiles/Ben_Cheung.png',
    name: 'Ben Cheung',
    emoji: '🚀',
    color: '#FFBF00',
    title: 'HackCamp Logistics Coordinator',
  },
  {
    img: '/assets/profiles/Berger_Pan.png',
    name: 'Berger Pan',
    emoji: '🍔',
    color: '#E9BFBF',
    title: 'Design Coordinator',
  },
  {
    img: '/assets/profiles/Bernice_Tang.png',
    name: 'Bernice Tang',
    emoji: '🦋',
    color: '#B19BF0',
    title: 'Sponsorship Coordinator',
  },
  {
    img: '/assets/profiles/Bonny_Yu.png',
    name: 'Bonny Yu',
    emoji: '✨', // no angrycry :'(
    color: '#F1EFDE',
    title: 'Design Coordinator',
  },
  {
    img: '/assets/profiles/Carmen_Xu.png',
    name: 'Carmen Xu',
    emoji: '🍰',
    color: '#616F5E',
    title: 'cmd-f Logistics Coordinator',
  },
  {
    img: '/assets/profiles/Christy_Lo.png',
    name: 'Christy Lo',
    emoji: '🙈',
    color: '#C7C6FF',
    title: 'cmd-f Logistics Coordinator',
  },
  {
    img: '/assets/profiles/Derek_Chen.png',
    name: 'Derek Chen',
    emoji: '✨',
    color: '#D56217',
    title: 'Development Coordinator',
  },
  {
    img: '/assets/profiles/Filbert_Mangundap.png',
    name: 'Filbert Mangundap',
    emoji: '🐣',
    color: '#BFC5D7',
    title: 'Design Coordinator',
  },
  {
    img: '/assets/profiles/Ian_Mah.png',
    name: 'Ian Mah',
    emoji: '🤙',
    color: '#FF0000',
    title: 'Development Coordinator',
  },
  {
    img: '/assets/profiles/Irene_Zhang.png',
    name: 'Irene Zhang',
    emoji: '🖌️',
    color: '#AED5D9',
    title: 'Design Coordinator',
  },
  {
    img: '/assets/profiles/Isaac_Chung.png',
    name: 'Isaac Chung',
    emoji: '🙃',
    color: '#113969',
    title: 'nwHacks Logistics Coordinator',
  },
  {
    img: '/assets/profiles/JP_Garcia.png',
    name: 'JP Garcia',
    emoji: '🦜',
    color: '#21DEFF',
    title: 'Treasurer',
  },
  {
    img: '/assets/profiles/Jacky_Zhao.png',
    name: 'Jacky Zhao',
    emoji: '🗿',
    color: '#0DEFE1',
    title: 'Co-President',
  },
  {
    img: '/assets/profiles/JaeWu_Chun.png',
    name: 'Jae Wu Chun',
    emoji: '🍗',
    color: '#FFC6ED',
    title: 'Development Coordinator',
  },
  {
    img: '/assets/profiles/Jessica_Liu.png',
    name: 'Jessica Liu',
    emoji: '☕️',
    color: '#FFDDE6',
    title: 'Engagement Co-Director',
  },
  {
    img: '/assets/profiles/Joice_Tang.png',
    name: 'Joice Tang',
    emoji: '🌻',
    color: '#78AA55',
    title: 'Mentorship Coordinator',
  },
  {
    img: '/assets/profiles/Karan_Vasdev.png',
    name: 'Karan Vasdev',
    emoji: '🦁',
    color: '#4A2511',
    title: 'Sponsorship Coordinator',
  },
  {
    img: '/assets/profiles/Kevin_Wu.png',
    name: 'Kevin Wu',
    emoji: '🥖',
    color: '#FFFFFF',
    title: 'nwHacks Logistics Coordinator',
  },
  {
    img: '/assets/profiles/Kevin_Zou.png',
    name: 'Kevin Zou',
    emoji: '🍞',
    color: '#00CFF0',
    title: 'Development Director',
  },
  {
    img: '/assets/profiles/Lucy_Hao.png',
    name: 'Lucy Hao',
    emoji: '🍫',
    color: '#CDB8DE',
    title: 'Marketing Coordinator',
  },
  {
    img: '/assets/profiles/Maggie_Wang.png',
    name: 'Maggie Wang',
    emoji: '🐎',
    color: '#810081',
    title: 'HackCamp Logistics Director',
  },
  {
    img: '/assets/profiles/Martin_Cai.png',
    name: 'Martin Cai',
    emoji: '☃',
    color: '#FFF8DC',
    title: 'nwHacks Logistics Coordinator',
  },
  {
    img: '/assets/profiles/Melvin_Teo.png',
    name: 'Melvin Teo',
    emoji: '💡',
    color: '#003366',
    title: 'HackCamp Logistics Coordinator',
  },
  {
    img: '/assets/profiles/Michelle_Fung.png',
    name: 'Michelle Fung',
    emoji: '🤩',
    color: '#D9E7E2',
    title: 'Marketing Coordinator',
  },
  {
    img: '/assets/profiles/Michelle_Kim.png',
    name: 'Michelle Kim',
    emoji: '🧸',
    color: '#0DEFE1',
    title: 'nwHacks Logistics Director',
  },
  {
    img: '/assets/profiles/Naiomi_Chin.png',
    name: 'Naiomi Chin',
    emoji: '👻',
    color: '#F9DCDB',
    title: 'Sponsorship Coordinator',
  },
  {
    img: '/assets/profiles/Novia_Chao.png',
    name: 'Novia Chao',
    emoji: '😻',
    color: '#40824F',
    title: 'Design Coordinator',
  },
  {
    img: '/assets/profiles/Philman_Yeung.png',
    name: 'Philman Yeung',
    emoji: '🍋',
    color: '#ED4040',
    title: 'Design Director',
  },
  {
    img: '/assets/profiles/Phoenix_Liu.png',
    name: 'Phoenix Liu',
    emoji: '🕊',
    color: '#FFA7A7',
    title: 'Development Coordinator',
  },
  {
    img: '/assets/profiles/Rebecca_Xie.png',
    name: 'Rebecca Xie',
    emoji: '🍞',
    color: '#D4F4FF',
    title: 'Engagement Co-Director',
  },
  {
    img: '/assets/profiles/Samantha_Tseng.png',
    name: 'Samantha Tseng',
    emoji: '✨',
    color: '#FF6666',
    title: 'HackCamp Logistics Coordinator',
  },
  {
    img: '/assets/profiles/ShuTing_Hu.png',
    name: 'ShuTing Hu',
    emoji: '🐲',
    color: '#CCD5C0',
    title: 'Co-President',
  },
  {
    img: '/assets/profiles/Sophie_Berger.png',
    name: 'Sophie Berger',
    emoji: '📸',
    color: '#30FFB7',
    title: 'Marketing Director',
  },
  {
    img: '/assets/profiles/Stephanie_Chen.png',
    name: 'Stephanie Chen',
    emoji: '🌱',
    color: '#F4F7C5',
    title: 'cmd-f Logistics Director',
  },
  {
    img: '/assets/profiles/Taryn_Wou.png',
    name: 'Taryn Wou',
    emoji: '🦦',
    color: '#ABF0E3',
    title: 'cmd-f Logistics Coordinator',
  },
  {
    img: '/assets/profiles/Victoria_Kim.png',
    name: 'Victoria Kim',
    emoji: '✨',
    color: '#FFFFFF',
    title: 'Sponsorship Director',
  },
  {
    img: '/assets/profiles/Victoria_Lim.png',
    name: 'Victoria Lim',
    emoji: '🤩',
    color: '#BDE6EC',
    title: 'cmd-f Logistics Coordinator',
  },
  {
    img: '/assets/profiles/Vincent_Chiang.png',
    name: 'Vincent Chiang',
    emoji: '🍍',
    color: '#FFFFFF',
    title: 'Development Coordinator',
  },
  {
    img: '/assets/profiles/Yan_Sidyakin.png',
    name: 'Yan Sidyakin',
    emoji: '🌚',
    color: '#FF7E4D',
    title: 'Sponsorship Coordinator',
  },
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
      <div>Copyright &copy; 2021 nwPlus</div>
    </FooterContainer>
  );
}
