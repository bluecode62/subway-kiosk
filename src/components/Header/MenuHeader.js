import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { setOrderType } from "../../store/orderSlice";

const HeaderWrapper = styled.div`
  width: 100%;
  background: #e3efe8;
`;

const InlineRow = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  padding: 30px 0;
  width: 100%;
`;

const TopArea = styled.div`
  display: flex;
`;

const RightBox = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.$inline ? "row" : "column")};
  align-items: ${(props) => (props.$inline ? "center" : "flex-start")};
  padding: 0 20px;
  flex: 1;
  border-bottom: 1px solid #bbbbbb;
`;

const LogoBox = styled.div`
  width: 220px;
  height: 110px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Logo = styled.img`
  width: 150px;
`;

const OrderTypeBox = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

const OrderButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
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
  margin: 10px 0;
  font-size: 22px;
  font-weight: bold;
  color: #292929;
`;

export default function MenuHeader({
  title,
  showLogo = true,
  orderTypePosition = "top",
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const orderType = useSelector((state) => state.order.orderType);
  const category = useSelector((state) => state.order.category);

  const categoryTitle = {
    sandwich: "샌드위치",
    salad: "샐러드",
    side: "사이드",
    drink: "음료",
  };

  const displayTitle = title || categoryTitle[category];

  return (
    <HeaderWrapper>
      <TopArea>
        {showLogo && (
          <LogoBox onClick={() => navigate("/")}>
            <Logo src="/images/logo_header.png" />
          </LogoBox>
        )}

        <RightBox $inline={orderTypePosition === "inline"}>
          {orderTypePosition === "inline" ? (
            <InlineRow>
              <MenuTitle>{displayTitle}</MenuTitle>

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
            </InlineRow>
          ) : (
            <>
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
              <MenuTitle>{displayTitle}</MenuTitle>
            </>
          )}
        </RightBox>
      </TopArea>
    </HeaderWrapper>
  );
}
