import { ContentContainer } from "./ContentContainer";
import styled from "styled-components";
import { LargeTitle, Title2 } from "./Typography";

const HeroContainer = styled.div`
  background: url(/assets/hero_illustration.svg);
  background-size: cover;
`;

const HeroTextContainer = styled.div`
  padding: 480px 0 400px 0;
  ${(p) => p.theme.mediaQueries.mobile} {
    padding: 184px 0 160px 0;
  }
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
