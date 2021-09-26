import styled from 'styled-components';
import { ContentContainer } from "../components/ContentContainer";
import { Title1, Title3 } from "../components/Typography";
import Button from '../components/Button';

const Background = styled.div`
  background: url(/assets/404-bg.svg);
  background-size: cover;
  height: 100vh;
`;

// Calc subtracts 48px because that's the top + bottom margins from ContentContainer
const Flexbox = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  height: calc(100vh - 48px);

  ${(p) => p.theme.mediaQueries.mobile} {
    flex-direction: column;
    justify-content: center;
`;

export default function Custom404() {
  return (
    <Background>
      <ContentContainer>
        <Flexbox>
          <img width="50%" src="/assets/404-avatar.svg" />
          <div>
            <Title1>uh-oh!</Title1>
            <Title3>Looks like the page you’re looking for is lost in the nwSpace.</Title3>
            <Button 
              noMargin
              padding="10px 24px"
              width="200px"
              href="/"
            >
              Back to Homespace
            </Button>
          </div>
        </Flexbox>
      </ContentContainer>
    </Background>
  )  
}
