import styled from 'styled-components';
 
const NavBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #000000;
`;

const NavGroupContainer = styled.div`
  display: flex;
  gap: 28px;
  align-items: center;
`;

const StyledImage = styled.img`
  margin-right: 18px;
`;

const SimpleLink = styled.a`
  appearance: none;
`;

const SimpleLinkText = styled.span`
  font-weight: bold;
  line-height: 23px;
  color: ${span => span.theme.colors.secondary};

  &:hover {
    background: ${span => span.theme.colors.primaryGradient};
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-text-fill-color: transparent;
  }
`;

const JoinLinkActive = styled.a`
  appearance: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${span => span.theme.colors.secondary};
`;

const JoinLinkInactive = styled.a`
  appearance: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgba(255, 255, 255, 0.6);
`;

const JoinLinkTextMain = styled.span`
  font-weight: bold;
  margin-bottom: 4px;
`;

const JoinLinkTextMinor = styled.span`
  font-size: 13.5px;
`;

const JoinLink = ({ hiring }) => {
  if (hiring) {
    return(<JoinLinkActive>
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

const LivePortalButton = styled.button``;

const NavBar = ({ hiring }) => {
  return (
    <NavBarContainer>
      <NavGroupContainer>
        <StyledImage src="/nwPlus_Logo_2020.png" alt="nwPlus club logo in white against dark blue background"/>
        <SimpleLink href="#"><SimpleLinkText>
          About Us
        </SimpleLinkText></SimpleLink> 
        <SimpleLink href="#"><SimpleLinkText>
          Hackathons
        </SimpleLinkText></SimpleLink> 
        <SimpleLink href="#"><SimpleLinkText>
          Resources
        </SimpleLinkText></SimpleLink> 
        <SimpleLink href="#"><SimpleLinkText>
          FAQ
        </SimpleLinkText></SimpleLink> 
      </NavGroupContainer>
      <NavGroupContainer>
        <JoinLink hiring={hiring}/>
        <LivePortalButton>Live Portal</LivePortalButton>
      </NavGroupContainer>
    </NavBarContainer>
  )
}

export default NavBar;
