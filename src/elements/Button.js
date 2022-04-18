import React from "react";
import styled from "styled-components";

const Button = props => {
    const {
        margin,
        padding,
        width,
        height,
        color,
        border,
        bg,
        _onClick,
        left,
        right,
        ai,
        fontSize,
        borderR,
        cursor,
        children,
    } = props;

    const styles = {
        margin,
        padding,
        width,
        height,
        color,
        border,
        bg,
        _onClick,
        left,
        right,
        ai,
        borderR,
        cursor,
        fontSize,
    };

    return (
        <Buttonstyle {...styles} onClick={() => _onClick()}>
            {children}
        </Buttonstyle>
    );
};

Button.defaultProps = {
    margin: "",
    width: "100%",
    height: "",
    // color: "#eee",
    padding: "5px",
    // bg: "#35a0b8",
    fontSize: "",
    border: "none",
    borderR: "3px",
    _onClick: () => {},
};

const Buttonstyle = styled.button`
    margin: ${props => props.margin};
    padding: ${props => props.padding};
    width: ${props => props.width};
    height: ${props => props.height};
    border: ${props => props.border};
    border-radius: ${props => props.borderR};

    color: ${props => props.color};
    background-color: ${props => props.bg};
    bottom: ${props => props.border};
    right: ${props => props.right};
    left: ${props => props.left};
    align-items: ${props => props.ai};

    cursor: ${props => props.cursor};
    font-weight: bold;
    font-size: ${props => props.fontSize};
`;

export default Button;