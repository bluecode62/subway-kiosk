import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { toggleSauce } from "../../store/orderSlice";
import { sauce } from "../../data/toppingData";
import ToppingItem from "../common/ToppingItem";

const Section = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  justify-content: center;
`;


export default function Step3Sauce() {
  const dispatch = useDispatch();
  const selectedSauces = useSelector((state) => state.order.sauce);

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
    </>
  );
}
