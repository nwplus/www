import React, { useState } from 'react'
import styled from 'styled-components';
import { FILTER_TYPE, FILTER_EVENT, FILTER_YEAR, ResourceType, ResourceEvent, ResourceYear, MOCK_RESOURCES } from '../utils/ResourceUtils';
import ResourceFilterCard from './ResourceFilterCard';

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
      {MOCK_RESOURCES}
    </Container>
  )
}
