import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 160px;
  height: 100px;
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
  margin: 0 auto;
  object-fit: cover;
`;

const MenuName = styled.h3`
  font-size: 13px;
  color: #292929;
`;
const MenuEng = styled.p`
  margin: 5px 0;
  font-size: 12px;
  color: #666666;
`;

const MenuPrice = styled.p`
  font-size: 14px;
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
