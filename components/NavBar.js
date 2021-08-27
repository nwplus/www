import styled from 'styled-components';
import { useState } from 'react';

import { BackgroundColor } from './Background';
 
const NavBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 46px 87px;

  ${(p) => p.theme.mediaQueries.mobile} {
    padding: 18px 16.78px 0 20px;
  }
`;

const NavGroupContainer = styled.div`
  display: flex;
  gap: 28px;
  align-items: center;
`;

const NavTextContainer = styled.div`
  display: flex;
  gap: 28px;
  align-items: center;

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
  color: ${p => p.theme.colors.secondary};
  font-feature-settings: 'liga' off;

  &:hover {
    background: ${p => p.theme.colors.primaryGradient};
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-text-fill-color: transparent;
  }
`;

const JoinLinkInactive = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${p => p.theme.colors.disabled};

  ${(p) => p.theme.mediaQueries.mobile} {
    flex-direction: row;
    gap: 10px;
  }
`;

const JoinLinkActive = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${p => p.theme.colors.primaryGradient};
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

const JoinLink = ({ hiring, hiringLink, setShowDropdown }) => {
  if (hiring) {
    return(<JoinLinkActive href={hiringLink} onClick={() => setShowDropdown(false)}>
       <JoinLinkTextMain>Join The Team</JoinLinkTextMain>
        <JoinLinkTextMinor>Application Open</JoinLinkTextMinor>
    </JoinLinkActive>
    );
  }
  return(<JoinLinkInactive>
       <JoinLinkTextMain>Join The Team</JoinLinkTextMain>
        <JoinLinkTextMinor>Application Closed</JoinLinkTextMinor>
    </JoinLinkInactive>
  );
};

const LivePortalButton = styled.button`
  border: none;
  background: ${p => p.theme.colors.secondary};
  font-size: inherit;
  font-family: inherit;
  font-weight: bold;
  height: 41px;
  width: 134px;
  border-radius: 34px;

  ${p => p.theme.mediaQueries.mobile} {
    width: 160px;
`;

const HamburgerMenu = styled.img`
  display: none;
  ${p => p.theme.mediaQueries.mobile} {
    display: block;
    width: 30px;
  }
`;

const Cross = HamburgerMenu;

const DropDownContentContainer = styled.div`
  padding: 32px 0 27px 20px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const MenuList = ({ setShowDropdown = null }) => {
  return  (<>
    <LinkText href="#" onClick={() => setShowDropdown && setShowDropdown(false)}>About Us</LinkText>
    <LinkText href="#" onClick={() => setShowDropdown && setShowDropdown(false)}>Hackathons</LinkText>
    <LinkText href="#" onClick={() => setShowDropdown && setShowDropdown(false)}>Resources</LinkText>
    <LinkText href="#" onClick={() => setShowDropdown && setShowDropdown(false)}>FAQ</LinkText>
  </>);
}

const NavBar = ({ hiring, hiringLink, livePortalLink }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  if (showDropdown) {
    return (<BackgroundColor>
      <NavBarContainer>
        <NwPlusLogo src="/assets/logos/nwPlus_Logo_2020.svg" alt="nwPlus club logo in white against dark blue background"/>
        <Cross src="/assets/icons/close_white.svg" alt="dropdown menu icon"
        onClick={() => setShowDropdown(false)}/>
      </NavBarContainer>
      <DropDownContentContainer>
        <MenuList setShowDropdown={setShowDropdown}/>
        <JoinLink hiring={hiring} hiringLink={hiringLink ?? '#'} setShowDropdown={setShowDropdown}/>
        <a href={livePortalLink ?? '#'} rel="noreferrer noopener" target={livePortalLink && "_blank"}>
          <LivePortalButton>Live Portal</LivePortalButton>
        </a>
      </DropDownContentContainer>
    </BackgroundColor>);
  }

  return (
    <NavBarContainer>
      <NavGroupContainer>
        <NwPlusLogo src="/assets/logos/nwPlus_Logo_2020.svg" alt="nwPlus club logo in white against dark blue background"/>
        <NavTextContainer>
          <MenuList/>
        </NavTextContainer>
      </NavGroupContainer>
      <NavTextContainer>
        <JoinLink hiring={hiring} hiringLink={hiringLink ?? '#'}/>
        <a href={livePortalLink ?? '#'}>
          <LivePortalButton>Live Portal</LivePortalButton>
        </a>
      </NavTextContainer>
      <HamburgerMenu src="/assets/icons/menu.svg" alt="dropdown menu icon"
      onClick={() => setShowDropdown(true)}/>
    </NavBarContainer>
  )
}

export default NavBar;
