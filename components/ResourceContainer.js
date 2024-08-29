import React, { useState } from 'react';
import styled from 'styled-components';
import {
  FILTER_TYPE,
  FILTER_EVENT,
  FILTER_YEAR,
  ResourceType,
  ResourceEvent,
  ResourceYear,
  RESOURCES,
} from '../utils/ResourceUtils';
import ResourceFilterDropdown from './ResourceFilterDropdown';
import ResourcePage from './ResourcePage';
import { Title1 } from './Typography';
import Button from './Button';
import ResourceFilterTabs from './ResourceFilterTabs';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;
const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 8px;
  gap: 40px;
  ${(p) => p.theme.mediaQueries.mobile} {
    justify-content: center;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  padding: 0 8px;
  ${(p) => p.theme.mediaQueries.mobile} {
    flex-wrap: wrap;
    gap: 12px;
  }
`;

const CallToActionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 20px 16px;
  background-color: white;
  border-radius: 10px;

  font-weight: bold;
  text-align: center;

  ${(p) => p.theme.mediaQueries.mobile} {
    gap: 8px;
  }
`;

const ActionButton = styled(Button)`
  font-size: 24px;
  width: fit-content;
  padding: 12px 20px;
  margin-bottom: 0;
  color: black;

  ${(p) => p.theme.mediaQueries.mobile} {
    font-size: 16px;
  }

  &:hover {
    cursor: pointer;
  }
`;

const RESOURCES_TITLE = 'Resources';
const RESOURCES_BODY =
  'If you are looking to get started in Computer Science, check out our ';
const RESOURCES_LINK = 'https://resources.nwplus.io/';
const RESOURCES_LINK_TEXT = 'Self-Learning Resources Wiki';
const EXCLAMATION_MARK = '!';

export default function ResourceContainer() {
  const [typeFilters, setTypeFilters] = useState({
    videos: true,
    articles: true,
    slides: true,
    github: true,
  });
  const [eventFilters, setEventFilters] = useState({
    hackcamp: false,
    nwhacks: false,
    cmd_f: false,
  });
  const [yearFilters, setYearFilters] = useState({
    2019: false,
    2020: false,
    2021: false,
  });

  const filteredResources = RESOURCES.filter((resource) => {
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

    const isTypeFilterChecked =
      typeFilters.videos ||
      typeFilters.github ||
      typeFilters.articles ||
      typeFilters.slides;
    const isEventFilterChecked =
      eventFilters.hackcamp || eventFilters.nwhacks || eventFilters.cmd_f;
    const isYearFilterChecked =
      yearFilters[2019] || yearFilters[2020] || yearFilters[2021];

    if (typeFilters.videos) {
      videosFilter = resource.type === ResourceType.VIDEO;
    }

    if (typeFilters.github) {
      githubFilter = resource.type === ResourceType.GITHUB;
    }

    if (typeFilters.articles) {
      articlesFilter = resource.type === ResourceType.ARTICLES;
    }

    if (typeFilters.slides) {
      slidesFilter = resource.type === ResourceType.SLIDES;
    }

    if (eventFilters.hackcamp) {
      hackcampFilter = resource.event === ResourceEvent.HACK_CAMP;
    }

    if (eventFilters.nwhacks) {
      nwhacksFilter = resource.event === ResourceEvent.NW_HACKS;
    }

    if (eventFilters.cmd_f) {
      cmdfFilter = resource.event === ResourceEvent.CMD_F;
    }

    if (yearFilters[2019]) {
      filter2019 = resource.year === ResourceYear[2019];
    }

    if (yearFilters[2020]) {
      filter2020 = resource.year === ResourceYear[2020];
    }

    if (yearFilters[2021]) {
      filter2021 = resource.year === ResourceYear[2021];
    }

    isTypeFilter =
      videosFilter || githubFilter || articlesFilter || slidesFilter;
    isEventFilter = hackcampFilter || nwhacksFilter || cmdfFilter;
    isYearFilter = filter2019 || filter2020 || filter2021;

    if (isTypeFilterChecked && isEventFilterChecked && isYearFilterChecked) {
      return isTypeFilter && isEventFilter && isYearFilter;
    } else if (isTypeFilterChecked && isYearFilterChecked) {
      return isTypeFilter && isYearFilter;
    } else if (isTypeFilterChecked && isEventFilterChecked) {
      return isTypeFilter && isEventFilter;
    } else if (isEventFilterChecked && isYearFilterChecked) {
      return isEventFilter && isYearFilter;
    } else if (isTypeFilterChecked) {
      return isTypeFilter;
    } else if (isEventFilterChecked) {
      return isEventFilter;
    } else if (isYearFilterChecked) {
      return isYearFilter;
    } else return true;
  });

  return (
    <Container>
      <HeaderContainer>
        <Title1 withGradient>{RESOURCES_TITLE}</Title1>
      </HeaderContainer>
      <CardContainer>
        <FilterContainer>
          <ResourceFilterTabs
            header={FILTER_TYPE}
            items={ResourceType}
            filterStates={typeFilters}
            onChange={setTypeFilters}
          />
          <ResourceFilterDropdown
            header={FILTER_EVENT}
            items={ResourceEvent}
            filterStates={eventFilters}
            onChange={setEventFilters}
          />
          <ResourceFilterDropdown
            header={FILTER_YEAR}
            items={ResourceYear}
            filterStates={yearFilters}
            onChange={setYearFilters}
          />
        </FilterContainer>
        <ResourcePage resources={filteredResources} />
      </CardContainer>
      <CallToActionContainer>
        {RESOURCES_BODY}
        <ActionButton
          href={RESOURCES_LINK}
          target='_blank'
          rel='noreferrer'
          align='center'
        >
          {RESOURCES_LINK_TEXT}
        </ActionButton>
      </CallToActionContainer>
    </Container>
  );
}
