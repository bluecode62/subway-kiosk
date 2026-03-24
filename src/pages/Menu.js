import React from "react";
import MenuHeader from "../components/Header/MenuHeader";
import CategorySidebar from "../components/menu/CategorySidebar";
import styled from "styled-components";
import MenuList from "../components/menu/MenuList";
import CartBar from "../components/cart/CartBar";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Layout = styled.div`
  display: flex;
  flex: 1;
  min-height: 0;
`;

export default function Menu() {
  return (
    <Wrapper>
      <Container>
        <MenuHeader />
        <Layout>
          <CategorySidebar />
          <MenuList />
        </Layout>
        <CartBar />
      </Container>
    </Wrapper>
  );
}
