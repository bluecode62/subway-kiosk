import React from "react";
import styled from "styled-components";

const Card = styled.div`
  text-align: center;
  cursor: pointer;
  transition: transform 0.15s;

  &:hover {
    transform: scale(1.05);
  }
`;

const MenuImage = styled.img`
  width: 220px;
  height: 140px;
  margin: 0 auto;
  object-fit: cover;
`;

const MenuName = styled.h3`
  font-size: 18px;
  color: #292929;
`;
const MenuEng = styled.p`
  margin: 5px 0;
  font-size: 16px;
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
