import React from "react";
import styled from "styled-components";

const Button = (props) => {
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
      subOutline,
      weight,
      _key,
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
      margin: margin,
      weight: weight,
    };

    if (wrap) {
      return (
        <WrapButtons {...styles} key={_key}>
          {children}
        </WrapButtons>
      )
    }

    if (icon) {
      return (
        <IconButton {...styles} onClick={_onClick} key={_key}>
          {children}
        </IconButton>
      )
    }

    if (iconOutline) {
      return (
        <IconOutlineButton {...styles} onClick={_onClick} key={_key}>
          {children}
        </IconOutlineButton>
      )
    }

    if (sub) {
      return (
        <SubButton {...styles} onClick={_onClick} key={_key}>
          {children}
        </SubButton>
      )
    }

    if (subOutline) {
      return (
        <SubOutlineButton {...styles} onClick={_onClick} value={_key}>
          {children}
        </SubOutlineButton>
      )
    }

    return (
      <ElButton {...styles} onClick={_onClick} key={_key}>
          {children}
      </ElButton>
    );
};

Button.defaultProps = {
  _key: 0,
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
  weight: "700",
};

const WrapButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => (props.justify)};
  margin: ${(props) => (props.margin)};
`;

const IconOutlineButton = styled.button`
  background-image: url("${(props) => (props.imgUrl)}");
  background-repeat: no-repeat;
  background-position: 50% 50%;
  text-indent: -9999px;  
  flex-grow: ${(props) => props.flexGrow};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: white;
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

const IconButton = styled.button`
  background-image: url("${(props) => (props.imgUrl)}");
  background-repeat: no-repeat;
  background-position: 50% 50%;
  text-indent: -9999px;  
  flex-grow: ${(props) => props.flexGrow};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.bg};
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
  padding: 16px;
  box-sizing: border-box;
  border-radius:  ${(props) => props.borderRadius};
  border: none;
  &:hover {
    cursor: pointer
  }
`;

const SubButton = styled.button`
  line-heihgt: 30px;
  background-color: #795b8f;
  color: ${(props) => props.color};
  padding: 0 16px;
  margin: ${(props) => props.margin};
  box-sizing: border-box;
  border: 1px solid ${(props) => props.bg};
  font-size: 13px;
  font-weight: 600;
  line-height: 32px;
  &:hover {
    cursor: pointer
  }
`;

const SubOutlineButton = styled.button`
  line-heihgt: 30px;
  background-color: white;
  padding: 0 16px;
  margin: ${(props) => props.margin};
  box-sizing: border-box;
  font-size: 12px;
  line-height: 28px;
  background-color: white;
  border: 1px solid #ddd;
  color: ${(props) => props.bg};
  margin: ${(props) => props.margin};
  &:hover {
    cursor: pointer
  }
`;

const ElButton = styled.button`
  ${(props) => (props.imgUrl ? `background-image: url("${props.margin}")` : "")};
  flex-grow: ${(props) => props.flexGrow};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.bg};
  color: ${(props) => props.color};
  padding: 16px;
  margin: ${(props) => props.margin};
  box-sizing: border-box;
  border-radius:  ${(props) => props.borderRadius};
  border: none;
  font-size: 16px;
  font-weight: ${(props) => props.weight};
  &:hover {
    cursor: pointer
  }
`;

export default Button;