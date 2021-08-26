import { ContentContainer } from './ContentContainer';
import styled from 'styled-components';
import Lottie from 'react-lottie';
import { LargeTitle, Title2 } from './Typography';
import scollAnimation from './lotties/scroll.json';

/** hack to display image without cropping: width=100%, height=0, padding-bottom to size the div to the image’s proportion
 * padding-bottom: height / width = 998px / 1440px ≈ 69%
 * https://www.quora.com/In-CSS-how-do-I-set-a-background-image-on-a-div-without-part-of-the-image-getting-cutoff */
const HeroContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-bottom: 69%;
  background: url(/assets/hero_illustration.svg);
  background-repeat: no-repeat;
  background-position: top;
  background-size: contain;
`;

const HeroTextContainer = styled.div`
  padding-top: 28%;
`;

const ScrollContainer = styled.div`
  float: left;
  display: flex;
  align-items: center;
  color: ${p => p.theme.colors.metadata};
  font-size: 13.5px;
  ${(p) => p.theme.mediaQueries.mobile} {
    display: none;
  }
`;

const ScrollText = styled.p`
  margin-top: -4px;
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
      <ContentContainer>      
        <ScrollContainer>
          <Lottie 
            options={{
              loop: true,
              autoplay: true,
              animationData: scollAnimation,
              rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
              }
            }}
            height={44}
            width={28}
          />
          <ScrollText>Scroll to check out our hackathons and resources!</ScrollText>
        </ScrollContainer>
      </ContentContainer>
    </HeroContainer>
  );
}
