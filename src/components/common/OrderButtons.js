import React from 'react'
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 40px;
`;

const Button = styled.button`
  width: 300px;
  height: 70px;
  border-radius: 50px;
  border: none;
  background: #009223;
  color: #fff;
  font-size: 30px;
  font-weight: 600;
  cursor: pointer;
`

export default function OrderButtons({leftText, rightText, onLeftClick, onRightClick}) {
  return (
    <Wrapper>
      <Button onClick={onLeftClick}>{leftText}</Button>
      <Button onClick={onRightClick}>{rightText}</Button>
    </Wrapper>
  )
}
