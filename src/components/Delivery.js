import React from "react";
import styled from "styled-components";
import { GrLocation } from "react-icons/gr";

const Delivery = () => {

  return (
    <React.Fragment>
      <Wrap>  
        <CartDelivery>
          <GrLocation style={{width: "20px", height: "20px", position: "absolute", top: "22px"}} /><p style={{ paddingLeft: "25px" }}>배송지</p>
          <p style={{ margin: "10px 0" }}><span>배송지를 입력</span>하고<br/>배송유형을 확인해 보세요!</p>
          <div>주소검색</div>
        </CartDelivery>
        <AmountView>
          <OriginPrice>
            <p>상품금액</p>
            <p>16,000원</p>
          </OriginPrice>
          <SalePrice>
            <p>상품할인금액</p>
            <p>1,600원</p>
          </SalePrice>
          <Pee>
            <p>배송비</p>
            <p>3,000원</p>
          </Pee>
          <RealPrice>
            <p>결제예정금액</p>
            <p>19,000원</p>
          </RealPrice>
          <Point>
          <span>적립</span>
          <span>로그인 후, 회원등급에 따라 적립</span>
          </Point>
        </AmountView>
        <Order>주문하기</Order>
      </Wrap>
    </React.Fragment>
  )
}

export default Delivery;

const Wrap = styled.div`
  width: 284px;
  margin-top: 54px;
`;

const CartDelivery = styled.div`
  position: relative;
  border: 1px solid #f2f2f2;
  padding: 20px;
  p > span {
    color: #5f0080;
  }
`;

const AmountView = styled.div`
  border: 1px solid #f2f2f2;
  background: #fafafa;
  padding: 20px;
`;

const OriginPrice = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;
const SalePrice = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;
const Pee = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;
`;
const RealPrice = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0 10px 0;
`;

const Point = styled.div`
  text-align: right;
  span:first-child {
    color: #fff;
    background: #ffbf00;
    font-size: 10px;
    display: inline-block;
    width: 38px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    vertical-align: 1px;
    border-radius: 10px;
    margin-right: 5px;
  }
  span:last-child {
    font-size: 12px;
  }
`;

const Order = styled.div`
  width: 100%;
  text-align: center;
  background: #5f0080;
  color: #fff;
  font-weight: 500;
  padding: 20px 0;
  border-radius: 6px;
  margin-top: 20px;
`;