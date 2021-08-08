import styled from 'styled-components'

const JoinUsContainer = styled.div`
  display: flex;
  flex-direction: column;  
  width: 628px;
`;

const Title = styled.span`
  background: ${span => span.theme.colors.primaryGradient};
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent; 
  -moz-text-fill-color: transparent;

  font-size: 43px;
  font-weight: bold;
  margin-bottom: 42px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 42px;
  align-items: center;  
`;

const RegularText = styled.span`
  line-height: 22px;
  font-size: 18px;
  color: ${span => span.theme.colors.bodyText};
`;

const AccentedText = styled.span`
  line-height: 22px;
  font-size: 18px;
  background: ${span => span.theme.colors.primaryGradient};
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent; 
  -moz-text-fill-color: transparent;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-bottom: 64px;
`;

export const JoinUs = ({ hiring, deadlineMonth, deadlineDay }) => {
  return (<JoinUsContainer>
      <Title>Join Us</Title>
      <TextContainer>
        <RegularText>
          Apply now to join our nwPlus organizing team!
        </RegularText>
        <div>
          <RegularText>
            Applications are NOW OPEN to all UBC students, no matter your background/faculty, until&nbsp;
          </RegularText>
          <AccentedText>
            {deadlineMonth} {deadlineDay}
          </AccentedText>
          <RegularText>.</RegularText>
        </div>
        <RegularText>
          Be sure to apply early as we&#39;ll be conducting interviews and sending out offers on a rolling basis!
        </RegularText>
      </TextContainer>
      <ButtonContainer>
        <button disabled={!hiring}>View Application Package</button>
        <button disabled={!hiring}>Apply Now</button>
      </ButtonContainer>
  </JoinUsContainer>
  )
}

export default JoinUs