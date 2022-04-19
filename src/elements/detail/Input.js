import React from "react";
import styled from 'styled-components'

const Input = (props) => {

  const {
    textarea,
    placeholder,
    width,
    height,
  } = props;

  const styles = {
    placeholder: placeholder,
    width: width,
    height: height,
  };
  
  
  if (textarea) {
    return (
      <React.Fragment>
        <TextArea {...styles} placeholder={placeholder}/>
      </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      <TextInput {...styles} placeholder={placeholder}/>
    </React.Fragment>
  )


}

Input.defaultProps = {
  width: "inherit",
  height: "inherit",
};

const TextInput = styled.input`
  width: ${(props) => (props.width)};
  height: ${(props) => (props.height)};
  padding: 8px 10px 9px;
  border: 1px solid #dddfe1;
  &:focus-visible {
    outline: 1px solid transparent;
    border: 1px solid #514859;
  }
  &::placeholder {
    font-size: 12px;
    color: #aaa;
  }
`;

const TextArea = styled.textarea`
  width: ${(props) => (props.width)};
  height: ${(props) => (props.height)};
  padding: 8px 10px 9px;
  border: 1px solid #dddfe1;
  overflow: hidden;
  resize: none;
  &:focus-visible {
    outline: 1px solid transparent;
    border: 1px solid #514859;
  }
  &::placeholder {
    font-size: 12px;
    color: #aaa;
  }
`;

export default Input;