import React from "react";
import styled from "styled-components";

import Goods from "./Goods";

const MyCart = () => {

  return (
    <React.Fragment>
      <Wrap>
        <CartHeader>
          <img src="https://res.kurly.com/mobile/service/common/2006/ico_checkbox.svg" />
          <p>전체선택</p><p></p>
          <p>선택삭제</p>
        </CartHeader>
        <CartList>
          <Goods></Goods>
        </CartList>
      </Wrap>
    </React.Fragment>
  )
}

export default MyCart;

const Wrap = styled.div`
  width: 742px;
`;

const CartHeader = styled.div`
  display: flex;
  padding: 15px 0;
  border-bottom: 1px solid #000;
  position: relative;
  img {
    margin-right: 12px;
  }
  p {
    font-size: 14px;
    font-weight: 500;
  }
  p:nth-child(2) {
    margin-right: 20px;
  }
  p:nth-child(3) {
    position: absolute;
    width: 1px;
    height: 14px;
    left: 108px;
    top: 19px;
    border-left: 1px solid #e1e1e1;
  }
  p:nth-child(4) {
    margin-left: 20px;
  }
`;

const CartList = styled.div`
  padding: 20px 0;
`;