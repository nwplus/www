import { useEffect, useState } from 'react';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';
import ResourceCard from './ResourceCard';
import Pagination, { getClickedPageIndex } from './Pagination';
import { SCREEN_BREAKPOINTS } from '../pages/_app';
import useWindowDimensions from '../utility/useWindowDimensions';

const ResourcePageWrapper = styled.div`
  margin: 40;
  justify-content: center;
`;

const ResourcePageContainer = styled.div`
  display: inline-grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: ${(p) => (p.mobile ? '1fr 1fr' : '1fr 1fr 1fr')};
  column-gap: ${(p) => (p.mobile ? '16px' : '64px')};
  row-gap: ${(p) => (p.mobile ? '8px' : '56px')};

  ${(p) => p.theme.mediaQueries.mobile} {
    grid-template-columns: 1fr 1fr;
    column-gap: 16px;
    row-gap: 8px;
  }
`;

const RESOURCES_PER_PAGE_MOBILE = 4;
const RESOURCES_PER_PAGE_WEB = 6;

export default function ResourcePage({ resources, startingPageIndex = 0 }) {
  const { width } = useWindowDimensions();
  const TOTAL_RESOURCE_COUNT = resources.length;

  const [resourcesPerPage, setResourcesPerPage] = useState(
    RESOURCES_PER_PAGE_WEB
  );
  const [currPageIndex, setCurrPageIndex] = useState(startingPageIndex);
  const [currPageResources, setCurrPageResources] = useState([]);

  const handleResizeToMobile = (matches) => {
    return matches
      ? setResourcesPerPage(RESOURCES_PER_PAGE_MOBILE)
      : setResourcesPerPage(RESOURCES_PER_PAGE_WEB);
  };

  const getTotalResourcePages = () => TOTAL_RESOURCE_COUNT / resourcesPerPage;

  const [totalResourcePages, setTotalResourcePages] = useState(
    getTotalResourcePages()
  );

  const getCurrPageResources = (resources, currPageIndex) => {
    const currPageResources = [];
    for (let i = currPageIndex; i < resourcesPerPage; i++) {
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
    setTotalResourcePages(getTotalResourcePages());
  }, [
    resourcesPerPage,
    currPageIndex,
    setCurrPageIndex,
    setTotalResourcePages,
  ]);

  const handlePageChange = (nextPageIndex) => {
    if (nextPageIndex === totalResourcePages || nextPageIndex < 0) {
      return;
    }
    setCurrPageIndex(nextPageIndex);
  };
  return (
    <MediaQuery
      minWidth={SCREEN_BREAKPOINTS.mobile}
      onChange={handleResizeToMobile}
    >
      <ResourcePageWrapper>
        <ResourcePageContainer>
          {currPageResources.map((resource, index) => {
            return <ResourceCard key={index} {...resource} />;
          })}
        </ResourcePageContainer>
        <Pagination
          count={totalResourcePages}
          pageIndex={currPageIndex}
          onPageClick={(e) => setCurrPageIndex(getClickedPageIndex(e))}
          onPrevClick={() => handlePageChange(currPageIndex - 1)}
          onNextClick={() => handlePageChange(currPageIndex + 1)}
        />
      </ResourcePageWrapper>
    </MediaQuery>
  );
}
