import React from 'react'
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
`

export default function ResourceFilterCard({header, items, filterStates, onChange}) {
  const handleChange = (event) => {
    onChange({ ...filterStates, [event.target.name]: event.target.checked });
  };
  return (
    <FilterContainer>
      <HeaderContainer>
        <ResourceFilterTriangle />
        <Header>{header}</Header>
      </HeaderContainer>
      {Object.keys(items).map(item => {
        return(        
         <FormControlLabel
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
    </FilterContainer>
  )
}
