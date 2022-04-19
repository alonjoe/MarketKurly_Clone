import React, { children } from "react";
import styled from 'styled-components'

const Description = (props) => {

  const {
    weight,
    color,
    size,
    children,
    dl,
    dt,
    dd,
  } = props;

  const styles = {
    weight: weight,
    color: color,
    size: size,
    span: false,
  };

  if (dl) {
    return (
      <Dl {...styles}>{children}</Dl>
    );
  }

  if (dt) {
    return (
      <Dt {...styles}>{children}</Dt>
    );
  }

  if (dd) {
    return (
      <Dd {...styles}>{children}</Dd>
    );
  }


}

Description.defaultProps = {
  bold: false,
  color: "#4c4c4c",
  size: "12px",
  weight: "500",
};

const Dl = styled.dl`
  display: grid;
  column-gap: 20px;
  row-gap: 20px;
  grid-template-columns: 128px auto;
  border-bottom: 1px solid #f4f4f4;
  padding: 18px 0;
  margin: 0;
  &:first-child {
    border-top: 1px solid #f4f4f4;
  }
`;

const Dt = styled.dt`
  font-size: 14px;
  color: #666;
  line-height: 20px;
`;

const Dd = styled.dd`
  overflow: hidden;
  color: #333;
  font-size: 14px;
  line-height: 20px;
  word-break: break-all;
`;


export default Description;