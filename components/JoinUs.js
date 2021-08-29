import styled from 'styled-components';
import { useState, useEffect } from 'react';

import fireDb from '../utilities/firebase';

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
  margin-bottom: 60px;

  ${(p) => p.theme.mediaQueries.mobile} {
    margin-bottom: 100%;
    flex-direction: column;
    gap: 0;
    width: 100%;
  }
`;

const StyledButton = styled(Button)`
  ${(p) => p.theme.mediaQueries.mobile} {
    width: 100%;
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

const MobileFormatContainer = styled.div`
  ${(p) => p.theme.mediaQueries.mobile} {
    margin: 0 52px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const JoinUs = () => {
  const [applicationInfo, setapplicationInfo] = useState(null);

  const getApplicationData = async () => {
    const applicationInfo = await fireDb.getCollection('www', 'Applications');
    setapplicationInfo(applicationInfo[0]);
  }

  useEffect(() => {
    getApplicationData();
  }, []);

  return (<PaddingContainer>
      <ContentContainer>
        <MobileFormatContainer>
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
                {applicationInfo?.deadline}
              </Body>
              <Body>.</Body>
            </MixedTextParagraph>
            <Body>
              Be sure to apply early as we&#39;ll be conducting interviews and sending out offers on a rolling basis!
            </Body>
          </TextContainer>
          <ButtonContainer>
            <StyledButton width="212px" height="48px" hollow href={applicationInfo?.isOpen && applicationInfo?.packageUrl}>View Application Package</StyledButton>
            <StyledButton width="212px" height="48px" href={applicationInfo?.isOpen && applicationInfo?.formUrl}>Apply Now</StyledButton>
          </ButtonContainer>
        </MobileFormatContainer>
      </ContentContainer>
  </PaddingContainer>
  )
}

export default JoinUs