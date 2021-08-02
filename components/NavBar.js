import styled from 'styled-components'
 
const NavBarContainer = styled.div`
`;

const NavLogoContainer = styled.div`
`;

const NavGroupContainer = styled.div`
`;

const SimpleLink = styled.a`
`;

const SimpleLinkText = styled.span`
`;

const LinkGroup = () => {

};

const LinkTitle = () => {

}

const LinkGroupChild = ({ path }) => {

}

const JoinLink = styled.a``;

const JoinLinkTextMain = styled.span``;

const JoinLinkTextMinor = styled.span``;

const JoinLinkTextMinorDynamic = ({ hiring }) => {

};

const LivePortalButton = styled.button``;

export const NavBar = () => {
  return (
    <NavBarContainer>
      <NavGroupContainer>
        <NavLogoContainer></NavLogoContainer>
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
