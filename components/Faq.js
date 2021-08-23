import styled from 'styled-components'
import FaqSection from './FaqSection'

const FaqGrid = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: auto;
`

const Title = styled.div`
    color: ${p => p.theme.colors.primary};
    text-align: center;
    font-weight: bold;
    font-size: 3em;
    margin-bottom: 1em;
`

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const StyledSection = styled(FaqSection)`
    margin-top: 2em;
`

const Faq = ({ faqs }) => {
    const halfIndex = Math.ceil(faqs.length / 2)
    const firstHalf = faqs.slice(0, halfIndex)
    const secondHalf = faqs.slice(-halfIndex+1)

    return (
        <div>
            <Title>Frequently Asked Questions</Title>
            <FaqGrid>
                <FlexContainer>
                    {firstHalf.map(faq => <StyledSection category={faq.category} questions={faq.questions}/>)}
                </FlexContainer>
                <FlexContainer>
                    {secondHalf.map(faq => <StyledSection category={faq.category} questions={faq.questions}/>)}
                </FlexContainer>    
            </FaqGrid>
        </div>
    )
}

export default Faq