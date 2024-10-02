import { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const RootContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 4px 0;

  > * {
    margin: 0px;
    padding: 16px;
  }
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: ${(p) => (p.isExpanded ? '4px 4px 0 0' : '4px')};
  border: 2px solid #20FFAF;
  background: ${(p) =>
    p.isExpanded
      ? 'linear-gradient(0deg, #20FFAF -10.56%, #01DACC 100%)'
      : 'white'};
`;

const Question = styled.p`
  margin: 0px;
  color: #252525;
  font-size: 18px;
`;

const Arrow = styled.img`
  position: absolute;
  right: 15px;
  transform: ${(p) => (p.isExpanded ? 'none' : 'rotate( -180deg )')};
  transition: transform 0.5s ease;

  &:hover {
    cursor: pointer;
  }
`;

const Answer = styled.p`
  animation: ${fadeIn} 1s linear;
  transition: 1s linear;
  background: #4b406d;
  color: white;
  font-size: 16px;
  border: 2px solid #20FFAF;
  border-radius: 0 0 4px 4px;
  > * {
    margin: 0px;
  }
`;

const SmartAnswerBox = ({ answer, isHardcoded }) => {
  const createMarkup = () => {
    return { __html: answer };
  };

  return (
    <>
      {isHardcoded ? (
        <Answer dangerouslySetInnerHTML={createMarkup()} />
      ) : (
        <Answer>{answer}</Answer>
      )}
    </>
  );
};

const FaqBox = ({ question, ...props }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <RootContainer>
      <TopContainer
        onClick={() => setIsExpanded(!isExpanded)}
        isExpanded={isExpanded}
      >
        <Question>{question}</Question>
        <Arrow
          src='/assets/icons/arrow.svg'
          alt='faq selected indicator'
          isExpanded={isExpanded}
        ></Arrow>
      </TopContainer>
      {isExpanded && <SmartAnswerBox {...props} />}
    </RootContainer>
  );
};

export default FaqBox;
