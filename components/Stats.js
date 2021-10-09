import React from 'react';
import styled from 'styled-components';
import { LargeTitle, Body } from './Typography';

const HACKATHON_STAT_DIAMOND = 'assets/hackathonsStat.svg';
const EMPTY_DIAMOND = 'assets/emptyDiamond.svg';
const PROJECT_STAT_DIAMOND = 'assets/projectsStat.svg';
const PRIZES_STAT_DIAMOND = 'assets/prizesStat.svg';
const FILLED_DAMOND = 'assets/filledDiamond.svg';
const WORKSHOPS_STAT_DIAMOND = 'assets/workshopsDiamond.svg';
const DONATIONS_STAT_DIAMOND = 'assets/donationsDiamond.svg';

const Container = styled.div`
    display: flex;
`

const DiamondContainer = styled.div`
    position: relative;
    text-align: center;
`

const Image = styled.img`
    display: block;
    margin: auto;
    margin-bottom: 56px;
`

const StatNumberContainer = styled.div`
    position: absolute;
    top: 48%;
    left: 53%;
    transform: translate(-50%, -50%);
`

const StatDescriptionContainer = styled.div`
    position: absolute;
    top: 68%;
    left: 50%;
    transform: translate(-50%, -50%);
`

function Diamond({src, number, description}) {
    return (
        <DiamondContainer>
            <Image src={src} />
            <StatNumberContainer>
                <LargeTitle withGradient>{number}{number ? '+' : ''}</LargeTitle>
            </StatNumberContainer>
            <StatDescriptionContainer>
                <Body>{description}</Body>
            </StatDescriptionContainer>
        </DiamondContainer>
    )
}

export default function Stats ({numHackathons, numProjects, prizesValue, numWorkshops, donationsValue}) {
    return (
        <Container>
            <div>
                <Diamond src={HACKATHON_STAT_DIAMOND} number={numHackathons} description={'HACKATHONS HOSTED SINCE 2015'} />
            </div>
            <div>
                <Diamond src={EMPTY_DIAMOND} />
                <Diamond src={PROJECT_STAT_DIAMOND} number={numProjects} description={'PROJECTS BUILT'} />
            </div>
            <div>
                <Diamond src={PRIZES_STAT_DIAMOND} number={prizesValue} description={'IN PRIZES AWARDED IN 2021'} />
            </div>
            <div>
                <Diamond src={FILLED_DAMOND} />
                <Diamond src={WORKSHOPS_STAT_DIAMOND} number={numWorkshops} description={'WORKSHOPS ORGANIZED'} />
            </div>
            <div>
                <Diamond src={DONATIONS_STAT_DIAMOND} number={donationsValue} description={'IN DONATIONS TO CHARITY IN 2021'} />
            </div>
        </Container>
    )
}