import React from "react";
import styled from "styled-components";

const InputBox = props => {
    const {
        margin,
        type,
        label,
        width,
        height,
        padding,
        fontSize,
        bg,
        color,
        border,
        subText,
        _onBlur,
        ph,
        ol //outline
    } = props;

    const styles = { 
        margin,
        width, 
        height, 
        padding, 
        fontSize, 
        bg, 
        color, 
        border, 
        placeholder : ph,
        type,
        outline : ol,
    };
    

    return (
        <InputContainer
            {...styles}
        >
        </InputContainer>
    );
};

InputBox.defaultProps = {
    margin: "",
    width: "100%",
    height: "",
    fontSize: "16px",
    outline: "none",
};

const InputContainer = styled.input`
    margin: ${props => props.margin};
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding: ${props => props.padding};
    width: ${props => props.width};
    height: ${props => props.height};
    font-size: ${props => props.fontSize};
    border: ${props => props.border};
    outline: ${props => props.ol};
`;

export default InputBox;