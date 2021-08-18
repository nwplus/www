import React from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxOutlineBlankOutlinedIcon from '@material-ui/icons/CheckBoxOutlineBlankOutlined';
import ResourceFilterChecked from './ResourceFilterChecked';
import ResourceFilterTriangle from './ResourceFilterTriangle';
import ResourceFilterUnchecked from './ResourceFilterUnchecked';
import { FormControlLabel } from '@material-ui/core';
import styled from 'styled-components';

const FilterContainer = styled.div`
  display: flex; 
  flex-direction: column;
  background-color: #BDBAC3;
  border-radius: 10px;
  padding: 20px;
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

export default function ResourceFilterCard({header, items}) {
  return (
    <FilterContainer>
      <HeaderContainer>
        <ResourceFilterTriangle />
        <Header>{header}</Header>
      </HeaderContainer>
      {items.map(item => (
         <FormControlLabel
         control={<Checkbox 
          icon={<ResourceFilterUnchecked />} 
          checkedIcon={<ResourceFilterChecked />} />}
         label={item}
         />
      ))}      
      {/* <FormControlLabel
        control={<Checkbox icon={<ResourceFilterUnchecked />} checkedIcon={<ResourceFilterChecked />} />}
        label="Videos"
        />
      <FormControlLabel
        control={<Checkbox icon={<ResourceFilterUnchecked />} checkedIcon={<ResourceFilterChecked />} />}
        label="Articles"
        />
        <FormControlLabel
        control={<Checkbox icon={<ResourceFilterUnchecked />} checkedIcon={<ResourceFilterChecked />} />}
        label="PPT Slides"
        />
        <FormControlLabel
        control={<Checkbox icon={<ResourceFilterUnchecked />} checkedIcon={<ResourceFilterChecked />} />}
        label="GitHub"
        /> */}
    </FilterContainer>
  )
}
