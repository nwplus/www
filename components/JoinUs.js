import styled from 'styled-components';
import { ContentContainer } from './ContentContainer';
import { Title1, Body, MixedTextParagraph } from './Typography';
import Button from './Button';


const PaddingContainer = styled.div`
  padding-top: 256px;

  ${(p) => p.theme.mediaQueries.mobile} {
    padding-top: 75px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 42px;
  align-items: center;  
  margin-left: -10px;
  margin-bottom: 40px;

  ${(p) => p.theme.mediaQueries.mobile} {
    margin-bottom: 100%;
    flex-direction: column;
    gap: 0;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 42px;
  margin-bottom: 34px;
  max-width: 638px;

  ${(p) => p.theme.mediaQueries.mobile} {
    margin-top: 24px;
    margin-bottom: 0;
  }
`;

export const JoinUs = ({ hiring, deadline }) => {
  return (<PaddingContainer>
      <ContentContainer>
        <Title1 withGradient>Join Us</Title1>
        <TextContainer>
          <Body>
            Apply now to join our nwPlus organizing team!
          </Body>
          <MixedTextParagraph>
            <Body>
              Applications are NOW OPEN to all UBC students, no matter your background/faculty, until&nbsp;
            </Body>
            <Body withGradient>
              {deadline}
            </Body>
            <Body>.</Body>
          </MixedTextParagraph>
          <Body>
            Be sure to apply early as we&#39;ll be conducting interviews and sending out offers on a rolling basis!
          </Body>
        </TextContainer>
        <ButtonContainer>
          <Button disabled={!hiring} width="212px" height="48px" hollow>View Application Package</Button>
          <Button disabled={!hiring} width="212px" height="48px">Apply Now</Button>
        </ButtonContainer>
      </ContentContainer>
  </PaddingContainer>
  )
}

export default JoinUs