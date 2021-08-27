import styled from 'styled-components';
 
const NavBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 46px 87px;
`;

const NavGroupContainer = styled.div`
  display: flex;
  gap: 28px;
  align-items: center;
`;

const StyledImage = styled.img`
  margin-right: 18px;
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

const NavBar = ({ hiring, hiringLink, livePortalLink }) => {
  return (
    <NavBarContainer>
      <NavGroupContainer>
        <StyledImage src="/assets/logos/nwPlus_Logo_2020.svg" alt="nwPlus club logo in white against dark blue background"/>
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
      </NavGroupContainer>
      <NavGroupContainer>
        <JoinLink hiring={hiring} hiringLink={hiringLink ?? '#'}/>
        <a href={livePortalLink ?? '#'}>
          <LivePortalButton>Live Portal</LivePortalButton>
        </a>
      </NavGroupContainer>
    </NavBarContainer>
  )
}

export default NavBar;