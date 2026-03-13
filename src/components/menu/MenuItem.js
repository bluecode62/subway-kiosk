import React from "react";
import styled from "styled-components";

const Card = styled.div`
  padding: 10px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.15s;

  &:hover {
    transform: scale(1.05);
  }
`;

const MenuImage = styled.img`
  width: 300px;
  height: 180px;
  margin: 0 auto;
  object-fit: contain;
`;

const MenuName = styled.h3`
  font-size: 22px;
  color: #292929;
`;
const MenuEng = styled.p`
  margin: 2px 0;
  font-size: 20px;
  color: #666666;
`;

const MenuPrice = styled.p`
  font-size: 18px;
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
