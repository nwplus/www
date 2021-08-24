import React, { useState } from 'react'
import styled from 'styled-components';
import { FILTER_TYPE, FILTER_EVENT, FILTER_YEAR, ResourceType, ResourceEvent, ResourceYear, MOCK_RESOURCES, MOCK_RESOURCES_DATA } from '../utils/ResourceUtils';
import ResourceFilterCard from './ResourceFilterCard';
import ResourceCard from './ResourceCard';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
`;

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
  console.log('typeFilters: ', typeFilters)
  console.log('eventFilters: ', eventFilters)
  console.log('yearFilters: ', yearFilters)
  return (
    <Container>
      <ResourceFilterCard header={FILTER_TYPE} 
        items={ResourceType} 
        filterStates={typeFilters} 
        onChange={setTypeFilters} 
      />
      <ResourceFilterCard 
        header={FILTER_EVENT} 
        items={ResourceEvent} 
        filterStates={eventFilters} 
        onChange={setEventFilters} 
      />
      <ResourceFilterCard 
        header={FILTER_YEAR} 
        items={ResourceYear} 
        filterStates={yearFilters} 
        onChange={setYearFilters} 
      />
      {MOCK_RESOURCES_DATA.filter(resource => {
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

        // if (typeFilters.videos || 
        //     typeFilters.github || 
        //     typeFilters.articles || 
        //     typeFilters.slides || 
        //     eventFilters.hackcamp || 
        //     eventFilters.nwhacks || 
        //     eventFilters.cmd_f) {
        //   if (typeFilters.videos) {
        //     videosFilter = resource.type === ResourceType.VIDEO
        //   }
  
        //   if (typeFilters.github) {
        //     githubFilter = resource.type === ResourceType.GITHUB
        //   }
  
        //   if (typeFilters.articles) {
        //     articlesFilter = resource.type === ResourceType.ARTICLES
        //   }
  
        //   if (typeFilters.slides) {
        //     slidesFilter = resource.type === ResourceType.SLIDES
        //   }

        //   if (eventFilters.hackcamp) {
        //     hackcampFilter = resource.event === ResourceEvent.HACK_CAMP
        //   }

        //   if (eventFilters.nwhacks) {
        //     nwhacksFilter = resource.event === ResourceEvent.NW_HACKS
        //   }

        //   if (eventFilters.cmd_f) {
        //     cmdfFilter = resource.event === ResourceEvent.CMD_F
        //   }

        //   return (videosFilter || githubFilter || articlesFilter || slidesFilter);          
        // }        

        // else return true
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
      }).map(data => (
        <ResourceCard name={data.name} 
          event={data.event} 
          year={data.year} 
          image={data.image} 
          badge={data.badge} 
          type={data.type} 
          link={data.link} 
        />
      ))}
    </Container>
  )
}
