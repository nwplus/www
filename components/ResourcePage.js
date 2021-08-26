import { useEffect, useState } from 'react';
import styled from 'styled-components';
import ResourceCard from './ResourceCard';
import Pagination, { getClickedPageIndex } from './Pagination';

const ResourcePageWrapper = styled.div`
  text-align: center;
`;

const ResourcePageContainer = styled.div`
  display: inline-grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 64px;
  row-gap: 56px;
  margin-bottom: 40px;
  ${(p) => p.theme.mediaQueries.mobile} {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    column-gap: 28px;
    row-gap: 24px;
    margin-bottom: 16px;
  }
`;

const RESOURCES_PER_PAGE = 6;

export default function ResourcePage({ resources, startingPageIndex = 0 }) {
  const [currPageIndex, setCurrPageIndex] = useState(startingPageIndex);
  const [currPageResources, setCurrPageResources] = useState([]);

  const TOTAL_RESOURCE_PAGES = resources.length / RESOURCES_PER_PAGE;

  const getCurrPageResources = (resources, currPageIndex) => {
    const currPageResources = [];
    for (let i = currPageIndex; i < RESOURCES_PER_PAGE; i++) {
      const { name, year, image, icon } = resources[i];
      if (!name || !year || !image || !icon) {
        return;
      }
      currPageResources.push(resources[i]);
    }
    return currPageResources;
  };

  useEffect(() => {
    setCurrPageResources(getCurrPageResources(resources, currPageIndex));
  }, [currPageIndex, setCurrPageIndex]);

  const handlePageChange = (nextPageIndex) => {
    if (nextPageIndex === TOTAL_RESOURCE_PAGES || nextPageIndex < 0) {
      return;
    }
    setCurrPageIndex(nextPageIndex);
  };
  return (
    <ResourcePageWrapper>
      <ResourcePageContainer>
        {currPageResources.map((resource, index) => (
          <ResourceCard key={index} {...resource} />
        ))}
      </ResourcePageContainer>
      <Pagination
        count={TOTAL_RESOURCE_PAGES}
        pageIndex={currPageIndex}
        onPageClick={(e) => setCurrPageIndex(getClickedPageIndex(e))}
        onPrevClick={() => handlePageChange(currPageIndex - 1)}
        onNextClick={() => handlePageChange(currPageIndex + 1)}
      />
    </ResourcePageWrapper>
  );
}
