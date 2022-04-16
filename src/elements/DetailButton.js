import React from "react";
import styled from "styled-components";

const DetailButton = (props) => {
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

    if (wrap) {
      return (
        <WrapButtons {...styles}>
          {children}
        </WrapButtons>
      )
    }

    if (icon) {
      return (
        <IconButton {...styles} onClick={_onClick}>
          {children}
        </IconButton>
      )
    }

    if (iconOutline) {
      return (
        <IconOutlineButton {...styles} onClick={_onClick}>
          {children}
        </IconOutlineButton>
      )
    }

    if (sub) {
      return (
        <SubButton {...styles} onClick={_onClick}>
          {children}
        </SubButton>
      )
    }

    return (
      <ElButton {...styles} onClick={_onClick}>
          {children}
      </ElButton>
    );
};

DetailButton.defaultProps = {
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

const WrapButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => (props.justify)};
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
  padding: 16px;
  margin: ${(props) => props.margin};
  box-sizing: border-box;
  border-radius: ${(props) => props.borderRadius};
  border: 1px solid #5f0080;
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
  &:hover {
    cursor: pointer
  }
`;

export default DetailButton;