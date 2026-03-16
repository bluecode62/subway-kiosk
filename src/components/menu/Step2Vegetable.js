import React from "react";
import styled from "styled-components";
import { vegetables } from "../../data/toppingData";
import ToppingItem from "../common/ToppingItem";
import { toggleVegetable } from "../../store/orderSlice";
import { useDispatch, useSelector } from "react-redux";

const Section = styled.div`
  width: 100%;
  max-width: 900px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 220px);
  gap: 20px;
`;

export default function Step2Vegetable() {
  const dispatch = useDispatch();
  const selectedVegetables = useSelector((state) => state.order.vegetables);

  return (
    <Section>
      <Grid>
        {vegetables.map((item) => (
          <ToppingItem
            key={item.id}
            item={item}
            active={selectedVegetables.some((v) => v.id === item.id)}
            onClick={() => dispatch(toggleVegetable(item))}
          />
        ))}
      </Grid>
    </Section>
  );
}
