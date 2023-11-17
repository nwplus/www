import styled from "styled-components"
import Button from "./Button"

const BackgroundImageContainer = styled.div`
    width: 100%;
    height: 100%;
`

const CardContainer = styled.div`
    width: 100%;
    height: 500px;
    overflow: hidden;
    border-radius: 12px;
    margin: 2em;
    position: relative;

    & > ${BackgroundImageContainer} {
        background: ${p => p.theme.colors.shadedGradient}, url(${p => p.imageLink}) center/cover;
    }

    &:hover > ${BackgroundImageContainer} {
        background: url(${p => p.imageLink}) cover;
        transform: scale(1.1);
        transition: 300ms;
    }
`

const OverlayContainer = styled.div`
    position: absolute;
    z-index: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`

const OverLayFooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: auto;
    width: 100%;
    align-items: center;
    padding: 1em 2.5em;
`

const EventDataContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    font-size: 1.2em;
    font-weight: bold;

    ${(p) => p.theme.mediaQueries.mobile} {
        flex-direction: column;
    }
`

const EventRegistrationStatus = styled.div`
    color: ${p => p.registrationOpen ? p.theme.colors.primary : 'white'};
`

const EventDateString = styled.div`
    color: ${p => p.theme.colors.metadata};
`

const HackathonCard = ({ registrationOpen, link, dateString, imageLink }) => {
    return (
        <CardContainer imageLink={imageLink}>
            <OverlayContainer>
                <OverLayFooterContainer>
                    <EventDataContainer>
                        <EventRegistrationStatus registrationOpen={registrationOpen}>
                            {`${registrationOpen ? 'Registration Open' : 'Registration Closed'}`}
                        </EventRegistrationStatus>
                        <EventDateString>{dateString}</EventDateString>
                    </EventDataContainer>
                    <Button height='3em' link={link} target='_blank' rel='noopener noreferrer'>
                        Visit Site
                    </Button>
                </OverLayFooterContainer>
            </OverlayContainer>
            <BackgroundImageContainer/>
        </CardContainer>
    )
}

export default HackathonCard