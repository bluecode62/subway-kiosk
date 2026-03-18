import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 40px;
`;

const Button = styled.button`
  width: ${(props) => props.width || "300px"};
  height: ${(props) => props.height || "70px"};
  border-radius: 50px;
  border: none;
  background: ${(props) =>
    props.variant === "left" ? "transparent" : "#009223;"};
  color: ${(props) => (props.variant === "left" ? "#292929" : "#fff")};
  border: ${(props) =>
    props.variant === "left" ? "2px solid #009223" : "none"};
  font-size: ${(props) => props.fontSize || "30px"};
  font-weight: 600;
  cursor: pointer;
`;

export default function OrderButtons({
  leftText,
  rightText,
  onLeftClick,
  onRightClick,
  disabledRight,
  width,
  height,
  fontSize,
  single = false,
}) {
  return (
    <Wrapper>
      <Button
        onClick={onLeftClick}
        variant="left"
        width={width}
        height={height}
        fontSize={fontSize}
      >
        {leftText}
      </Button>

      {!single && (
        <Button
          onClick={onRightClick}
          disabled={disabledRight}
          width={width}
          height={height}
          fontSize={fontSize}
        >
          {rightText}
        </Button>
      )}
    </Wrapper>
  );
}
