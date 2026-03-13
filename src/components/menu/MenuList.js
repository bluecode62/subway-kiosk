import React from 'react'
import { useSelector } from 'react-redux';
import styled from "styled-components"
import { menuData } from '../../data/menuData';
import MenuItem from './MenuItem';

const ListContainer = styled.div`
  flex: 1;
  padding: 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

export default function MenuList() {

  const category = useSelector(state => state.order.category)

  const menus = menuData[category] || []

  return (
    <ListContainer>
      <Grid>
        {menus.map(menu => (
          <MenuItem key={menu.id} menu={menu} />
        ))}
      </Grid>
    </ListContainer>
  )
}
