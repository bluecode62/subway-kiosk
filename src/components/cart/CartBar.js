import React from "react";
import styled from "styled-components";

const CartWrapper = styled.div`
  height: 100px;
  border-top: 1pxx solid #ddd;
  display: flex;
  align-items: center;
  padding: 10px;
  background: #f9f9f9;
`;

const CartItems = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 10px;
  padding: 10px 0;
`;

const CartItemBox = styled.div`
  min-width: 150px;
  height: 100px;
  border: 1px solid #ccc;
  border-radius: 10px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function CartBar({ cart }) {
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <CartWrapper>
      <CartItems>
        {cart.map((item) => (
          <CartItemBox key={item.id}>
            {item.name}
          </CartItemBox>
        ))}
      </CartItems>
      <div>
        총 금액: {totalPrice.toLocaleString("ko-KR")} ₩
      </div>
    </CartWrapper>
  );
}