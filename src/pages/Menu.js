import React from "react";
import MenuHeader from "../components/Header/MenuHeader";
import CategorySidebar from "../components/menu/CategorySidebar";
import styled from "styled-components";
import MenuList from "../components/menu/MenuList";

const Layout = styled.div`
  display: flex;
`;

export default function Menu() {
  return (
    <>
      <MenuHeader />
      <Layout>
        <CategorySidebar />
        <MenuList />
      </Layout>
    </>
  );
}
