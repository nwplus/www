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
  font-size: 18px;
  font-weight: 700;
  line-height: 23px;
  color: #FFFFFF;

  :hover {
    color: background: linear-gradient(92.58deg, #20FFAF 0%, #78FF96 100%);
  }
`;

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

export const NavBar = ({ hiring }) => {
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
        <JoinLink>
          <JoinLinkTextMain>Join The Team</JoinLinkTextMain>
          <JoinLinkTextMinorDynamic hiring={hiring}/>
        </JoinLink>
        <LivePortalButton>Live Portal</LivePortalButton>
      </NavGroupContainer>
    </NavBarContainer>
  )
}
