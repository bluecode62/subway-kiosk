import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setOrderType } from "../../store/orderSlice";

const HeaderWrapper = styled.div`
  width: 100%;
  background: #e3efe8;
`;

const TopArea = styled.div`
  display: flex;
`;

const RightBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 20px;
  flex: 1;
  border-bottom: 1px solid #BBBBBB;
`;

const LogoBox = styled.div`
  width: 320px;
  height: 200px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  width: 220px;
`;

const OrderTypeBox = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

const OrderButton = styled.button`
  padding: 20px 30px;
  font-size: 18px;
  font-weight: 600;
  border: none;
  cursor: pointer;

  background: ${(props) => (props.active ? "#FFCE32" : "#fff")};

  color: ${(props) => (props.active ? "#006633" : "#292929")};

  transition: 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;

const MenuTitle = styled.h2`
  margin-top: 40px;
  font-size: 32px;
  font-weight: bold;
  color: #292929;
`;

export default function MenuHeader() {
  const dispatch = useDispatch();

  const orderType = useSelector((state) => state.order.orderType);
  const category = useSelector((state) => state.order.category);

  const categoryTitle = {
    sandwich: "샌드위치",
    salad: "샐러드",
    side: "사이드",
    drink: "음료",
  };

  return (
    <HeaderWrapper>
      <TopArea>
        <LogoBox>
          <Logo src="/images/logo_header.png" />
        </LogoBox>

        <RightBox>
          <OrderTypeBox>
            <OrderButton
              active={orderType === "store"}
              onClick={() => dispatch(setOrderType("store"))}
            >
              매장 식사
            </OrderButton>
            <OrderButton
              active={orderType === "takeout"}
              onClick={() => dispatch(setOrderType("takeout"))}
            >
              포장 주문
            </OrderButton>
          </OrderTypeBox>

          <MenuTitle>{categoryTitle[category]}</MenuTitle>
        </RightBox>
      </TopArea>
    </HeaderWrapper>
  );
}
