import React from "react";
import MenuHeader from "../components/Header/MenuHeader";
import CategorySidebar from "../components/menu/CategorySidebar";
import styled from "styled-components";
import MenuList from "../components/menu/MenuList";

const Wrapper = styled.div`
  width: 100%;
  hieght: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 1200px;
  height: 900px;
  display: flex;
  flex-direction: column;
`;

const Layout = styled.div`
  display: flex;
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
      </Container>
    </Wrapper>
  );
}
