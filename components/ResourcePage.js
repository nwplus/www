import { useEffect, useState } from 'react';
import styled from 'styled-components';
import ResourceCard from './ResourceCard';
import Pagination, { getClickedPageIndex } from './Pagination';
import { Body } from './Typography';

const ResourcePageWrapper = styled.div`
  width: 100%;
  text-align: center;
`;

const ResourcePageContainer = styled.div`
  width: 100%;
  display: inline-grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 64px;
  row-gap: 56px;
  margin-bottom: 40px;
  ${(p) => p.theme.mediaQueries.mobile} {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-template-rows: 1fr 1fr 1fr;
    column-gap: 28px;
    row-gap: 24px;
    margin-bottom: 16px;
  }
`;

export default function ResourcePage({ resources, startingPageIndex = 0 }) {
  const [currPageIndex, setCurrPageIndex] = useState(startingPageIndex);
  const [currPageResources, setCurrPageResources] = useState([]);
  const [width, setWidth] = useState(0);
  const mobileBreakpoint = 1024;

  useEffect(() => {
    function onResize() {
      setWidth(window.innerWidth);
    }
    onResize();
    window.addEventListener('resize', onResize);

    return () => window.removeEventListener('resize', onResize);
  }, []);

  const RESOURCES_PER_PAGE = width <= mobileBreakpoint ? 3 : 6;
  const TOTAL_RESOURCE_PAGES = Math.ceil(resources.length / RESOURCES_PER_PAGE);

  const getCurrPageResources = (resources, currPageIndex) => {
    const currPageResources = [];
    for (
      let i = currPageIndex * RESOURCES_PER_PAGE;
      i < currPageIndex * RESOURCES_PER_PAGE + RESOURCES_PER_PAGE &&
      i < resources.length;
      i++
    ) {
      const { name, year, image, type } = resources[i];
      if (!name || !year || !image || !type) {
        return;
      }
      currPageResources.push(resources[i]);
    }
    return currPageResources;
  };

  useEffect(() => {
    setCurrPageResources(getCurrPageResources(resources, currPageIndex));
  }, [currPageIndex, setCurrPageIndex, resources, RESOURCES_PER_PAGE]);

  const handlePageChange = (nextPageIndex) => {
    if (nextPageIndex === TOTAL_RESOURCE_PAGES || nextPageIndex < 0) {
      return;
    }
    setCurrPageIndex(nextPageIndex);
  };
  return (
    <ResourcePageWrapper>
      {currPageResources.length == 0 ? (
        <Body>We couldn&apos;t find any resources here :(</Body>
      ) : (
        <>
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
        </>
      )}
    </ResourcePageWrapper>
  );
}
