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
    background: linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url(https://pbs.twimg.com/media/Ey2uakkW8AIh4hd.png) center;
    background-size: cover;
    width: 100%;
    height: 100%;

    ${CardContainer}:hover & {
        background: url(https://pbs.twimg.com/media/Ey2uakkW8AIh4hd.png) center;
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
`

const EventDataContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

const HackathonCard = () => {
    return (
        <CardContainer>
            <OverlayContainer>
                <OverLayFooterContainer>
                    <EventDataContainer>
                        <div>Test1</div>
                        <div>Test2</div>
                    </EventDataContainer>
                </OverLayFooterContainer>
            </OverlayContainer>
            <BackgroundImageContainer />
        </CardContainer>
    )
}

export default HackathonCard