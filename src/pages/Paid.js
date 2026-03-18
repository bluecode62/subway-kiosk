import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetOrder } from "../store/orderSlice";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px);}
  to {opacity: 1; transform: translateY(0);}
`;

const Wrapper = styled.div`
  width: 1200px;
  height: 1000px;
  background: #e95b1d;
  position: relative;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SandwichHalf = styled.img`
  width: 100%;
  position: absolute;
  bottom: 0;
`;

const TextContainer = styled.div`
  margin-top: 300px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FadeText = styled.p`
  font-size: 30px;
  color: #fff;
  font-weight: 700;
  text-align: center;
  opacity: 0;
  animation: ${fadeIn} 0.3s forwards;
  animation-delay: ${(props) => props.delay}s;
`;

const CompleteButton = styled.button`
  margin-top: 40px;
  padding: 15px 50px;
  font-size: 25px;
  font-weight: 700;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  background: #009223;
  color: #fff;
  transition: 0.3s;

  &:hover {
    background: #ffe5db;
  }
`;

export default function Paid() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showTexts, setShowTexts] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowTexts(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleComplete = () => {
    dispatch(resetOrder());
    navigate("/");
  };

  return (
    <Wrapper>
      <TextContainer>
        {showTexts && (
          <>
            <FadeText>감사합니다!</FadeText>
            <FadeText delay={0.5}>성공적으로 결제완료했습니다!</FadeText>
            <FadeText delay={0.8}>
              카운터에서 주문하신 상품을 픽업해주세요
            </FadeText>
          </>
        )}
        <CompleteButton onClick={handleComplete}>완료</CompleteButton>
      </TextContainer>
      <SandwichHalf src="/images/paid.png" />
    </Wrapper>
  );
}
