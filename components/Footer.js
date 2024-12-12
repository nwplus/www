import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faMedium,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import Team from './Team';

const FooterContainer = styled.footer`
  background: url(/assets/footer_bg.svg), ${(p) => p.theme.colors.background};
  background-size: cover;
  color: #ffffff;
  text-align: center;
  padding: 64px 0;
  width: 100%;
`;

const LandAcknowledgement = styled.p`
  color: #F1F6FD;
  width: 80%;
  margin: 0 auto;
  padding-top: 15px;
  padding-bottom: 30px;

  a {
    color: ${(p) => p.theme.colors.primary};
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }
`

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
      title: 'nwHacks Logistics Coordinator',
      social: 'https://www.linkedin.com/in/alan-wang-a577b81b5/'
  },
  {
      img: '/assets/profiles/Alissa_Guo.png',
      name: 'Alissa Guo',
      emoji: '🥘',
      color: '#FFC0CB',
      title: 'cmd-f Logistics Coordinator',
      social: 'https://www.linkedin.com/in/alissa-guo/'
  },
  {
      img: '/assets/profiles/Allison_Chu.png',
      name: 'Allison Chu',
      emoji: '🚅',
      color: '#01DACC',
      title: 'Design Coordinator',
      social: ''
  },
  {
      img: '/assets/profiles/Alvin_Kam.png',
      name: 'Alvin Kam',
      emoji: '💀',
      color: '#01DACC',
      title: 'nwHacks Logistics Coordinator',
      social: ''
  },
  {
      img: '/assets/profiles/Angela_Chiang.png',
      name: 'Angela Chiang',
      emoji: '🫡',
      color: '#00A3FF',
      title: 'Content Writer',
      social: 'https://www.linkedin.com/in/angela-chiang-a12a02231/'
  },
  {
      img: '/assets/profiles/Angelina_Hsu.png',
      name: 'Angelina Hsu',
      emoji: '🧃',
      color: '#90A58A',
      title: 'Design Director',
      social: 'https://www.linkedin.com/in/angelina-hsu-54035416a/'
  },
  {
      img: '/assets/profiles/Anna_Kovtunenko.png',
      name: 'Anna Kovtunenko',
      emoji: '🌺',
      color: '#01DACC',
      title: 'HackCamp Logistics Director',
      social: 'https://www.linkedin.com/in/anna-kovtunenko/'
  },
  {
      img: '/assets/profiles/Ara_Kwon.png',
      name: 'Ara Kwon',
      emoji: '🪵',
      color: '#01DACC',
      title: 'HackCamp Logistics Coordinator',
      social: ''
  },
  {
      img: '/assets/profiles/Byron_Wang.png',
      name: 'Byron Wang',
      emoji: '😌',
      color: '#d1ffdf',
      title: 'Dev Coordinator',
      social: 'https://www.byronwang.com/'
  },
  {
      img: '/assets/profiles/Caitlyn_Chan.png',
      name: 'Caitlyn Chan',
      emoji: '🤠',
      color: '#FFCADC',
      title: 'Sponsorship Coordinator',
      social: 'http://linkedin.com/in/cait-chan/'
  },
  {
      img: '/assets/profiles/Charlene_Chiu.png',
      name: 'Charlene Chiu',
      emoji: '🌸',
      color: '#EBCEDF',
      title: 'cmd-f Logistics Director',
      social: 'www.linkedin.com/in/charlenechiu-chl/'
  },
  {
      img: '/assets/profiles/Cristen_Lin.png',
      name: 'Cristen Lin',
      emoji: '🍪',
      color: '#59896C',
      title: 'Marketing Director',
      social: 'https://www.linkedin.com/in/cristen-lin'
  },
  {
      img: '/assets/profiles/Daisy_Han.png',
      name: 'Daisy Han',
      emoji: '🙆🏼‍♀️',
      color: '#A7CCFF',
      title: 'Design Coordinator',
      social: 'https://www.linkedin.com/in/daiisyhan/'
  },
  {
      img: '/assets/profiles/Daniel_Pan.png',
      name: 'Daniel Pan',
      emoji: '🤠',
      color: '#01DACC',
      title: 'Dev Coordinator',
      social: 'http://danielpanhead.com'
  },
  {
      img: '/assets/profiles/Donald_Lee.png',
      name: 'Donald Lee',
      emoji: '😮',
      color: '#3988FF',
      title: 'Dev Director',
      social: 'https://donaldlee.xyz/'
  },
  {
      img: '/assets/profiles/Erping_Sun.png',
      name: 'Erping Sun',
      emoji: '✈️',
      color: '#669aed',
      title: 'Dev Coordinator',
      social: 'http://linkedin.com/in/erping-sun'
  },
  {
      img: '/assets/profiles/Fahim_Gbonjubola.png',
      name: 'Fahim Gbonjubola',
      emoji: '😋',
      color: '#E4F6F8',
      title: 'EDI Director',
      social: 'http://fahimgbon.com'
  },
  {
      img: '/assets/profiles/Grace_Co.png',
      name: 'Grace Co',
      emoji: '🦭',
      color: '#00A86B',
      title: 'Sponsorship Coordinator',
      social: 'https://www.linkedin.com/in/grace--co/'
  },
  {
      img: '/assets/profiles/Indy_Sowy.png',
      name: 'Indy Sowy',
      emoji: '💌',
      color: '#F5B8D0',
      title: 'Dev Coordinator',
      social: 'https://www.linkedin.com/in/indirasowy/'
  },
  {
      img: '/assets/profiles/Jade_Permata.png',
      name: 'Jade Permata',
      emoji: '🌤️',
      color: '#355834',
      title: 'Marketing Coordinator',
      social: 'www.linkedin.com/in/jadetjandra'
  },
  {
      img: '/assets/profiles/Jason_Kuo.png',
      name: 'Jason Kuo',
      emoji: '🦭',
      color: '#01DACC',
      title: 'Dev Coordinator',
      social: 'https://www.linkedin.com/in/jasonwkuo/'
  },
  {
      img: '/assets/profiles/Jennifer_Kim.png',
      name: 'Jennifer Kim',
      emoji: '🌸',
      color: '#01DACC',
      title: 'Engagement Coordinator',
      social: ''
  },
  {
      img: '/assets/profiles/Jennifer_Nguyen.png',
      name: 'Jennifer Nguyen',
      emoji: '☆',
      color: '#FFFFE0',
      title: 'nwHacks Logistics Director',
      social: 'http://www.linkedin.com/in/jennguyen-ubc'
  },
  {
      img: '/assets/profiles/Jennifer_Shui.png',
      name: 'Jennifer Shui',
      emoji: '🦜',
      color: '#ABCFFF',
      title: 'HackCamp Logistics Coordinator',
      social: 'https://www.linkedin.com/in/jennifershui/'
  },
  {
      img: '/assets/profiles/Jessica_Liu.png',
      name: 'Jessica Liu',
      emoji: '☕️',
      color: '#FFDDE6',
      title: 'HackCamp Logistics Coordinator',
      social: 'https://www.linkedin.com/in/jessicaziliu/'
  },
  {
      img: '/assets/profiles/Joanne_Lee.png',
      name: 'Joanne Lee',
      emoji: '✌️',
      color: '#7FBCF5',
      title: 'PM',
      social: 'https://www.linkedin.com/in/joannelex/'
  },
  {
      img: '/assets/profiles/Kashish_Garg.png',
      name: 'Kashish Garg',
      emoji: '🐒',
      color: '#01DACC',
      title: 'Dev Coordinator',
      social: 'https://www.linkedin.com/in/kashishgarg1/'
  },
  {
      img: '/assets/profiles/Kelly_Hum.png',
      name: 'Kelly Hum',
      emoji: '🐳',
      color: '#FFD1A0',
      title: 'Engagement Coordinator',
      social: 'https://www.linkedin.com/in/kellyhum'
  },
  {
      img: '/assets/profiles/Kevin_Gu.png',
      name: 'Kevin Gu',
      emoji: '🗿',
      color: '#d1e1e6',
      title: 'Sponsorship Director',
      social: 'https://www.linkedin.com/in/kevin-gu-/'
  },
  {
      img: '/assets/profiles/Kezia_Rijadi.png',
      name: 'Kezia Rijadi',
      emoji: '🍊',
      color: '#FFCC99',
      title: 'Engagement Coordinator',
      social: 'https://keziarijadi.vercel.app/'
  },
  {
      img: '/assets/profiles/Khoa_Bui.png',
      name: 'Khoa Bui',
      emoji: '🐧',
      color: '#e46060',
      title: 'nwHacks Logistics Coordinator',
      social: ''
  },
  {
      img: '/assets/profiles/Kitty_Liu.png',
      name: 'Kitty Liu',
      emoji: '🐈',
      color: '#F1b5c2',
      title: 'Design Coordinator',
      social: 'linkedin.com/in/kittyliu3'
  },
  {
      img: '/assets/profiles/Lincoln_Lee.png',
      name: 'Lincoln Lee',
      emoji: '🦝',
      color: '#2E2E54',
      title: 'Dev Coordinator',
      social: ''
  },
  {
      img: '/assets/profiles/Lucas_Gingera.png',
      name: 'Lucas Gingera',
      emoji: '😶',
      color: '#01DACC',
      title: 'Sponsorship Coordinator',
      social: ''
  },
  {
      img: '/assets/profiles/Maiah_Lee.png',
      name: 'Maiah Lee',
      emoji: '🦦',
      color: '#3f6645',
      title: 'EDI Coordinator',
      social: ''
  },
  {
      img: '/assets/profiles/Martin_Cai.png',
      name: 'Martin Cai',
      emoji: '🍵',
      color: '#fff8dc',
      title: 'Dev Coordinator',
      social: 'https://www.martincai.xyz'
  },
  {
      img: '/assets/profiles/Maureen_Luo.png',
      name: 'Maureen Luo',
      emoji: '🫶🏻',
      color: '#2205a3',
      title: 'Co-President',
      social: 'https://www.maureenluo.com/'
  },
  {
      img: '/assets/profiles/Melvin_Teo.png',
      name: 'Melvin Teo',
      emoji: '💡',
      color: '#003366',
      title: 'Co-President',
      social: 'https://www.linkedin.com/in/melvinhteo/'
  },
  {
      img: '/assets/profiles/Michelle_Wan.png',
      name: 'Michelle Wan',
      emoji: '🙆🏻‍♀️',
      color: '#e8dcfc',
      title: 'Sponsorship Coordinator',
      social: 'https://mwchelle.me'
  },
  {
      img: '/assets/profiles/Michelle_Wang.png',
      name: 'Michelle Wang',
      emoji: '❄️',
      color: '#9CDDFB',
      title: 'Treasurer',
      social: 'https://www.linkedin.com/in/michelle-wang-mw/'
  },
  {
      img: '/assets/profiles/Nara_Iamsakun.png',
      name: 'Nara Iamsakun',
      emoji: '🧸',
      color: '#0277a6',
      title: 'nwHacks Logistics Coordinator',
      social: 'https://www.linkedin.com/in/nara-iamsakun/'
  },
  {
      img: '/assets/profiles/Newgen_Bao.png',
      name: 'Newgen Bao',
      emoji: '🥐',
      color: '#01DACC',
      title: 'Engagement Director',
      social: 'https://www.linkedin.com/in/newgen-bao/'
  },
  {
      img: '/assets/profiles/Oliver_Luo.png',
      name: 'Oliver Luo',
      emoji: '👴',
      color: '#FFA500',
      title: 'Sponsorship Coordinator',
      social: ''
  },
  {
      img: '/assets/profiles/Paul_Tiberghien.png',
      name: 'Paul Tiberghien',
      emoji: '🤝',
      color: '#003C62',
      title: 'Media Specialist',
      social: 'http://linkedin.com/in/paultibe'
  },
  {
      img: '/assets/profiles/Ridhwanlai_Badmos.png',
      name: 'Ridhwanlai Badmos',
      emoji: '🤩',
      color: '#0B5221',
      title: 'EDI Coordinator',
      social: 'http://www.linkedin.com/in/ridhwanlai-badmos-05739a26b'
  },
  {
      img: '/assets/profiles/Sami_Nourji.png',
      name: 'Sami Nourji',
      emoji: '🌊',
      color: '#EFC69A',
      title: 'Marketing Coordinator',
      social: 'www.linkedin.com/in/saminourji'
  },
  {
      img: '/assets/profiles/Shannon_Aurelia.png',
      name: 'Shannon Aurelia',
      emoji: '🩰',
      color: '#01DACC',
      title: 'cmd-f Logistics Coordinator',
      social: 'https://www.linkedin.com/in/shannon-aurelia-s/'
  },
  {
      img: '/assets/profiles/Sophia_Lee.png',
      name: 'Sophia Lee',
      emoji: '🔫',
      color: '#be86f7',
      title: 'Sponsorship Coordinator',
      social: 'https://www.linkedin.com/in/iiaylee'
  },
  {
      img: '/assets/profiles/Stellar_Shar.png',
      name: 'Stellar Shar',
      emoji: '🪿',
      color: '#FFC0CB',
      title: 'Marketing Coordinator',
      social: 'https://www.linkedin.com/in/stellar-shar-4005b219a/'
  },
  {
      img: '/assets/profiles/Taryn_Wou.png',
      name: 'Taryn Wou',
      emoji: '🦦',
      color: '#ABF0E3',
      title: 'Design Coordinator',
      social: 'https://www.tarynwou.xyz/'
  },
  {
      img: '/assets/profiles/Tracy_La.png',
      name: 'Tracy La',
      emoji: '🍞',
      color: '#234036',
      title: 'cmd-f Logistics Coordinator',
      social: 'https://www.linkedin.com/in/tracy--la/'
  },
  {
      img: '/assets/profiles/Trisha_Sia.png',
      name: 'Trisha Sia',
      emoji: '🌱',
      color: '#9fb9e7',
      title: 'Dev Coordinator',
      social: 'https://www.linkedin.com/in/trisha-sia/'
  },
  {
      img: '/assets/profiles/Yan_Sidyakin.png',
      name: 'Yan Sidyakin',
      emoji: '🌚',
      color: '#FF7E4D',
      title: 'Design Coordinator',
      social: 'https://linkedin.com/in/sidyakinian'
  }
];

export default function Footer() {
  return (
    <FooterContainer>
      <Team profiles={profiles} />
      <LandAcknowledgement>nwPlus acknowledges that our members have the privilege of living, learning and facilitating hackathons on the traditional, ancestral, and stolen territory of the xʷməθkʷəy̓əm (Musqueam) and səlilwətaɬ (Tsleil-Waututh) peoples. As members of nwPlus, we play an active role in reconciliation and are working to learn and expand our knowledge on the history of Indigenous peoples. To learn more, visit <a href="https://guides.library.ubc.ca/xwi7xwaresearchguide" target="_blank" rel="noreferrer">xwi7xwa&apos;s Research Guide</a>.</LandAcknowledgement>
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
        <a href='mailto:info@nwplus.io' target='_blank' rel='noreferrer'>
          Email Us
        </a>
        <a
          href='mailto:sponsorship@nwplus.io?subject=Sponsorship'
          target='_blank'
          rel='noreferrer'
        >
          Become a Sponsor
        </a>
      </Links>
      <div>Copyright &copy; 2024 nwPlus</div>
    </FooterContainer>
  );
}
