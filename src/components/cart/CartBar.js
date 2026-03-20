import React, { useRef, useState } from "react";
import styled from "styled-components";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import OrderButtons from "../common/OrderButtons";
import { decreaseQuantity, increaseQuantity } from "../../store/orderSlice";

const CartWrapper = styled.div`
  height: 250px;
  border-top: 1px solid #ddd;
  background: #e3efe8;
  overflow: hidden;
`;

const CartTitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const CartTitle = styled.h4`
  margin: 5px 20px;
  font-size: 14px;
  font-weight: 700;
  text-align: left;
`;

const CartCount = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background: #1a7f37;
  color: #fff;
  font-weight: 700;
  font-size: 15px;
  border-radius: 5px;
`;

const CartMain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CartItemsWrapper = styled.div`
  display: flex;
  flex: 1;  
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const CartItems = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 5px;
  padding: 10px 40px;
  position: relative;
  width: calc(200px * 5 + 14px * 3);
  flex-shrink: 0;
  cursor: grab;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }

  &:active {
    cursor: grabbing;
  }
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 5;
  background: none;
  border: none;
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
`;

const LeftArrow = styled(ArrowButton)`
  left: 0;
`;

const RightArrow = styled(ArrowButton)`
  right: 0;
`;

const CartItemBox = styled.div`
  width: 190px;
  height: 120px;
  border: 1px solid #ccc;
  border-radius: 10px;
  flex-shrink: 0;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font-size: 12px;
    font-weight: 600;
  }
`;

const CartItemImage = styled.img`
  width: 120px;
  height: 75px;
  object-fit: cover;
`;

const QuantityWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;

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

const CartButtonsWrapper = styled.div`
`;

const CartSummary = styled.div`
  width: 180px;
  height: 150px;
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
  const scrollRef = useRef(null);
  const cart = useSelector((state) => state.order.cart) || [];
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const onMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = x - startX;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const onMouseUp = () => {
    setIsDragging(false);
  };

  const onMouseLeave = () => {
    setIsDragging(false);
  };

  const ITEM_WIDTH = 200;
  const GAP = 5;
  const MOVE_COUNT = 5;

  const scrollAmount = (ITEM_WIDTH + GAP) * MOVE_COUNT;

  const handleScrollRight = () => {
    scrollRef.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  const handleScrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -scrollAmount,
      behaviro: "smooth",
    });
  };

  const handleNext = () => {
    navigate("/cart");
  };

  const handlePrev = () => {
    navigate("/");
  };

  return (
    <CartWrapper>
      <CartTitleWrapper>
        <CartTitle>장바구니</CartTitle>
        <CartCount>{cart.length}</CartCount>
      </CartTitleWrapper>
      <CartMain>
        <CartItemsWrapper>
          <LeftArrow onClick={handleScrollLeft}>
            <IoIosArrowBack />
          </LeftArrow>
          <CartItems
            ref={scrollRef}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseLeave}
          >
            {cart.map((item, index) => (
              <CartItemBox key={index}>
                <CartItemImage src={item.image} alt={item.name} />
                <p>{item.name}</p>
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
          </CartItems>
          <RightArrow onClick={handleScrollRight}>
            <IoIosArrowForward />
          </RightArrow>
        </CartItemsWrapper>
        <CartSummary>
          <p>총 주문금액: </p>
          <p>₩{totalPrice.toLocaleString("ko-KR")}</p>
        </CartSummary>
      </CartMain>

      <CartButtonsWrapper>
        <OrderButtons
          leftText="이전"
          rightText="다음"
          onLeftClick={handlePrev}
          onRightClick={handleNext}
          width="180px"
          height="50px"
          fontSize="22px"
          disabledRight={cart.length === 0}
        />
      </CartButtonsWrapper>
    </CartWrapper>
  );
}
