import styled from 'styled-components'

import nwplusLogo from 'nwPlus_Logo_2020.png'
 
const NavBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-contents: space-between;
`;

const NavLogo = styled.img`
`;

const NavGroupContainer = styled.div`
  display: flex;
  gap: 46.22px;
  align-items: center;
`;

const SimpleLink = styled.a`
  appearance: none;
`;

const SimpleLinkText = styled.span`
  font-family: HK Grotesk;
  font-size: 18px;
  font-weight: 700;
  line-height: 23px;
  color: #FFFFFF;
`;

const LinkGroup = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
};

const LinkTitle = ({ children }) => {
  return(
    <SimpleLinkText>
      {children}
    </SimpleLinkText>
  );
}

const LinkGroupChild = ({ path, children }) => {
  return(
    <SimpleLink href={path} target="_blank" rel="noopener noreferrer"><SimpleLinkText>
      {children}
    </SimpleLinkText></SimpleLink>
  );
}

const JoinLink = styled.a``;

const JoinLinkTextMain = styled.span``;

const JoinLinkTextMinor = styled.span``;

const JoinLinkTextMinorDynamic = ({ hiring }) => {
  if (hiring) {
    return(
      <JoinLinkTextMinor>Application Open</JoinLinkTextMinor>
    );
  }
  return(
    <JoinLinkTextMinor>Application Closed</JoinLinkTextMinor>
  );
};

const LivePortalButton = styled.button``;

export const NavBar = () => {
  return (
    <NavBarContainer>
      <NavGroupContainer>
        <NavLogo src={nwplusLogo} alt="nwPlus club logo in white against dark blue background"/>
        <SimpleLink href="#"><SimpleLinkText>
          About Us
        </SimpleLinkText></SimpleLink> 
        <LinkGroup>
          <LinkTitle>Hackathons</LinkTitle>
          <LinkGroupChild href="#">cmd-f</LinkGroupChild>
          <LinkGroupChild href="#">HackCamp</LinkGroupChild>
          <LinkGroupChild href="#">nwHacks</LinkGroupChild>
        </LinkGroup>
        <SimpleLink href="#"><SimpleLinkText>
          Resources
        </SimpleLinkText></SimpleLink> 
        <SimpleLink href="#"><SimpleLinkText>
          FAQ
        </SimpleLinkText></SimpleLink> 
      </NavGroupContainer>
      <NavGroupContainer>
        <JoinLink>
          <JoinLinkTextMain>Join The Team</JoinLinkTextMain>
          <JoinLinkTextMinorDynamic hiring={false}/>
        </JoinLink>
        <LivePortalButton>Live Portal</LivePortalButton>
      </NavGroupContainer>
    </NavBarContainer>
  )
}
