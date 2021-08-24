import { ContentContainer } from './ContentContainer';
import styled from 'styled-components';
import { LargeTitle, Title2 } from './Typography';

/** hack to display image without cropping: width=100%, height=0, padding-bottom to size the div to the image’s proportion
 * padding-bottom: height / width = 998px / 1440px ≈ 69%
 * https://www.quora.com/In-CSS-how-do-I-set-a-background-image-on-a-div-without-part-of-the-image-getting-cutoff */
const HeroContainer = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 69%;
  background: url(/assets/hero_illustration.svg);
  background-size: cover;
`;

const HeroTextContainer = styled.div`
  padding-top: 33%;
`;

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
    </HeroContainer>
  );
}
