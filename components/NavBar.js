import styled from 'styled-components';
import { useState } from 'react';
 
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

const StyledImage = styled.img`
  margin-right: 18px;

  ${(p) => p.theme.mediaQueries.mobile} {
    width: 21.89px;
  }
`;

const SimpleLinkText = styled.span`
  font-weight: bold;
  color: ${p => p.theme.colors.secondary};

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
`;

const JoinLinkTextMain = styled.span`
  font-weight: bold;
  margin-bottom: 4px;
`;

const JoinLinkTextMinor = styled.span`
  font-size: 13.5px;
`;

const JoinLink = ({ hiring, hiringLink }) => {
  if (hiring) {
    return(<JoinLinkActive href={hiringLink}>
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
`;

const Menu = styled.img`
  display: none;
  ${p => p.theme.mediaQueries.mobile} {
    display: block;
    width: 25px;
  }
`;

const Cross = Menu;

const NavBar = ({ hiring, hiringLink, livePortalLink }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  if (showDropdown) {
    return (<NavBarContainer>
        <StyledImage src="/assets/logos/nwPlus_Logo_2020.svg" alt="nwPlus club logo in white against dark blue background"/>
        <Cross src="/assets/icons/menu.svg" alt="dropdown menu icon"
        onClick={() => setShowDropdown(true)}/>
      </NavBarContainer>);
  }

  return (
    <NavBarContainer>
      <NavGroupContainer>
        <StyledImage src="/assets/logos/nwPlus_Logo_2020.svg" alt="nwPlus club logo in white against dark blue background"/>
        <NavTextContainer>
          <a href="#"><SimpleLinkText>
            About Us
          </SimpleLinkText></a> 
          <a href="#"><SimpleLinkText>
            Hackathons
          </SimpleLinkText></a> 
          <a href="#"><SimpleLinkText>
            Resources
          </SimpleLinkText></a> 
          <a href="#"><SimpleLinkText>
            FAQ
          </SimpleLinkText></a> 
        </NavTextContainer>
      </NavGroupContainer>
      <NavTextContainer>
        <JoinLink hiring={hiring} hiringLink={hiringLink ?? '#'}/>
        <a href={livePortalLink ?? '#'}>
          <LivePortalButton>Live Portal</LivePortalButton>
        </a>
      </NavTextContainer>
      <Menu src="/assets/icons/menu.svg" alt="dropdown menu icon"
      onClick={() => setShowDropdown(true)}/>
    </NavBarContainer>
  )
}

export default NavBar;
