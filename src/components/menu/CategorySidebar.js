import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { categories } from "../../data/categoryData";
import CategoryButton from "./CategoryButton";

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  background: #e3efe8;
`;

export default function CategorySidebar() {
  const category = useSelector((state) => state.order.category);

  return (
    <Sidebar>
      {categories.map((item) => (
        <CategoryButton
          key={item.id}
          item={item}
          active={category === item.id}
        />
      ))}
    </Sidebar>
  );
}
