import styled from 'styled-components'
import FaqBox from './FaqBox'

const SectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    ${p => p.theme.mediaQueries.mobile} {
        width: 100%;
        align-items: center;
    }
`

const CategoryName = styled.div`
    color: white;
    font-size: 1.5em;
    ${p => p.theme.mediaQueries.mobile} {
        font-size: 1.25em;
    }
`

const FaqSection = ({ category, faqs }) => {
    return (
        <SectionContainer>
            <CategoryName>{category}</CategoryName>
            {faqs.map(faq => <FaqBox key={faq.question} question={faq.question} answer={faq.answer} />)}
        </SectionContainer>
    )
}

export default FaqSection