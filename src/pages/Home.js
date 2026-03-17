import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaBreadSlice, FaCheese } from "react-icons/fa";
import { GiSandwich, GiBroccoli, GiSaltShaker, GiTomato } from "react-icons/gi";
import { GiCookie } from "react-icons/gi";
import { MdLocalDrink } from "react-icons/md";
import OrderButtons from "../components/common/OrderButtons";
import { useDispatch } from "react-redux";
import { setOrderType } from "../store/orderSlice";

const Wrapper = styled.div`
  width: 100%;
  min-width: 800px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 95%;
  max-width: 1200px;
  height: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 40px;
  background: #e3efe8;
  box-sizing: border-box;
`;

const Header = styled.div`
  margin-bottom: 20px;
`;

const Logo = styled.img`
  width: 300px;
`;

const MenuGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(400px, 1fr));
  justify-content: center;
  gap: 50px;
`;

const IconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const MenuCard = styled.div`
  height: 280px;
  background: #fff;
  color: #292929;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  h2 {
    font-size: 25px;
  }

  p {
    font-size: 18px;
    font-weight: 500;
  }
`;

const OrderButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px 0;
`;

export default function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Container>
        <Header>
          <Logo src="/images/logo_big.png" />
        </Header>
        <MenuGrid>
          <MenuCard>
            <IconBox>
              <GiSandwich size={50} color="#d4550b" />
              <GiBroccoli size={50} color="#439943" />
            </IconBox>
            <h2>메뉴 선택</h2>
            <p>샌드위치 or 샐러드 선택</p>
          </MenuCard>

          <MenuCard>
            <IconBox>
              <FaBreadSlice size={50} color="#ffc04b" />
              <FaCheese size={50} color="#FFD700" />
            </IconBox>
            <h2>빵, 치즈 선택</h2>
            <p>원하는 빵, 치즈 선택</p>
          </MenuCard>

          <MenuCard>
            <IconBox>
              <GiTomato size={50} color="#cd3232" />
              <GiSaltShaker size={50} color="#707070" />
            </IconBox>
            <h2>야채, 소스 선택</h2>
            <p>원하는 스타일로 토핑 선택</p>
          </MenuCard>

          <MenuCard>
            <IconBox>
              <GiCookie size={50} color="#8B4513" />
              <MdLocalDrink size={50} color="#008ada" />
            </IconBox>
            <h2>사이드, 음료 선택</h2>
            <p>추가 메뉴 선택</p>
          </MenuCard>
        </MenuGrid>

        <OrderButtonsWrapper>
          <OrderButtons
            leftText="매장 식사"
            onLeftClick={() => {
              dispatch(setOrderType("store"));
              navigate("/menu");
            }}
            rightText="포장 주문"
            onRightClick={() => {
              dispatch(setOrderType("takeout"));
              navigate("/menu");
            }}
          />
        </OrderButtonsWrapper>
      </Container>
    </Wrapper>
  );
}
