import { reduce } from "lodash";
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
        borderR,
        ph,
        ol, //outline
        ac,
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
        borderR,
        placeholder : ph,
        type,
        outline : ol,
        ac,
        // borderradius : br,
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
    borderR: "3px",
    // borderradius: "30px",
    
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
    border-radius: ${props => props.br};
    accent-color: ${props => props.ac};
    border-radius: ${props => props.borderR};
`;

export default InputBox;