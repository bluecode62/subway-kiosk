import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { decreaseQuantity, increaseQuantity } from "../store/orderSlice";
import MenuHeader from "../components/Header/MenuHeader";
import OrderButtons from "../components/common/OrderButtons";
import { useNavigate } from "react-router-dom";
import PaymentModal from "../components/cart/PaymentModal";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #cfd8d3;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 1200px;
  height: 1000px;
  background: #e3efe8;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const ListArea = styled.div`
  flex: 1;
  overflow-y: auto;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  padding: 20px;
  border-bottom: 1px solid #bbbbbb;
`;

const Img = styled.img`
  width: 110px;
  margin-right: 20px;
`;

const Info = styled.div`
  flex: 1;
  text-align: left;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
`;
const Options = styled.div`
  font-size: 14px;
  color: #666;
  margin-top: 5px;
  line-height: 1.5;
`;

const Qty = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-weight: 500;

  button {
    width: 30px;
    height: 30px;
    line-height: 30px;
    border: none;
    background: #ffce32;
    border-radius: 5px;
    color: #fff;
    font-size: 30px;
  }
`;

const Price = styled.div`
  width: 120px;
  text-align: right;
  font-weight: bold;
  font-size: 18px;
`;

const SummaryArea = styled.div`
  margin-top: 20px;
  font-size: 18px;
  line-height: 1.8;
  border-top: 1px solid #bbbbbb;
  margin-bottom: 20px;
`;

const Row = styled.div`
  background: #fff;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px;
  color: #292929;
  border-bottom: 1px solid #bbbbbb;
`;

const Label = styled.div`
  font-weight: 500;
  font-size: 14px;
`;
const Value = styled.div`
  font-weight: 700;
  font-size: 18px;
`;

const Footer = styled.div`
  height: 100px;
  display: flex;
  justify-conent: space-between;
  align-items: start;
`;

export default function Cart() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.order.cart);
  const orderType = useSelector((state) => state.order.orderType);
  const [modalOpen, setModalOpen] = useState(false);

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const handlePrev = () => {
    navigate(-1);
  };

  const handlePaymentSelect = (method) => {
    setModalOpen(false);
  };

  return (
    <Wrapper>
      <Container>
        <MenuHeader
          title="장바구니"
          showLogo={false}
          orderTypePosition="inline"
        />

        <Content>
          <ListArea>
            {cart.map((item, index) => {
              const isSandwich = item.bread && item.cheese;

              return (
                <Item key={index}>
                  <Img src={item.image} />

                  <Info>
                    <Title>{item.name}</Title>

                    {isSandwich && (
                      <Options>
                        <div>사이즈: {item.size}</div>
                        <div>빵: {item.bread.name}</div>
                        <div>치즈: {item.cheese.name}</div>
                        <div>
                          야채: {item.vegetables.map((v) => v.name).join(", ")}
                        </div>
                        <div>
                          소스: {item.sauce.map((s) => s.name).join(", ")}
                        </div>
                      </Options>
                    )}
                  </Info>

                  <Qty>
                    <button onClick={() => dispatch(decreaseQuantity(index))}>
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => dispatch(increaseQuantity(index))}>
                      +
                    </button>
                  </Qty>

                  <Price>
                    ₩{(item.price * item.quantity).toLocaleString()}
                  </Price>
                </Item>
              );
            })}
          </ListArea>

          <SummaryArea>
            <Row>
              <Label>주문 형태:</Label>
              <Value>{orderType === "store" ? "매장 식사" : "포장 주문"}</Value>
            </Row>
            <Row>
              <Label>총 개수:</Label>
              <Value>{totalCount}개</Value>
            </Row>
            <Row>
              <Label>총 결제 금액:</Label>
              <Value>₩{totalPrice.toLocaleString()}</Value>
            </Row>
          </SummaryArea>
        </Content>

        <Footer>
          <OrderButtons
            leftText="이전"
            variant="left"
            rightText="결제하기"
            onLeftClick={handlePrev}
            onRightClick={() => setModalOpen(true)}
          />
        </Footer>

        {modalOpen && (
          <PaymentModal
            onCancel={() => setModalOpen(false)}
            onSelect={handlePaymentSelect}
          />
        )}
      </Container>
    </Wrapper>
  );
}
