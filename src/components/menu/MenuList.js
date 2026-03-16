import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { menuData } from "../../data/menuData";
import MenuItem from "./MenuItem";
import ToppingModal from "../common/ToppingModal";
import { resetSandwich, setStep } from "../../store/orderSlice";

const ListContainer = styled.div`
  flex: 1;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

const Grid = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 260px);
  justify-content: center;
  justify-items: center;
  align-items: center;
  align-content: start;
  gap: 20px;
`;

const ButtonArea = styled.div`
  display: flex;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-top: auto;
`;

const NavButton = styled.button`
  border: none;
  background: none;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  color: #666666;

  &:disabled {
    color: #ccc;
    cursor: not-allowed;
  }
`;

const IndicatorArea = styled.div`
  display: flex;
  gap: 50px;
`;

const Dot = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${(props) => (props.active ? "#1c8f2f" : "#ddd")};
  cursor: pointer;
`;



export default function MenuList() {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.order.category);
  const step = useSelector((state) => state.order.step);
  const menus = menuData[category] || [];
  const [warning, setWarning] = useState("");

  const size = useSelector((state) => state.order.size);
  const bread = useSelector((state) => state.order.bread);
  const cheese = useSelector((state) => state.order.cheese);

  const [currentPage, setCurrentPage] = useState(0);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(null);

  const pageSize = 9;
  const totalPages = Math.ceil(menus.length / pageSize);

  const start = currentPage * pageSize;
  const currentMenus = menus.slice(start, start + pageSize);

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    setCurrentPage(0);
  }, [category]);

  const handleMenuClick = (menu) => {
    if (category === "sandwich") {
      setSelectedMenu(menu);
      setModalOpen(true);
    }
  };

  const handleNext = () => {
    if (step === 1) {
      if (!size) {
        setWarning("빵 길이를 선택해주세요.");
        return;
      }

      if (!bread) {
        setWarning("빵을 선택해주세요.");
        return;
      }

      if (!cheese) {
        setWarning("치즈를 선택해주세요.");
        return;
      }
    }

    setWarning("");
    dispatch(setStep(step + 1));
  };

  useEffect(() => {
    if (size && bread && cheese) {
      setWarning("");
    }
  }, [size, bread, cheese]);


  return (
    <ListContainer>
      <Grid>
        {currentMenus.map((menu) => (
          <MenuItem key={menu.id} menu={menu} onClick={handleMenuClick} />
        ))}
      </Grid>

      <ButtonArea>
        <NavButton onClick={prevPage} disabled={currentPage === 0}>
          <FaChevronLeft />
          이전
        </NavButton>

        <IndicatorArea>
          {Array.from({ length: totalPages }).map((_, index) => (
            <Dot
              key={index}
              active={index === currentPage}
              onClick={() => setCurrentPage(index)}
            />
          ))}
        </IndicatorArea>

        <NavButton onClick={nextPage} disabled={currentPage === totalPages - 1}>
          다음
          <FaChevronRight />
        </NavButton>
      </ButtonArea>

      {modalOpen && (
        <ToppingModal
          onCancel={() => {
            dispatch(resetSandwich());
            dispatch(setStep(1));
            setWarning("");
            setModalOpen(false);
          }}
          onNext={handleNext}
          warning={warning}
        ></ToppingModal>
      )}
    </ListContainer>
  );
}
