import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faMedium,
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
    img: '/assets/profiles/Anna_Kovtunenko.png',
    name: 'Anna Kovtunenko',
    emoji: '🌺',
    color: '#5e0808',
    title: 'Co-President',
    social: 'https://www.linkedin.com/in/anna-kovtunenko/',
  },
  {
    img: '/assets/profiles/Donald_Lee.png',
    name: 'Donald Lee',
    emoji: '😮',
    color: '#3988FF',
    title: 'Co-President',
    social: 'https://donaldlee.xyz/',
  },
  {
    img: '/assets/profiles/Kevin_Gu.png',
    name: 'Kevin Gu',
    emoji: '🗿',
    color: '#13b1c9',
    title: 'Treasurer',
    social: 'https://www.linkedin.com/in/kevin-gu-/',
  },
  {
    img: '/assets/profiles/Jessica_Liu.png',
    name: 'Jessica Liu',
    emoji: '☕️',
    color: '#FFDDE6',
    title: 'HackCamp Logistics Director',
    social: 'https://www.linkedin.com/in/jessicaziliu/',
  },
  {
    img: '/assets/profiles/Jonathan_Cai.png',
    name: 'Jonathan Cai',
    emoji: '🫨',
    color: '#01DACC',
    title: 'HackCamp Logistics Coordinator',
    social: 'https://www.linkedin.com/in/jonathan-cai-843873314/',
  },
  {
    img: '/assets/profiles/Khoa_Bui.png',
    name: 'Khoa Bui',
    emoji: '🐧',
    color: '#E96868',
    title: 'HackCamp Logistics Coordinator',
    social: 'https://www.linkedin.com/in/khoa-d-bui/',
  },
  {
    img: '/assets/profiles/Kashish_Garg.png',
    name: 'Kashish Garg',
    emoji: '🐨',
    color: '#01DACC',
    title: 'nwHacks Logistics Director',
    social: 'https://www.linkedin.com/in/kashishgarg1/',
  },
  {
    img: '/assets/profiles/Caitlyn_Chan.png',
    name: 'Caitlyn Chan',
    emoji: '🤠',
    color: '#f5bf53',
    title: 'nwHacks Logistics Coordinator',
    social: 'linkedin.com/in/cait-chan/',
  },
  {
    img: '/assets/profiles/Angelina_Hsu.png',
    name: 'Angelina Hsu',
    emoji: '🧃',
    color: '#90A58A',
    title: 'nwHacks Logistics Coordinator',
    social: 'https://www.linkedin.com/in/angelina-hsu-54035416a/',
  },
  {
    img: '/assets/profiles/Indy_Sowy.png',
    name: 'Indy Sowy',
    emoji: '💌',
    color: '#F5B8D0',
    title: 'nwHacks Logistics Coordinator',
    social: 'https://www.linkedin.com/in/indirasowy/',
  },
  {
    img: '/assets/profiles/Eric_Shuai.png',
    name: 'Eric Shuai',
    emoji: '',
    color: '#01DACC',
    title: 'nwHacks Logistics Coordinator',
    social: 'https://www.linkedin.com/in/ericshuai',
  },
  {
    img: '/assets/profiles/Tracy_La.png',
    name: 'Tracy La',
    emoji: '🍞',
    color: '#234036',
    title: 'cmd-f Logistics Director',
    social: 'https://www.linkedin.com/in/tracy--la/',
  },
  {
    img: '/assets/profiles/Angela_Chiang.png',
    name: 'Angela Chiang',
    emoji: '🫡',
    color: '#00A3FF',
    title: 'cmd-f Logistics Coordinator',
    social: 'https://www.linkedin.com/in/a-hc-chiang/',
  },
  {
    img: '/assets/profiles/Shannon_Aurelia.png',
    name: 'Shannon Aurelia',
    emoji: '🩰',
    color: '#01DACC',
    title: 'cmd-f Logistics Coordinator',
    social: 'https://www.linkedin.com/in/shannon-aurelia-s/',
  },
  {
    img: '/assets/profiles/Angela_Cheng.png',
    name: 'Angela Cheng',
    emoji: '🪷',
    color: '#9ADDFB',
    title: 'cmd-f Logistics Coordinator',
    social: 'https://www.linkedin.com/in/angela-cheng-/',
  },
  {
    img: '/assets/profiles/Karen_Agustino.png',
    name: 'Karen Agustino',
    emoji: '',
    color: '#01DACC',
    title: 'cmd-f Logistics Coordinator',
    social: 'linkedin.com/in/karenagustino/',
  },
  {
    img: '/assets/profiles/Ara_Kwon.png',
    name: 'Ara Kwon',
    emoji: '🎀',
    color: '#01DACC',
    title: 'Sponsorship Director',
    social: 'https://www.linkedin.com/in/arakwon/',
  },
  {
    img: '/assets/profiles/Stellar_Shar.png',
    name: 'Stellar Shar',
    emoji: '🪿',
    color: '#FFC0CB',
    title: 'Sponsorship Coordinator',
    social: 'https://www.linkedin.com/in/stellar-shar-4005b219a/',
  },
  {
    img: '/assets/profiles/Fahim_Gbonjubola.png',
    name: 'Fahim Gbonjubola',
    emoji: '😋',
    color: '#E4F6F8',
    title: 'Sponsorship Coordinator',
    social: 'http://fahimgbon.com',
  },
  {
    img: '/assets/profiles/Elena_Guo.png',
    name: 'Elena Guo',
    emoji: '',
    color: '#E69A8D',
    title: 'Sponsorship Coordinator',
    social: 'https://www.linkedin.com/in/guo-elena/',
  },
  {
    img: '/assets/profiles/Anna_Fang.png',
    name: 'Anna Fang',
    emoji: '🌻',
    color: '#A76D5B',
    title: 'Sponsorship Coordinator',
    social: 'https://www.linkedin.com/in/anna-fang-5312a0235/',
  },
  {
    img: '/assets/profiles/Jagathi_Moturi.png',
    name: 'Jagathi Moturi',
    emoji: '🌟',
    color: '#ADD0B3',
    title: 'Sponsorship Coordinator',
    social: '',
  },
  {
    img: '/assets/profiles/Fabian_Siswanto.png',
    name: 'Fabian Siswanto',
    emoji: '💯',
    color: '#BFA98E',
    title: 'Sponsorship Coordinator',
    social: 'https://www.linkedin.com/in/fabiansiswanto/',
  },
  {
    img: '/assets/profiles/Paul_Tiberghien.png',
    name: 'Paul Tiberghien',
    emoji: '🤝',
    color: '#003C62',
    title: 'Marketing Director',
    social: 'http://linkedin.com/in/paultibe',
  },
  {
    img: '/assets/profiles/Lilit_Vanyan.png',
    name: 'Lilit Vanyan',
    emoji: '💋',
    color: '#F2ACB9',
    title: 'Marketing Coordinator',
    social: 'https://www.linkedin.com/in/lilit-vanyan-5626a2240/',
  },
  {
    img: '/assets/profiles/Ramika_De_Silva.png',
    name: 'Ramika De Silva',
    emoji: '🦥',
    color: '#F7F141',
    title: 'Marketing Coordinator',
    social: 'https://www.linkedin.com/in/ramika-de-silva-4995b9203/',
  },
  {
    img: '/assets/profiles/Tiffany_Nguyen.png',
    name: 'Tiffany Nguyen',
    emoji: '🍵',
    color: '#FFF8BF',
    title: 'Marketing Coordinator',
    social: '',
  },
  {
    img: '/assets/profiles/Joyce_Park.png',
    name: 'Joyce Park',
    emoji: '📚',
    color: '#FFF8BF',
    title: 'Content Writer',
    social: 'https://joycesoyeonpark.wixsite.com/joyce-park',
  },
  {
    img: '/assets/profiles/Daksh_Shahani.png',
    name: 'Daksh Shahani',
    emoji: '👾',
    color: '#008581',
    title: 'Media Coordinator',
    social: 'https://www.linkedin.com/in/dakshit-shahani/',
  },
  {
    img: '/assets/profiles/Mackenzie_Dy.png',
    name: 'Mackenzie Dy',
    emoji: '🦖',
    color: '#4E2A84',
    title: 'Media Coordinator',
    social: 'linkedin.com/in/mackenzie-tenefrancia-dy',
  },
  {
    img: '/assets/profiles/Daisy_Han.png',
    name: 'Daisy Han',
    emoji: '😙',
    color: '#A7CCFF',
    title: 'Design Director',
    social: 'https://www.linkedin.com/in/daiisyhan/',
  },
  {
    img: '/assets/profiles/Maureen_Luo.png',
    name: 'Maureen Luo',
    emoji: '🫶🏻',
    color: '#2205a3',
    title: 'Designer',
    social: 'https://www.maureenluo.com/',
  },
  {
    img: '/assets/profiles/Jennifer_Shui.png',
    name: 'Jennifer Shui',
    emoji: '🦜',
    color: '#ABCFFF',
    title: 'Designer',
    social: 'https://www.linkedin.com/in/jennifershui/',
  },
  {
    img: '/assets/profiles/Elaine_Chen.png',
    name: 'Elaine Chen',
    emoji: '🌼',
    color: '#D9A5B3',
    title: 'Designer',
    social: 'https://www.linkedin.com/in/elaine-chen00/',
  },
  {
    img: '/assets/profiles/Roberta_Lee.png',
    name: 'Roberta Lee',
    emoji: '💗',
    color: '#D7BDE2',
    title: 'Designer',
    social: 'https://www.linkedin.com/in/roberta-lee-3381662ba/',
  },
  {
    img: '/assets/profiles/Rachel_Wang.png',
    name: 'Rachel Wang',
    emoji: '😑',
    color: '#CBC3E3',
    title: 'Designer',
    social: 'https://www.linkedin.com/in/rachel-wang-894626217/',
  },
  {
    img: '/assets/profiles/Trisha_Sia.png',
    name: 'Trisha Sia',
    emoji: '🌱',
    color: '#9FB9E7',
    title: 'Dev Director',
    social: 'https://www.linkedin.com/in/trisha-sia/',
  },
  {
    img: '/assets/profiles/Erping_Sun.png',
    name: 'Erping Sun',
    emoji: '✈️',
    color: '#669aed',
    title: 'Product Manager',
    social: 'http://linkedin.com/in/erping-sun',
  },
  {
    img: '/assets/profiles/Nara_Iamsakun.png',
    name: 'Nara Iamsakun',
    emoji: '🧸',
    color: '#0277a6',
    title: 'Developer',
    social: 'https://www.linkedin.com/in/nara-iamsakun/',
  },
  {
    img: '/assets/profiles/Daniel_Pan.png',
    name: 'Daniel Pan',
    emoji: '🤠',
    color: '#01DACC',
    title: 'Developer',
    social: 'http://danielpanhead.com',
  },
  {
    img: '/assets/profiles/Lincoln_Lee.png',
    name: 'Lincoln Lee',
    emoji: '🍦',
    color: '#BAE5F9',
    title: 'Developer',
    social: '',
  },
  {
    img: '/assets/profiles/Martin_Cai.png',
    name: 'Martin Cai',
    emoji: '🍵',
    color: '#FFF8DC',
    title: 'Developer',
    social: 'https://www.martincai.xyz',
  },
  {
    img: '/assets/profiles/Kezia_Rijadi.png',
    name: 'Kezia Rijadi',
    emoji: '🍊',
    color: '#FFCC99',
    title: 'Developer',
    social: 'https://keziarijadi.vercel.app/',
  },
  {
    img: '/assets/profiles/Geoff_Jiang.png',
    name: 'Geoff Jiang',
    emoji: '🥀',
    color: '#7F11E0',
    title: 'Developer',
    social: '',
  },
  {
    img: '/assets/profiles/Jae_Wu_Chun.png',
    name: 'Jae Wu Chun',
    emoji: '',
    color: '#7F11E0',
    title: 'Developer',
    social: '',
  },
  {
    img: '/assets/profiles/Keira_Wong.png',
    name: 'Keira Wong',
    emoji: '🤍',
    color: '#66D6A8',
    title: 'EDI Co-Director',
    social: 'https://www.linkedin.com/in/keirawong/',
  },
  {
    img: '/assets/profiles/Ryan_Lowe.png',
    name: 'Ryan Lowe',
    emoji: '🪼',
    color: '#99DEBC',
    title: 'EDI Co-Director',
    social: 'https://www.linkedin.com/in/ryanc-lowe/',
  },
  {
    img: '/assets/profiles/Sarah_Chenwang.png',
    name: 'Sarah Chenwang',
    emoji: '😛',
    color: '#cfe2f3',
    title: 'EDI Coordinator',
    social: '',
  },
  {
    img: '/assets/profiles/Avery_Chong.png',
    name: 'Avery Chong',
    emoji: '☹️',
    color: '#414141',
    title: 'EDI Coordinator',
    social: '',
  },
  {
    img: '/assets/profiles/Newgen_Bao.png',
    name: 'Newgen Bao',
    emoji: '🥐',
    color: '#01DACC',
    title: 'Engagement Co-Director',
    social: 'https://www.linkedin.com/in/newgen-bao/',
  },
  {
    img: '/assets/profiles/Kelly_Hum.png',
    name: 'Kelly Hum',
    emoji: '🐳',
    color: '#FFD1A0',
    title: 'Engagement Co-Director',
    social: 'https://www.linkedin.com/in/kellyhum',
  },
  {
    img: '/assets/profiles/Makafui_Amouzouvi.png',
    name: 'Makafui Amouzouvi',
    emoji: '😭',
    color: '#01DACC',
    title: 'Engagement Coordinator',
    social: 'https://www.linkedin.com/in/makafui-amouzouvi/',
  },
  {
    img: '/assets/profiles/Jia_Jin.png',
    name: 'Jia Jin',
    emoji: '',
    color: '#F8D7E1',
    title: 'Engagement Coordinator',
    social: 'https://www.linkedin.com/in/jiahui-jin',
  },
  {
    img: '/assets/profiles/Ege_Taslicay.png',
    name: 'Ege Taslicay',
    emoji: '',
    color: '#00a378',
    title: 'Engagement Coordinator',
    social: '',
  },
  {
    img: '/assets/profiles/Hannah_Baek.png',
    name: 'Hannah Baek',
    emoji: '😽',
    color: '#91213a',
    title: 'Engagement Coordinator',
    social: '',
  }
]

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
