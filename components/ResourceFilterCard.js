import React, { useState } from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import ResourceFilterChecked from './ResourceFilterChecked';
import ResourceFilterTriangle from './ResourceFilterTriangle';
import ResourceFilterUnchecked from './ResourceFilterUnchecked';
import { FormControlLabel } from '@material-ui/core';
import styled from 'styled-components';
import { resourceCategoryMapper } from '../utils/ResourceUtils';

const FilterContainer = styled.div`
  display: flex; 
  flex-direction: column;
  background-color: #BDBAC3;
  border-radius: 10px;
  padding: 0.8em;
`;

const Header = styled.span`
  font-weight: 700;
  margin-left: 10px; 
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: 130px;

  &:hover {
    cursor: pointer;
  }
`

const FilterOptionContainer = styled.div`
  display: ${p => !p.displayFilter ? 'none' : 'flex'};
  flex-direction: column;
`

export default function ResourceFilterCard({header, items, filterStates, onChange}) {
  const [displayFilter, setDisplayFilter] = useState(true)

  const handleChange = (event) => {
    onChange({ ...filterStates, [event.target.name]: event.target.checked });
  };
  return (
    <FilterContainer>
      <HeaderContainer onClick={() => setDisplayFilter(!displayFilter)}>
        <ResourceFilterTriangle displayFilter={displayFilter} />
        <Header>{header}</Header>
      </HeaderContainer>
      <FilterOptionContainer displayFilter={displayFilter}>
        {Object.keys(items).map((item, index) => {
          return(        
            <FormControlLabel
              key={index}
              control={
                <Checkbox 
                  icon={<ResourceFilterUnchecked />} 
                  checkedIcon={<ResourceFilterChecked />}
                  checked={filterStates[resourceCategoryMapper[item]]} 
                  onChange={handleChange}
                  name={resourceCategoryMapper[item]}
                />}
              label={items[item]}
            />    
          )     
        })}      
      </FilterOptionContainer>
    </FilterContainer>
  )
}
