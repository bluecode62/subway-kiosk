import React from "react";
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBox = styled.div`
  width: 1200px;
  height: 950px;
  background: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 30px;
`;

const Title = styled.h2`
`;

const Content = styled.div`
  flex: 1;
  overflow-y: hidden;
`;

export default function ToppingModal({ title, children }) {
  return (
    <Overlay>
      <ModalBox>
        <Title>{title}</Title>
        <Content>{children}</Content>
      </ModalBox>
    </Overlay>
  );
}
