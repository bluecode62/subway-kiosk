import React from "react";
import { useDispatch } from "react-redux";
import { setCategory } from "../../store/orderSlice";
import styled from "styled-components";

const Button = styled.button`
  width: 260px;
  height: 90px;
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  font-size: 25px;
  font-weight: bold;
  cursor: pointer;
  border-top: 1px solid #fff;
  border-right: ${(props) => (props.active ? "3px solid #FFC300" : " ")};
  background: ${(props) => (props.active ? "#62CE08" : "#009223")};
  color: #fff;

  transition: 0.2s;

  img {
    width: 120px;
  }

  &:hover {
    background: #2bd100;
  }
`;

export default function CategoryButton({ item, active }) {
  const dispatch = useDispatch();

  return (
    <Button active={active} onClick={() => dispatch(setCategory(item.id))}>
      <span>{item.name}</span>
      <img src={item.icon} alt={item.name} />
    </Button>
  );
}
