import styled from 'styled-components';
import { useState, useEffect } from 'react';

import { SCREEN_BREAKPOINTS } from '../pages/_app';
import fireDb from '../utilities/firebase';

const NavBarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 3;
  max-width: 1600px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  visibility: ${(p) => p.visibility};
  opacity: ${(p) => p.opacity};
  ${(p) => (p.darkBg ? `background-color: ${p.theme.colors.background};` : '')}
  transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;
  padding: 48px 40px 0;

  ${(p) => p.theme.mediaQueries.mobile} {
    padding: 24px 40px 0;
  }
`;

const NavGroupContainer = styled.div`
  display: flex;
  gap: 28px;
  align-items: center;

  ${(p) => p.theme.mediaQueries.tablet} {
    gap: 5px;
  }
`;

const NavTextContainer = styled.div`
  display: flex;
  gap: 28px;
  align-items: center;

  ${(p) => p.theme.mediaQueries.tablet} {
    gap: 15px;
  }

  ${(p) => p.theme.mediaQueries.mobile} {
    display: none;
  }
`;

const NwPlusLogo = styled.img`
  margin-right: 18px;

  ${(p) => p.theme.mediaQueries.mobile} {
    width: 21.89px;
  }
`;

const LinkText = styled.a`
  font-weight: bold;
  color: ${(p) => p.theme.colors.secondary};
  font-feature-settings: 'liga' off;

  &:hover {
    background: ${(p) => p.theme.colors.primaryGradient};
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
  }
`;

const JoinLinkContainer = styled.div`
  visibility: ${(p) => p.visibility};
  opacity: ${(p) => p.opacity};
  transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;
`;

const JoinLinkInactive = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(p) => p.theme.colors.disabled};

  ${(p) => p.theme.mediaQueries.mobile} {
    flex-direction: row;
    gap: 10px;
  }
`;

const JoinLinkActive = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(p) => p.theme.colors.primaryGradient};
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;

  ${(p) => p.theme.mediaQueries.mobile} {
    flex-direction: row;
    gap: 10px;
  }
`;

const JoinLinkTextMain = styled.span`
  font-weight: bold;
  margin-bottom: 4px;
`;

const JoinLinkTextMinor = styled.span`
  font-size: 13.5px;
`;

const JoinLink = ({
  hiring,
  hiringLink,
  visibility,
  opacity,
  setShowDropdown = () => null,
}) => {
  return (
    <JoinLinkContainer visibility={visibility} opacity={opacity}>
      {hiring ? (
        <JoinLinkActive
          href={hiringLink}
          onClick={() => setShowDropdown(false)}
        >
          <JoinLinkTextMain>Join The Team</JoinLinkTextMain>
          <JoinLinkTextMinor>Applications Open</JoinLinkTextMinor>
        </JoinLinkActive>
      ) : (
        <JoinLinkInactive>
          <JoinLinkTextMain>Join The Team</JoinLinkTextMain>
          <JoinLinkTextMinor>Application Closed</JoinLinkTextMinor>
        </JoinLinkInactive>
      )}
    </JoinLinkContainer>
  );
};

const LivePortalButton = styled.button`
  border: none;
  background: ${(p) => p.theme.colors.secondary};
  font-size: inherit;
  font-family: inherit;
  font-weight: bold;
  height: 41px;
  width: 134px;
  border-radius: 34px;


    &:hover {
     cursor: ${(p) => (p.disabled ? 'not-allowed' : 'pointer')} ;
    }

  ${(p) => p.theme.mediaQueries.mobile} {
    width: 160px;
`;

const HamburgerMenu = styled.img`
  display: none;
  ${(p) => p.theme.mediaQueries.mobile} {
    display: block;
    width: 30px;
  }
`;

const Cross = HamburgerMenu;

const DropDownContentContainer = styled.div`
  position: fixed;
  top: 54px;
  z-index: 3;
  padding: 24px 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  width: 100%;
  background-color: ${(p) => p.theme.colors.background};
`;

const MenuItem = ({ name, href, isAnchor }) => {
  const [anchorTarget, setAnchorTarget] = useState(null);

  useEffect(() => {
    if (isAnchor) {
      setAnchorTarget(document.getElementById(href));
    }
  }, [href]);

  const handleClick = (event) => {
    if (isAnchor && anchorTarget) {
      event.preventDefault();
      anchorTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <LinkText href={href} onClick={handleClick}>
      {name}
    </LinkText>
  );
};

const MenuList = () => {
  return (
    <>
      <MenuItem name='About Us' href='/#about' isAnchor />
      <MenuItem name='Hackathons' href='/#hackathons' isAnchor />
      <MenuItem name='Resources' href='/#resources' isAnchor />
      <MenuItem name='FAQ' href='/#faq' isAnchor />
    </>
  );
};

const NavBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [visibility, setVisibility] = useState('visible');
  const [opacity, setOpacity] = useState('1');

  const [config, setConfig] = useState(null);

  const getApplicationData = async () => {
    const wwwConfig = await fireDb.getWebsiteData('www');
    setConfig(wwwConfig);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll());
    window.addEventListener('resize', handleResize);
    getApplicationData();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleResize = () => {
    if (window.innerWidth >= SCREEN_BREAKPOINTS.mobile) {
      setShowDropdown(false);
    }
  };

  const handleScroll = () => {
    var lastScroll = 0;
    return () => {
      const scroll = window.pageYOffset || document.documentElement.scrollTop;
      if (scroll <= 0) {
        setVisibility('visible');
        setOpacity('1');
      } else if (scroll > lastScroll) {
        setVisibility('hidden');
        setOpacity('0');
      } else {
        setVisibility('visible');
        setOpacity('1');
      }
      lastScroll = scroll;
    };
  };

  if (showDropdown) {
    return (
      <>
        <NavBarContainer darkBg>
          <a href='/'>
            <NwPlusLogo
              src='/assets/logos/nwPlus_Logo_2020.svg'
              alt='nwPlus club logo in white against dark blue background'
            />
          </a>
          <Cross
            src='/assets/icons/close_white.svg'
            alt='dropdown menu icon'
            onClick={() => setShowDropdown(false)}
          />
        </NavBarContainer>
        <DropDownContentContainer>
          <MenuList />
          <JoinLink
            hiring={config?.featureFlags?.isHiring}
            hiringLink='/apply'
            visibility={config ? 'visible' : 'hidden'}
            opacity={config ? '1' : '0'}
            setShowDropdown={() => setShowDropdown(false)}
          />
          <a
            href={config?.CTALink}
            rel='noreferrer noopener'
            target={config?.CTALink !== '#' && '_blank'}
          >
            {config?.featureFlags?.isLive !== null && (
              <LivePortalButton disabled={!config?.featureFlags?.isLive}>
                Live Portal
              </LivePortalButton>
            )}
          </a>
        </DropDownContentContainer>
      </>
    );
  }

  return (
    <NavBarContainer visibility={visibility} opacity={opacity}>
      <NavGroupContainer>
        <a href='/'>
          <NwPlusLogo
            src='/assets/logos/nwPlus_Logo_2020.svg'
            alt='nwPlus club logo in white against dark blue background'
          />
        </a>
        <NavTextContainer>
          <MenuList />
        </NavTextContainer>
      </NavGroupContainer>
      <NavTextContainer>
        <JoinLink
          hiring={config?.featureFlags?.isHiring}
          hiringLink='/apply'
          visibility={config ? 'visible' : 'hidden'}
          opacity={config ? '1' : '0'}
        />
        {config?.featureFlags?.isLive !== null && (
          <a href={config?.CTALink ?? '#'}>
            <LivePortalButton disabled={!config?.featureFlags?.isLive}>Live Portal</LivePortalButton>
          </a>
        )}
      </NavTextContainer>
      <HamburgerMenu
        src='/assets/icons/menu.svg'
        alt='dropdown menu icon'
        onClick={() => setShowDropdown(true)}
      />
    </NavBarContainer>
  );
};

export default NavBar;
