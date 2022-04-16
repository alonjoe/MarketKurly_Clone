import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";


const Modal = (props) => {

  let setModal = props.setModal;
  let getModal = props.getModal;

  return (
    <Wrap>
      <MyCart>
        <p>[모두의맛집] 알꼬막 짬뽕</p>
        <Option>
          <span>16,000원</span>
          <div style={{display: "flex", position: "relative"}}>
            <button className="minusBtn">-</button>
            <input readOnly="readnly" value="1" />
            <button className="plusBtn">+</button>
          </div>
        </Option>
        <Option>
          <span>16,000원</span>
          <div style={{display: "flex", position: "relative"}}>
            <button className="minusBtn">-</button>
            <input readOnly="readnly" value="1" />
            <button className="plusBtn">+</button>
          </div>
        </Option>
        <Total>
          <span>합계</span>
          <span>16,000원</span>
        </Total>
        <Point>
          <span>적립</span>
          <span>로그인 후, 회원할인가와 적립혜택 제공</span>
        </Point>
        <ButtonDiv>
          <button onClick={() => { setModal(!getModal) }}>취소</button>
          <button>장바구니 담기</button>
        </ButtonDiv>
      </MyCart>

    </Wrap>
  );
};

export default Modal;

const Wrap = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 5;
`;

const MyCart = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  background: #fff;
  width: 440px;
  padding: 30px;
  border-radius: 10px;
  p {
    margin: 0 0 7px 0;
    font-size: 14px;
  }
  
`;

const Option = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  span {
    font-size: 14px;
    font-weight: 800;
  }
  button.minusBtn {
    position: absolute;
    top: 0px;
    right: 58px;
    background: #fff;
    overflow: hidden;
    float: left;
    width: 28px;
    height: 28px;
    border: 0;
    font-size: 20px;
    font-weight: 800;
  }
  input {
    position: absolute;
    right: 28px;
    width: 30px;
    height: 30px;
    text-align: center;
  }
  button.plusBtn {
    position: absolute;
    top: 0px;
    right: 0px;
    background: #fff;
    overflow: hidden;
    float: right;
    width: 28px;
    height: 28px;
    border: 0;
    font-size: 20px;
    font-weight: 800;
  }
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  span:first-child {
    font-size: 16px;
    font-weight: 800;
    line-height: 29px;
  }
  span:last-child {
    font-size: 24px;
    font-weight: 800;
  }
`;

const Point = styled.div`
margin: 6px 0 20px 0;
  text-align: right;
  span:first-child {
    color: #fff;
    background: #ffbf00;
    font-size: 11px;
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
    font-size: 14px;
  }
`;

const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  button {
    width: 186px;
    height: 56px;
    font-size: 16px;
    font-weight: 800;
    border-radius: 3px;
  }
  button:first-child {
    border: 1px solid #ccc;
    background: #fff;
  }
  button:last-child {
    background: #5f0081;
    border: none;
    color: #fff;
  }

`;