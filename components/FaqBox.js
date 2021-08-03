import { useState } from "react";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Container = styled.div`
  border: 1px solid #b5b0c0;

  > * {
    margin: 0px;
    padding: 1em;
  }
`;

const Question = styled.p`
  color: #252525;
  font-size: 18px;
  background: ${(props) =>
    props.isExpanded
      ? "linear-gradient(0deg, #20FFAF -10.56%, #01DACC 100%)"
      : "white"};
`;

const Answer = styled.p`
  animation: ${fadeIn} 1s linear;
  transition: 1s linear;
  background: #4b406d;
  color: white;
  font-size: 13.5px;
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
    <>
      <Container>
        <Question
          onClick={() => setIsExpanded(!isExpanded)}
          isExpanded={isExpanded}
        >
          {question}
        </Question>
        {isExpanded && <SmartAnswerBox {...props} />}
      </Container>
    </>
  );
};

export default FaqBox;
