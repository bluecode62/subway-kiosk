import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { menuData } from "../../data/menuData";
import MenuItem from "./MenuItem";

const ListContainer = styled.div`
  flex: 1;
  padding: 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

const ButtonArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
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
  const category = useSelector((state) => state.order.category);
  const menus = menuData[category] || [];

  const [currentPage, setCurrentPage] = useState(0);

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

  return (
    <ListContainer>
      <Grid>
        {currentMenus.map((menu) => (
          <MenuItem key={menu.id} menu={menu} />
        ))}
      </Grid>

      <ButtonArea>
        <NavButton onClick={prevPage} disabled={currentPage === 0}>
          <FaChevronLeft />
          이전
        </NavButton>

        <IndicatorArea>
          {Array.from({ length: totalPages }).map((_, index) => (
            <Dot key={index} active={index === currentPage} onClick={() => setCurrentPage(index)}/>
          ))}
        </IndicatorArea>

        <NavButton onClick={nextPage} disabled={currentPage === totalPages - 1}>
          다음
          <FaChevronRight />
        </NavButton>
      </ButtonArea>
    </ListContainer>
  );
}
