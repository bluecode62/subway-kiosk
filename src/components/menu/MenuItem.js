import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 220px;
  min-height: 180px;
  text-align: center;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  transition: transform 0.15s;

  &:hover {
    transform: scale(1.05);
  }
`;

const ImageBox = styled.div`
  width: 220px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;
`;

const MenuImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const MenuName = styled.h3`
  font-size: 16px;
  color: #292929;
`;
const MenuEng = styled.p`
  margin: 2px 0;
  font-size: 14px;
  color: #666666;
`;

const MenuPrice = styled.p`
  font-size: 16px;
  color: #292929;
  font-weight: 600;
`;

export default function MenuItem({ menu, onClick }) {
  return (
    <Card onClick={() => onClick(menu)}>
      <ImageBox>
        <MenuImage src={menu.image} alt={menu.name} />
      </ImageBox>
      <MenuName>{menu.name}</MenuName>
      <MenuEng>{menu.eng}</MenuEng>
      <MenuPrice>{menu.price.toLocaleString()}원</MenuPrice>
    </Card>
  );
}
