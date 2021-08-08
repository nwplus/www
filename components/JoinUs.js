import styled from 'styled-components'

const JoinUsContainer = styled.div`
  display: flex;
  flex-direction: column;  
`;

const Title = styled.span`
  color: ${span => span.theme.colors.primaryGradient}
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 42px;
  align-items: center;  
`;

export const JoinUs = ({ hiring }) => {
  return (<JoinUsContainer>
      <Title>Join Us</Title>
      <ButtonContainer>
        <button disabled={!hiring}>View Application Package</button>
        <button disabled={!hiring}>Apply Now</button>
      </ButtonContainer>
  </JoinUsContainer>
  )
}

export default JoinUs