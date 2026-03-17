import React from "react";
import styled from "styled-components";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import OrderButtons from "../common/OrderButtons";
import { decreaseQuantity, increaseQuantity } from "../../store/orderSlice";

const CartWrapper = styled.div`
  height: 250px;
  border-top: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  padding: 10px;
  background: #e3efe8;
  justify-content: space-between;
`;
const CartTitle = styled.h4`
  margin: 0 10px;
  font-size: 18px;
  font-weight: 700;
  text-align: left;
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
  padding: 10px 40px;
  flex: 1;
  max-width: 100%;
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

const CartItemImage = styled.img`
  width: 150px;
  height: 80px;
  object-fit: cover;
`;

const QuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 5px;

  button {
    width: 20px;
    height: 20px;
    border: 1px solid #ccc;
    border-radius: 50%;
    background: #fff;
    cursor: pointer;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background: #e3e3e3;
    }
  }

  span {
    min-width: 20px;
    text-align: center;
    font-weight: 600;
    font-size: 14px;
  }
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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.order.cart) || [];
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

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
      <CartTitle>장바구니</CartTitle>
      <CartTop>
        <CartItems>
          <LeftArrow>
            <IoIosArrowBack />
          </LeftArrow>

          {cart.map((item, index) => (
            <CartItemBox key={index}>
              <CartItemImage src={item.image} alt={item.name} />
              <QuantityWrapper>
                <button onClick={() => dispatch(decreaseQuantity(index))}>
                  -
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => dispatch(increaseQuantity(index))}>
                  +
                </button>
              </QuantityWrapper>
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
