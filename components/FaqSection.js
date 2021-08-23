import styled from 'styled-components'

const SectionContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const CategoryName = styled.div`
    color: white;
    font-size: 1.5em;
`

const StyledQuestion = styled.div`
    margin-top: 0.5em;
`

const FaqSection = ({ category, questions, className }) => {
    return (
        <SectionContainer className={className}>
            <CategoryName>{category}</CategoryName>
            {questions.map(q => <StyledQuestion>{q}</StyledQuestion>)}
        </SectionContainer>
    )
}

export default FaqSection