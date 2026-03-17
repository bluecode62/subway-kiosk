import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 180px;
  height: 155px;
  cursor: pointer;
  border: 1px solid #dddddd;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  transition: transform 0.15s;
  background: ${(props) => (props.active ? "#FFC300" : "#fff")};
  color: ${(props) => (props.active ? "#fff" : "#292929")};

  &:hover {
    transform: scale(1);
  }
`;

const Image = styled.img`
  width: 150px;
  height: 90px;
  object-fit: cover;
`;

const Name = styled.p`
  font-size: 15px;
  font-weight: 500;
  color: ${(props) => (props.active ? "#fff" : "#292929")};
`;

const EngName = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: ${(props) => (props.active ? "#fff" : "#666666")};
`;

export default function ToppingItem({ item, onClick, active }) {
  return (
    <div>
      <Card active={active} onClick={() => onClick(item)}>
        <Image src={item.image} alt={item.name} />
        <Name active={active}>{item.name}</Name>
        <EngName active={active}>{item.eng}</EngName>
      </Card>
    </div>
  );
}
