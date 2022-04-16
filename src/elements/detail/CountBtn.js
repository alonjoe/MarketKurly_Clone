import React from "react";
import styled from "styled-components";

const CountBtn = (props) => {
    const {
      _onClick,
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
        </MinusButton>
      )
    }

    if (input) {
      return (
        <Input {...styles} onClick={_onClick}>
          {children}
        </Input>
      )
    }

    if (plus) {
      return (
        <PlusButton {...styles} onClick={_onClick}>
          {children}
        </PlusButton>
      )
    }

    return (
      <React.Fragment {...styles}>
        <MinusButton imgUrl="https://res.kurly.com/pc/ico/2010/ico_minus_on.svg">수량내리기</MinusButton>
        <Input type="number" readonly/>
        {/* <input type="number" readonly="readonly" onfocus="this.blur()" class="inp" />  */}
        <PlusButton imgUrl="https://res.kurly.com/pc/ico/2010/ico_plus_on.svg">수량올리기</PlusButton>
      </React.Fragment>
    );
};

CountBtn.defaultProps = {
  _onClick: () => {},
  bg: "#5f0081",
  color: "white",
  width: "fit-content",
  gridColoumn: "1fr",
  flexGrow: "1",
  imgUrl: false,
  height: "56px",
  margin: "0",
  borderRadius: "3px",
  justify: "flex-start",
};

const MinusButton = styled.button`
  background-image: url("${(props) => (props.imgUrl)}");
  background-repeat: no-repeat;
  background-position: 50% 50%;
  text-indent: -9999px;  
  flex-grow: ${(props) => props.flexGrow};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: white;
  background-size: 30px 30px;
  border: 1px solid #ddd;
  color: ${(props) => props.bg};
  margin: ${(props) => props.margin};
  padding: 16px;
  box-sizing: border-box;
  border-radius:  ${(props) => props.borderRadius};
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
  background-color: white;
  background-size: 30px 30px;
  border: 1px solid #ddd;
  color: ${(props) => props.bg};
  margin: ${(props) => props.margin};
  padding: 16px;
  box-sizing: border-box;
  border-radius:  ${(props) => props.borderRadius};
  &:hover {
    cursor: pointer
  }
`;

const Input = styled.input`
  width: 30px;
  height: 30px;
  margin-right: -1px;
  padding: 0 0 4px;
  border: 0;
  background-color: #fff;
  font-size: 14px;
  color: #000;
  line-height: 18px;
  text-align: center;
`;

export default CountBtn;