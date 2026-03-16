import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 220px;
  min-height: 160px;
  text-align: center;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.15s;

  &:hover {
    transform: scale(1.05);
  }
`;

const MenuImage = styled.img`
  width: 220px;
  height: 150px;
  object-fit: cover;
`;

const MenuName = styled.h3`
  font-size: 16px;
  color: #292929;
`;
const MenuEng = styled.p`
  margin: 5px 0;
  font-size: 14px;
  color: #666666;
`;

const MenuPrice = styled.p`
  font-size: 16px;
  color: #292929;
  font-weight: 600;
`;

export default function MenuItem({ menu }) {
  return (
    <Card>
      <MenuImage src={menu.image} alt={menu.name} />
      <MenuName>{menu.name}</MenuName>
      <MenuEng>{menu.eng}</MenuEng>
      <MenuPrice>{menu.price.toLocaleString()}원</MenuPrice>
    </Card>
  );
}
