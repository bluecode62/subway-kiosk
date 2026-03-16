import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { saveSandwich, toggleSauce } from "../../store/orderSlice";
import { sauce } from "../../data/toppingData";
import ToppingItem from "../common/ToppingItem";

const Section = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 200px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 220px);
  gap: 20px;
`;

const CartSection = styled.div`
  margin-top: 40px;
  width: 100%;
  max-width: 900px;
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  border-bottom: 1px solid #ddd;
`;

export default function Step3Sauce({ onNext }) {
  const dispatch = useDispatch();
  const selectedSauces = useSelector((state) => state.order.sauces);
  const cart = useSelector((state) => state.order.cart);

  const handleNext = () => {
    dispatch(saveSandwich());
    onNext();
  };

  return (
    <>
      <Section>
        <Grid>
          {sauce.map((item) => (
            <ToppingItem
              key={item.id}
              item={item}
              active={selectedSauces.some((v) => v.id === item.id)}
              onClick={() => dispatch(toggleSauce(item))}
            />
          ))}
        </Grid>
      </Section>

      <CartSection>
        <h3>장바구니</h3>
        {cart.map((item, id) => (
          <CartItem key={id}>
            <div>
              <p>빵: {item.bread.name}</p>
              <p>치즈: {item.cheese.name}</p>
              <p>야채: {item.vegetables.map(v => v.name).join(", ")}</p>
              <p>야채: {item.sauce.map(s => s.name).join(", ")}</p>
            </div>
            <div>{item.quantity}개</div>
          </CartItem>
        ))}
      </CartSection>
    </>
  );
}
