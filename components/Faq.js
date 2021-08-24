import styled from 'styled-components'
import FaqSection from './FaqSection'

const FaqContainer = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: auto;

    ${p => p.theme.mediaQueries.mobile} {
        display: flex;
        flex-direction: column;
    }
`

const Title = styled.div`
    color: ${p => p.theme.colors.primary};
    text-align: center;
    font-weight: bold;
    font-size: 3em;
    margin-bottom: 1em;
    ${p => p.theme.mediaQueries.mobile} {
        font-size: 1.75em;
    }
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
            <FaqContainer>
                <FlexContainer>
                    {firstHalf.map(faq => <StyledSection category={faq.category} questions={faq.questions}/>)}
                </FlexContainer>
                <FlexContainer>
                    {secondHalf.map(faq => <StyledSection category={faq.category} questions={faq.questions}/>)}
                </FlexContainer>    
            </FaqContainer>
        </div>
    )
}

export default Faq