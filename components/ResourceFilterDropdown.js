import React, { useEffect, useRef, useState } from 'react';
import ResourceFilterTriangle from './ResourceFilterTriangle';
import styled from 'styled-components';
import { resourceCategoryMapper } from '../utils/ResourceUtils';

const FilterContainer = styled.div`
  position: relative;
`;

const Header = styled.span`
  font-weight: 700;
`;

const DropdownTrigger = styled.button`
  flex-grow: 1;
  display: flex;
  align-items: center;
  gap: 8px;
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

  ${(p) => p.theme.mediaQueries.mobile} {
    padding: 4px 12px;
    font-size: 12px;
    border-bottom: none;

    &:hover {
      border-bottom: none;
    }
  }
`;

const FilterOptionsDropdown = styled.div`
  display: ${(p) => (!p.displayFilter ? 'none' : 'flex')};
  width: 100%;
  position: absolute;
  z-index: 10;
  flex-direction: column;
  background: #433860;
  border-radius: 0 0 10px 10px;
`;

const FilterOption = styled.button`
  text-align: center;
  color: white;
  font-size: 20px;
  padding: 12px 12px;
  background: ${(p) => (p.active ? '#ffffff6b' : 'none')};
  border: none;
  transition: background-color 150ms ease-in-out;
  border-radius: ${(p) => (p.lastChild ? '0 0 10px 10px' : '0')};

  &:hover {
    background: #ffffff6b;
  }

  ${(p) => p.theme.mediaQueries.mobile} {
    font-size: 12px;
  }
`;

export default function ResourceFilterDropdown({
  header,
  items,
  filterStates,
  onChange,
}) {
  /** @type {React.MutableRefObject<HTMLDivElement|null>} */
  const filterContainerRef = useRef(null);
  const [displayDropdown, setDisplayDropdown] = useState(false);

  const setActiveFilter = (filterName) => {
    onChange({
      ...Object.keys(filterStates).reduce((filterKey) => ({
        [filterKey]: false,
      })),
      [filterName]: !filterStates[filterName],
    });
    setDisplayDropdown(false);
  };

  useEffect(() => {
    function clickHandler(ev) {
      ev.stopPropagation();
      if (
        filterContainerRef.current &&
        !filterContainerRef.current.contains(ev.target)
      ) {
        setDisplayDropdown(false);
      }
    }

    document.addEventListener('click', clickHandler, false);
    return () => document.removeEventListener('click', clickHandler, false);
  }, []);
  return (
    <FilterContainer ref={filterContainerRef}>
      <DropdownTrigger onClick={() => setDisplayDropdown((prev) => !prev)}>
        <Header>{header}</Header>
        <ResourceFilterTriangle displayFilter={displayDropdown} />
      </DropdownTrigger>
      <FilterOptionsDropdown displayFilter={displayDropdown}>
        {Object.keys(items).map((item, index) => {
          return (
            <FilterOption
              key={item + index}
              lastChild={index == Object.keys(items).length - 1}
              onClick={() => setActiveFilter(resourceCategoryMapper[item])}
              active={filterStates[resourceCategoryMapper[item]]}
            >
              {items[item]}
            </FilterOption>
          );
        })}
      </FilterOptionsDropdown>
    </FilterContainer>
  );
}
