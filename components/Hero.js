import Lottie from 'lottie-react';
import styled from 'styled-components';
import { ContentContainer } from './ContentContainer';
import { LargeTitle, Title2 } from './Typography';
import scollAnimation from './lotties/scroll.json';
import Button from './Button'

/** hack to display image without cropping: width=100%, height=0, padding-bottom to size the div to the image’s proportion
 * padding-bottom: height / width = 998px / 1440px ≈ 69%
 * https://www.quora.com/In-CSS-how-do-I-set-a-background-image-on-a-div-without-part-of-the-image-getting-cutoff */
const HeroContainer = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 69%;
  background: url(/assets/hero_illustration.svg);
  background-repeat: no-repeat;
  background-position: top;
  background-size: contain;
`;

const HeroTextContainer = styled.div`
  padding-top: 28%;
`;

const NewsletterForm = styled.div`
  margin-top: -2.5%;
`;

const FormText = styled.p`
  color: white;
  font-size: 1.4em;
`;
const ComboButton = styled(Button)`
  position: relative;
  margin-top: -31px;
  margin-left: 250px;
  width: 65px;
  height: 28px;
  z-index: 1;

  ${(p) => p.theme.mediaQueries.mobile} {
    height: 36px;
    width: 90px;
    margin-top: -36px;
    margin-left: calc(100% - 90px);
  }

  &:hover {
    cursor: pointer;
  }
`;

const StyledInput = styled.input`
  border: none;
  border-radius: 8px;
  padding: 8px 12px;
  background: white;
  color: white;
  font-weight: normal;
  font-size: 1em;
  width: 320px;

  ${(p) => p.theme.mediaQueries.mobile} {
    padding: 4px 8px;
    font-size: 14px;
    line-height: 24px;
  }
`;

const ScrollContainer = styled.div`
  float: left;
  display: flex;
  align-items: center;
  color: ${(p) => p.theme.colors.metadata};
  font-size: 13.5px;
  ${(p) => p.theme.mediaQueries.mobile} {
    display: none;
  }
`;

const ScrollText = styled.p`
  margin-top: -4px;
`;

const ScrollOval = styled.span`
  position: relative;
  top: 10px;
  background: transparent;
  border: 1px solid white;
  border-radius: 50px;
  width: 15px;
  height: 30px;
  display: inline-block;
  margin-right: 15px;
`

export default function Hero() {
  return (
    <HeroContainer>
      <HeroTextContainer>
        <ContentContainer>
          <LargeTitle withGradient>nwPlus</LargeTitle>
          <Title2>
            Leading Western Canada&#39;s <br /> Biggest Hackathons
          </Title2>
        </ContentContainer>
      </HeroTextContainer>
      <NewsletterForm>
        <ContentContainer>
          <FormText>
            Get notified when exciting things drop
          </FormText>
          
          <StyledInput
            // ref={emailInput}
            name="email"
            type="email"
            placeholder="Email Address"
          />
          <ComboButton
            height="41px"
            width="200px"
            margin="0"
            padding="0"
            // onClick={addToMailingList}
          >
            Submit
          </ComboButton>
        </ContentContainer>
      </NewsletterForm>

      <ContentContainer>
        <ScrollContainer>
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: scollAnimation,
              rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice',
              },
            }}
            height={44}
            width={28}
          />
          <ScrollText>
            <ScrollOval></ScrollOval>Scroll to check out our hackathons and resources!
          </ScrollText>
        </ScrollContainer>
      </ContentContainer>
    </HeroContainer>
  );
}
