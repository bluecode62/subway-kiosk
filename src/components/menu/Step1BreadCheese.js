import React from "react";
import styled from "styled-components";
import { setBread, setCheese, setSize } from "../../store/orderSlice";
import { useDispatch, useSelector } from "react-redux";
import { bread, cheese } from "../../data/toppingData";
import ToppingItem from "../common/ToppingItem";

const Section = styled.div`
  margin-bottom: 40px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 220px);
  justify-content: center;
  gap: 10px;
`;

const SizeSelector = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
`;

const SizeButton = styled.button`
  width: 200px;
  height: 50px;
  border-radius: 30px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => (props.active ? "none" : "2px solid #666666")};
  background: ${(props) => (props.active ? "#E95B1D" : "#fff")};
  color: ${(props) => (props.active ? "#fff" : "#666666")};
`;

export default function Step1BreadCheese() {
  const dispatch = useDispatch();

  const selectedBread = useSelector((state) => state.order.bread);
  const selectedCheese = useSelector((state) => state.order.cheese);
  const size = useSelector((state) => state.order.size);

  return (
    <>
      <Section>
        <SizeSelector>
          <SizeButton
            active={size === "15"}
            onClick={() => dispatch(setSize("15"))}
          >
            15cm
          </SizeButton>
          <SizeButton
            active={size === "30"}
            onClick={() => dispatch(setSize("30"))}
          >
            30cm
          </SizeButton>
        </SizeSelector>

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
