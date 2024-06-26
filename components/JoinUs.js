import styled from 'styled-components';
import { useState, useEffect } from 'react';

import fireDb from '../utilities/firebase';

import { ContentContainer } from './ContentContainer';
import { Title1, Body, MixedTextParagraph, LinkBody } from './Typography';
import Button from './Button';

const CAP_BODY =
  '* This year, we are also recruiting non UBC students for our Campus Ambassador Program. Apply ';
const CAP_LINK_TEXT = 'here';

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
  const [config, setConfig] = useState(null);

  const getApplicationData = async () => {
    const wwwConfig = await fireDb.getWebsiteData('www');
    setConfig(wwwConfig);
  };

  useEffect(() => {
    getApplicationData();
  }, []);

  return (
    <PaddingContainer>
      <ContentContainer>
        <MobileFormatContainer>
          <Title1 withGradient>Join Us</Title1>
          <TextContainer>
            <Body>Apply now to join our nwPlus organizing team!</Body>
            <MixedTextParagraph>
              <Body>
                Applications are NOW OPEN to all UBC students
                {config?.featureFlags?.isHiringCAP ? '*' : ''}, no matter your
                background/faculty, until&nbsp;
              </Body>
              <Body withGradient>{config?.hiring?.deadline}</Body>
              <Body>.</Body>
            </MixedTextParagraph>
            {/* <Body>
              Be sure to apply early as we&#39;ll be conducting interviews and
              sending out offers on a rolling basis!
            </Body> */}
            {config?.featureFlags?.isHiringCAP && (
              <MixedTextParagraph>
                <Body>
                  {CAP_BODY}
                  <a
                    href={config?.hiring?.CAPFormLink}
                    target='_blank'
                    rel='noreferrer'
                  >
                    <LinkBody>{CAP_LINK_TEXT}</LinkBody>
                  </a>
                </Body>
              </MixedTextParagraph>
            )}
          </TextContainer>
          <ButtonContainer>
            <StyledButton
              width='212px'
              height='48px'
              hollow
              href={
                config?.featureFlags?.isHiring && config?.hiring?.packageLink
              }
              rel='noreferrer noopener'
              target='_blank'
            >
              View Application Package
            </StyledButton>
            <StyledButton
              width='212px'
              height='48px'
              href={config?.featureFlags?.isHiring && config?.hiring?.formLink}
              rel='noreferrer noopener'
              target='_blank'
            >
              Apply Now
            </StyledButton>
          </ButtonContainer>
        </MobileFormatContainer>
      </ContentContainer>
    </PaddingContainer>
  );
};

export default JoinUs;
