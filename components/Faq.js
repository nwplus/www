import styled from 'styled-components'
import FaqSection from './FaqSection'

const FaqContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    gap: 76px;
    margin-top: 64px;

    ${p => p.theme.mediaQueries.mobile} {
        display: flex;
        flex-direction: column;
        gap: 24px;
    }
`

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;

    & > div:not(:first-child) {
        margin-top: 40px;

        ${p => p.theme.mediaQueries.mobile} {
            margin-top: 24px;
        }
    }
`

export default function Faq({ faqs }) {
    // Bucket each FAQ into a dictionary where the key is the category
    var categories = {};
    faqs.forEach((faq) => {
        if (categories[faq.category] == undefined) {
            categories[faq.category] = [];
        }
        categories[faq.category].push(faq);
    });

    return (
        <FaqContainer>
            <FlexContainer>
                {categories['Hackers'] && <FaqSection category={'Hackers'} faqs={categories['Hackers']}/>}
                {categories['Sponsors'] && <FaqSection category={'Sponsors'} faqs={categories['Sponsors']}/>}
            </FlexContainer>
            <FlexContainer>
                {categories['General'] &&<FaqSection category={'General'} faqs={categories['General']}/>}
            </FlexContainer>    
        </FaqContainer>
    )
}