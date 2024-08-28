import React from 'react';
import styled from 'styled-components';
import { resourceCategoryMapper } from '../utils/ResourceUtils';

const FilterTabsContainer = styled.div`
  flex-grow: 1;
  display: flex;
`;

const FilterTab = styled.button`
  flex-grow: 1;
  background: none;
  border: none;
  color: #e2d6ff;
  text-transform: uppercase;
  padding: 16px 20px;
  font-weight: bold;
  font-size: 21px;
  border-bottom: 3px solid ${(p) => (p.active ? '#25FFAE' : '#25FFAE30')};
  transition: border 150ms ease-in-out;

  &:hover {
    cursor: pointer;
    border-bottom: 3px solid #25ffae;
  }
`;

export default function ResourceFilterTabs({ items, filterStates, onChange }) {
  const setActiveFilter = (filterName) => {
    onChange({
      ...Object.keys(filterStates).reduce((filterKey) => ({
        [filterKey]: false,
      })),
      [filterName]: true,
    });
  };

  const setAllActive = () => {
    onChange(
      Object.keys(filterStates).reduce((filterKey) => ({
        [filterKey]: true,
      }))
    );
  };

  return (
    <FilterTabsContainer>
      <FilterTab
        active={Object.values(filterStates).every(Boolean)}
        onClick={setAllActive}
      >
        View All
      </FilterTab>
      {Object.keys(items).map((item, index) => {
        return (
          <FilterTab
            key={item + index}
            active={
              filterStates[resourceCategoryMapper[item]] &&
              !Object.values(filterStates).every(Boolean)
            }
            onClick={() => setActiveFilter(resourceCategoryMapper[item])}
          >
            {resourceCategoryMapper[item]}
          </FilterTab>
        );
      })}
    </FilterTabsContainer>
  );
}
