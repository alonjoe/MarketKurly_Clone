import React, { Children } from "react";
import styled from 'styled-components'

const Text = (props) => {

  const {
    weight,
    color,
    size,
    children,
    span,
    align,
    lineThrough,
    margin,
  } = props;

  const styles = {
    weight: weight,
    color: color,
    size: size,
    align: align,
    lineThrough: lineThrough,
    margin: margin,
  };

  if (span) {
    return (
      <Span {...styles}>{children}</Span>
    );
  }

  return (
    <P {...styles}>
      {children}
    </P>
  )


}

Text.defaultProps = {
  bold: false,
  color: "#4c4c4c",
  size: "12px",
  weight: "400",
  align: "left",
  lineThrough: false,
  margin: "0",
};

const P = styled.p`
  ${(props) => (props.lineThrough ? `text-decoration: line-through` : "")};
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.weight)};
  letter-spacing: -.5px;
  text-align: ${(props) => (props.align)};
  margin: ${(props) => (props.margin)};
`;

const Span = styled.span`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.weight)};
  letter-spacing: -.5px;
  text-align: ${(props) => (props.align)};
  margin: ${(props) => (props.margin)};
`;

export default Text;