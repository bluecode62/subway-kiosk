import React from "react";
import styled from "styled-components";
import { MdSmartphone } from "react-icons/md";
import { FaCreditCard } from "react-icons/fa";
import OrderButtons from "../common/OrderButtons";
import { useNavigate } from "react-router-dom";

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

const ModalBox = styled.div`
  width: 90%;
  max-width: 600px;
  background: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 20px;
`;

const Title = styled.h2`
  font-size: 30px;
  font-weight: 700;
  color: #292929;
  text-align: center;
`;

const SmallText = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: #292929;
  text-align: center;
`;

const PaymentOptions = styled.div`
  display: flex;
  gap: 40px;
  margin: 20px 0;
`;

const PaymentButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 120px;
  height: 120px;
  border-radius: 10px;
  border: 2px solid #009223;
  backgrond: #fff;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  color: #292929;
  transition: 0.2s;

  &:hover {
    background: #f0fff5;
  }

  svg {
    width: 50px;
    height: 50px;
  }
`;

export default function PaymentModal({ onCancel, onSelect }) {
  const navigate = useNavigate();
  return (
    <Overlay>
      <ModalBox>
        <Title>걀제방식을 선택해주세요</Title>
        <SmallText>현금결제는 카운터에서만 가능합니다</SmallText>

        <PaymentOptions>
          <PaymentButton onClick={() => navigate("/paid")}>
            <MdSmartphone />
            페이결제
          </PaymentButton>

          <PaymentButton onClick={() => navigate("/paid")}>
            <FaCreditCard />
            카드결제
          </PaymentButton>
        </PaymentOptions>

        <OrderButtons
          leftText="취소하기"
          width="200px"
          height="60px"
          fontSize="22px"
          onLeftClick={onCancel}
          single={true}
        />
      </ModalBox>
    </Overlay>
  );
}
