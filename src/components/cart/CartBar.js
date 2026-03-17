import React from "react";
import styled from "styled-components";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import OrderButtons from "../common/OrderButtons";

const CartWrapper = styled.div`
  height: 200px;
  border-top: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  padding: 10px;
  background: #e3efe8;
  justify-content: space-between;
`;

const CartTop = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const CartItems = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 10px;
  padding: 10px 30px;
  flex: 1;
  position: relative;
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`;

const LeftArrow = styled(ArrowButton)`
  left: 0;
`;

const RightArrow = styled(ArrowButton)`
  right: 0;
`;

const CartItemBox = styled.div`
  min-width: 150px;
  height: 140px;
  border: 1px solid #ccc;
  border-radius: 10px;
  flex-shrink: 0;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CartSummary = styled.div`
  width: 180px;
  height: 120px;
  line-height: 50px;
  text-align: right;
  font-weight: 700;
  color: #1a7f37;
  user-select: none;
  padding: 0 20px;
  border-left: 1px solid #282828;
`;

export default function CartBar() {
  // const dummyCart = [
  //   { id: 1, name: "에그마요", price: 5900 },
  //   { id: 2, name: "터키 베이컨 아보카도", price: 9600 },
  //   { id: 3, name: "스파이시 쉬림프", price: 9000 },
  // ];
  // const totalPrice = dummyCart.reduce((acc, item) => acc + item.price, 0);
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart) || [];
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  const handleNext = () => {
    if (cart.length === 0) {
      alert("메뉴를 먼저 골라주세요!");
      return;
    }
    navigate("/order");
  };

  const handlePrev = () => {
    navigate("/");
  };

  return (
    <CartWrapper>
      <CartTop>
        <CartItems>
          <LeftArrow>
            <IoIosArrowBack />
          </LeftArrow>
          <h4>장바구니</h4>
          {cart.map((item) => (
            <CartItemBox key={item.id}>
              <div>{item.name}</div>
              <div>{item.price.toLocaleString("ko-KR")}</div>
            </CartItemBox>
          ))}
          <RightArrow>
            <IoIosArrowForward />
          </RightArrow>
        </CartItems>

        <CartSummary>
          <p>총 주문금액: </p>
          <p>₩{totalPrice.toLocaleString("ko-KR")}</p>
        </CartSummary>
      </CartTop>
      <OrderButtons
        leftText="이전"
        rightText="다음"
        onLeftClick={handlePrev}
        onRightClick={handleNext}
        width="180px"
        height="50px"
        fontSize="22px"
        disabledRight={false}
      />
    </CartWrapper>
  );
}
