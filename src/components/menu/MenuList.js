import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { menuData } from "../../data/menuData";
import MenuItem from "./MenuItem";
import ToppingModal from "../common/ToppingModal";
import {
  resetSandwich,
  saveMenuItem,
  saveSandwich,
  setMenu,
  setSide,
  setStep,
} from "../../store/orderSlice";

const ListContainer = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const MenuListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 560px;
`;
const Viewport = styled.div`
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ScrollGrid = styled.div`
  display: flex;
  flex-direction: row;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  width: 100%;
`;

const Page = styled.div`
  flex: 0 0 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  scroll-snap-align: start;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 250px);
  gap: 20px;
  justify-items: center;
`;

const ButtonArea = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  align-items: center;
`;

const NavButton = styled.button`
  border: none;
  background: none;
  font-size: 16px;
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
  width: 15px;
  height: 15px;
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
  const vegetables = useSelector((state) => state.order.vegetables);
  const sauce = useSelector((state) => state.order.sauce);

  const scrollRef = useRef(null);
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
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const onMouseUp = () => {
    setIsDragging(false);

    const width = scrollRef.current.clientWidth;
    const scrollLeft = scrollRef.current.scrollLeft;

    const newPage = Math.round(scrollLeft / width + 0.2);
    setCurrentPage(newPage);
  };
  const onMouseLeave = () => setIsDragging(false);

  const [currentPage, setCurrentPage] = useState(0);

  const [modalOpen, setModalOpen] = useState(false);

  const pageSize = 9;
  const totalPages = Math.ceil(menus.length / pageSize);

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
    dispatch(setMenu(null));
    setCurrentPage(0);
  }, [category, dispatch]);

  const handleMenuClick = (menu) => {
    if (category === "sandwich") {
      dispatch(setMenu(menu));
      setModalOpen(true);
    } else {
      dispatch(saveMenuItem(menu));
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

    if (step === 2) {
      if (!vegetables || vegetables.length === 0) {
        setWarning("야채를 최소 1개 선택해주세요.");
        return;
      }
    }

    if (step === 3) {
      if (!sauce || sauce.length === 0) {
        setWarning("소스를 선택해주세요.");
        return;
      }

      dispatch(saveSandwich());
      setModalOpen(false);
      setWarning("");
      dispatch(setStep(1));
      dispatch(setSide(null));
      return;
    }

    setWarning("");
    dispatch(setStep(step + 1));
  };

  useEffect(() => {
    if (size && bread && cheese) {
      setWarning("");
    }
  }, [size, bread, cheese]);

  useEffect(() => {
    if (scrollRef.current) {
      const width = scrollRef.current.clientWidth;
      scrollRef.current.scrollTo({
        left: width * currentPage,
        behavior: "smooth",
      });
    }
  }, [currentPage]);

  useEffect(() => {
    setCurrentPage(0);
  }, [menus.length]);

  return (
    <ListContainer>
      <MenuListWrapper>
        <Viewport
          ref={scrollRef}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseLeave}
        >
          <ScrollGrid>
            {Array.from({ length: totalPages }).map((_, pageIndex) => {
              const start = pageIndex * pageSize;
              const pageMenus = menus.slice(start, start + pageSize);

              return (
                <Page key={pageIndex}>
                  <Grid>
                    {pageMenus.map((menu) => (
                      <MenuItem
                        key={menu.id}
                        menu={menu}
                        onClick={handleMenuClick}
                      />
                    ))}
                  </Grid>
                </Page>
              );
            })}
          </ScrollGrid>
        </Viewport>
      </MenuListWrapper>

      <ButtonArea>
        <NavButton onClick={prevPage} disabled={currentPage === 0}>
          <FaChevronLeft />
          이전
        </NavButton>

        <IndicatorArea key={category}>
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
