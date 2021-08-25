import React, { useState } from 'react'
import styled from 'styled-components';
import { FILTER_TYPE, FILTER_EVENT, FILTER_YEAR, ResourceType, ResourceEvent, ResourceYear, MOCK_RESOURCES_DATA } from '../utils/ResourceUtils';
import ResourceFilterCard from './ResourceFilterCard';
import ResourcePage from './ResourcePage';
import { Title1, Body, LinkBody } from './Typography';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`

const BodyContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px;
  ${(p) => p.theme.mediaQueries.mobile} {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 40px;
  ${(p) => p.theme.mediaQueries.mobile} {
    display: flex;
    flex-direction: row;
    margin-bottom: 16px;
    justify-content: center;
  }
`

const FilterCardContainer = styled.div`
  margin-bottom: 15px;
  flex-wrap: wrap-content;
  ${(p) => p.theme.mediaQueries.mobile} {
    margin-right: 10px;
    margin-bottom: 0px;
  }
`
const NO_BREAK_SPACE = '\u00a0';
const RESOURCES_TITLE = 'Resources';
const RESOURCES_BODY = 'If you are looking to get started in Computer Science, check out our';
const RESOURCES_LINK = 'https://resources.nwplus.io/';
const RESOURCES_LINK_TEXT = 'Self-Learning Resources Wiki!';

export default function ResourceContainer() {
  const [typeFilters, setTypeFilters] = useState({
    videos: false,
    articles: false,
    slides: false,
    github: false,
  });
  const [eventFilters, setEventFilters] = useState({
    hackcamp: false,
    nwhacks: false,
    cmd_f: false,
  });
  const [yearFilters, setYearFilters] = useState({
    2019: false,
    2020: false,
    2021: false
  });
  
  const filteredResources = MOCK_RESOURCES_DATA.filter(resource => {
    let videosFilter = false;
    let githubFilter = false;
    let articlesFilter = false;
    let slidesFilter = false;
    let isTypeFilter = false;

    let hackcampFilter = false;
    let nwhacksFilter = false;
    let cmdfFilter = false;
    let isEventFilter = false;

    let filter2019 = false;
    let filter2020 = false;
    let filter2021 = false;
    let isYearFilter = false;

    const isTypeFilterChecked = (typeFilters.videos || typeFilters.github || typeFilters.articles || typeFilters.slides);
    const isEventFilterChecked = (eventFilters.hackcamp || eventFilters.nwhacks || eventFilters.cmd_f);
    const isYearFilterChecked = (yearFilters[2019] || yearFilters[2020] || yearFilters[2021]);

    if (typeFilters.videos) {
      videosFilter = resource.type === ResourceType.VIDEO
    }

    if (typeFilters.github) {
      githubFilter = resource.type === ResourceType.GITHUB
    }

    if (typeFilters.articles) {
      articlesFilter = resource.type === ResourceType.ARTICLES
    }

    if (typeFilters.slides) {
      slidesFilter = resource.type === ResourceType.SLIDES
    }

    if (eventFilters.hackcamp) {
      hackcampFilter = resource.event === ResourceEvent.HACK_CAMP
    }

    if (eventFilters.nwhacks) {
      nwhacksFilter = resource.event === ResourceEvent.NW_HACKS
    }

    if (eventFilters.cmd_f) {
      cmdfFilter = resource.event === ResourceEvent.CMD_F
    }

    if (yearFilters[2019]) {
      filter2019 = resource.year === ResourceYear[2019]
    }

    if (yearFilters[2020]) {
      filter2020 = resource.year === ResourceYear[2020]
    }

    if (yearFilters[2021]) {
      filter2021 = resource.year === ResourceYear[2021]
    }

    isTypeFilter = (videosFilter || githubFilter || articlesFilter || slidesFilter);
    isEventFilter = (hackcampFilter || nwhacksFilter || cmdfFilter);
    isYearFilter = (filter2019 || filter2020 || filter2021);
    
    if(isTypeFilterChecked && isEventFilterChecked && isYearFilterChecked) {
      return (isTypeFilter && isEventFilter && isYearFilter);
    }

    else if(isTypeFilterChecked && isYearFilterChecked) {
      return (isTypeFilter && isYearFilter);
    }
    
    else if(isTypeFilterChecked && isEventFilterChecked) {
      return (isTypeFilter && isEventFilter);
    }

    else if(isEventFilterChecked && isYearFilterChecked) {
      return (isEventFilter && isYearFilter);
    }

    else if(isTypeFilterChecked) {
      return isTypeFilter;
    }

    else if(isEventFilterChecked) {
      return isEventFilter;
    }

    else if(isYearFilterChecked) {
      return isYearFilter;
    }
    else return true;
  })

  return (
    <Container>
      <HeaderContainer>
        <Title1 withGradient>{RESOURCES_TITLE}</Title1>
        <BodyContainer>
          <Body>{RESOURCES_BODY}</Body>
          {NO_BREAK_SPACE}
          <a href={RESOURCES_LINK} target='_blank'>
            <LinkBody>{RESOURCES_LINK_TEXT}</LinkBody>
          </a>
        </BodyContainer>
      </HeaderContainer>
      <CardContainer>      
        <FilterContainer>
          <FilterCardContainer>
            <ResourceFilterCard header={FILTER_TYPE} 
              items={ResourceType} 
              filterStates={typeFilters} 
              onChange={setTypeFilters} 
            />
          </FilterCardContainer>
          <FilterCardContainer>
            <ResourceFilterCard 
              header={FILTER_EVENT} 
              items={ResourceEvent} 
              filterStates={eventFilters} 
              onChange={setEventFilters} 
            />
          </FilterCardContainer>
          <FilterCardContainer>
            <ResourceFilterCard 
              header={FILTER_YEAR} 
              items={ResourceYear} 
              filterStates={yearFilters} 
              onChange={setYearFilters} 
            />
          </FilterCardContainer>
        </FilterContainer>
        <ResourcePage resources={filteredResources} />
      </CardContainer>
    </Container>
  )
}
