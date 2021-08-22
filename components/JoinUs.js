import styled from 'styled-components';
import { ContentContainer } from './ContentContainer';
import { Title1, Body } from './Typography';

const ButtonContainer = styled.div`
  display: flex;
  gap: 42px;
  align-items: center;  
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-bottom: 64px;
`;

export const JoinUs = ({ hiring, deadline }) => {
  return (<ContentContainer>
      <Title1 withGradient>Join Us</Title1>
      <TextContainer>
        <Body>
          Apply now to join our nwPlus organizing team!
        </Body>
        <div>
          <Body>
            Applications are NOW OPEN to all UBC students, no matter your background/faculty, until&nbsp;
          </Body>
          <Body withGradient>
            {deadline}
          </Body>
          <Body>.</Body>
        </div>
        <Body>
          Be sure to apply early as we&#39;ll be conducting interviews and sending out offers on a rolling basis!
        </Body>
      </TextContainer>
      <ButtonContainer>
        <button disabled={!hiring}>View Application Package</button>
        <button disabled={!hiring}>Apply Now</button>
      </ButtonContainer>
  </ContentContainer>
  )
}

export default JoinUs