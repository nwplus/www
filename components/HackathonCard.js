import styled from "styled-components"

const CardContainer = styled.div`
    width: 300px;
    height: 500px;
    overflow: hidden;
    border-radius: 12px;
    margin: 2em;
    position: relative;
`

const BackgroundImageContainer = styled.div`
    background: linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url(https://i.pinimg.com/474x/00/5e/95/005e953027d76c35ee6ec1446d43a739.jpg) center;
    background-size: cover;
    width: 100%;
    height: 100%;

    ${CardContainer}:hover & {
        background: url(https://i.pinimg.com/474x/00/5e/95/005e953027d76c35ee6ec1446d43a739.jpg) center;
        background-size: cover;
        transform: scale(1.1);
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
    padding: 1.5em;
`

const EventDataContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: 1.2em;
    font-weight: bold;
    margin-bottom: 0.5em;
`

const EventRegistrationStatus = styled.div`
    color: white;
`

const EventDateString = styled.div`
    color: #BDBAC3;
`

const HackathonCard = () => {
    return (
        <CardContainer>
            <OverlayContainer>
                <OverLayFooterContainer>
                    <EventDataContainer>
                        <EventRegistrationStatus>Test1</EventRegistrationStatus>
                        <EventDateString>Test2</EventDateString>
                    </EventDataContainer>
                    <div>Visit Site</div>
                </OverLayFooterContainer>
            </OverlayContainer>
            <BackgroundImageContainer />
        </CardContainer>
    )
}

export default HackathonCard