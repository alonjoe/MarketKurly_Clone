import React from "react";
import styled from "styled-components";

const CountBtn = (props) => {

  const {
    _onClick,
    __onClick,
    children,
    color,
    bg,
    wrap,
    flexGrow,
    width,
    imgUrl,
    icon,
    height,
    margin,
    iconOutline,
    borderRadius,
    justify,
    sub,
    minus,
    plus,
    input,
    value,
  } = props;

  const styles = {
    bg: bg,
    color: color,
    width: width,
    flexGrow: flexGrow,
    imgUrl: imgUrl,
    icon: icon,
    height: height,
    margin: margin,
    borderRadius: borderRadius,
    justify: justify,
  };

  if (minus) {
    return (
      <MinusButton {...styles} onClick={_onClick}>
        {children}
        하이
      </MinusButton>
    )
  }

  if (input) {
    return (
      <Input {...styles} type="number" readOnly={true}>
        {children}
      </Input>
    )
  }

  if (plus) {
    return (
      <PlusButton {...styles} onClick={__onClick}>
        {children}
      </PlusButton>
    )
  }

  return (
    <WarpCount {...styles}>
      <MinusButton {...styles} imgUrl="https://res.kurly.com/pc/ico/2010/ico_minus_on.svg">수량내리기</MinusButton>
      <Input {...styles} type="number" readOnly={true} value={value}/>
      <PlusButton {...styles} imgUrl="https://res.kurly.com/pc/ico/2010/ico_plus_on.svg">수량올리기</PlusButton>
    </WarpCount>
  );
};

CountBtn.defaultProps = {
  _onClick: () => {},
  color: "white",
  gridColoumn: "1fr",
  flexGrow: "1",
  imgUrl: false,
  height: "30px",
  width: "30px",
  margin: "0",
  borderRadius: "3px",
  justify: "flex-start",
};

const WarpCount = styled.div`
  border: 1px solid #ddd;
  height: fit-content;
  width: fit-content;
  border-radius: 3px;
  background-color: white;
`;

const MinusButton = styled.button`
  background-image: url("${(props) => (props.imgUrl)}");
  background-repeat: no-repeat;
  background-position: 50% 50%;
  text-indent: -9999px;  
  flex-grow: ${(props) => props.flexGrow};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-size: 30px 30px;
  background-color: transparent;
  border: none;
  color: ${(props) => props.bg};
  margin: ${(props) => props.margin};
  box-sizing: border-box;
  &:hover {
    cursor: pointer
  }
`;

const PlusButton = styled.button`
  background-image: url("${(props) => (props.imgUrl)}");
  background-repeat: no-repeat;
  background-position: 50% 50%;
  text-indent: -9999px;  
  flex-grow: ${(props) => props.flexGrow};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: transparent;
  background-size: 30px 30px;
  border: none;
  color: ${(props) => props.bg};
  margin: ${(props) => props.margin};
  box-sizing: border-box;
  &:hover {
    cursor: pointer
  }
`;

const Input = styled.input`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  border: 0;
  background-color: #fff;
  font-size: 14px;
  color: #000;
  line-height: 18px;
  text-align: end;
  &:focus-visible {
    outline: none;
  }
`;

export default CountBtn;