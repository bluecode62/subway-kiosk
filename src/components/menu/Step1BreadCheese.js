import React from "react";
import styled from "styled-components";
import { setBread, setCheese } from "../../store/orderSlice";
import { useDispatch, useSelector } from "react-redux";
import { bread, cheese } from "../../data/toppingData";
import ToppingItem from "../common/ToppingItem";

const Section = styled.div`
  margin-bottom: 40px;
`;

const Title = styled.h3`
  margin-bottom: 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 220px);
  justify-content: center;
  gap: 20px;
`;

export default function Step1BreadCheese() {
  const dispatch = useDispatch();

  const selectedBread = useSelector((state) => state.order.bread);
  const selectedCheese = useSelector((state) => state.order.cheese);

  return (
    <>
      <Section>
        <Title>빵 선택</Title>

        <Grid>
          {bread.map((item) => (
            <ToppingItem
              key={item.id}
              item={item}
              active={selectedBread?.id === item.id}
              onClick={() => dispatch(setBread(item))}
            />
          ))}
        </Grid>
      </Section>

      <Section>
        <Title>치즈 선택</Title>
        <Grid>
          {cheese.map((item) => (
            <ToppingItem
              key={item.id}
              item={item}
              active={selectedCheese?.id === item.id}
              onClick={() => dispatch(setCheese(item))}
            />
          ))}
        </Grid>
      </Section>
    </>
  );
}
