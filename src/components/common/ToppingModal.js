import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Step1BreadCheese from "../menu/Step1BreadCheese";
import Step2Vegetable from "../menu/Step2Vegetable";
import OrderButtons from "./OrderButtons";

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBox = styled.div`
  width: 90%;
  max-width: 1200px;
  max-height: 98vh;
  background: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 20px;
`;

const StepText = styled.p`
  color: #009223;
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 10px;
`;

const Warning = styled.div`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  background: #fff3cd;
  color: #b45309;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 500;
  animation: fadeIn 0.2s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-5px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  overflow-y: hidden;
`;

export default function ToppingModal({ onCancel, onNext, warning }) {
  const step = useSelector((state) => state.order.step);

  const title =
    step === 1
      ? "STEP1 원하는 빵과 치즈를 선택해주세요!"
      : step === 2
        ? "원하는 야채 토핑을 선택해주세요!"
        : "원하는 소스를 선택해주세요!";

  return (
    <Overlay>
      <ModalBox>
        <StepText>{title}</StepText>

        {warning && <Warning>{warning}</Warning>}
        <Content>
          {step === 1 && <Step1BreadCheese />}
          {step === 2 && <Step2Vegetable />}
          {/* {step === 3 && <Step3Sauce />} */}
        </Content>

        <OrderButtons
          leftText="취소하기"
          rightText="다음"
          onLeftClick={onCancel}
          onRightClick={onNext}
        />
      </ModalBox>
    </Overlay>
  );
}
