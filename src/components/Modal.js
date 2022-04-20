import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { actionsCreators as basketActions } from "../redux/modules/basket";

import { priceUnit } from "../shared/Price";


const Modal = (props) => {

  const dispatch = useDispatch();

  // 모달창 열고 닫기위해 props로 가져오는 부분
  let setModal = props.setModal;
  let getModal = props.getModal;

  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState();
  
  // 수량 +,-하는 함수
  const onclickPlus = useCallback(() => {
		if (quantity > 99) return;
		setQuantity(quantity + 1);
	}, [quantity]);
  const onclickMinus = useCallback(() => {
		if (quantity < 2) return;
		setQuantity(quantity - 1);
	}, [quantity]);

  // console.log(props.productbestId, props.productnewId, quantity)
  const addBasket = () => {
    if (props.productbestId) {
      dispatch(basketActions.addBestBasketDB(props.productbestId, quantity));
    } else {
      dispatch(basketActions.addNewBasketDB(props.productnewId, quantity));
    }
  }

  return (
    <Wrap>
      <MyCart>
        <p>{props.title}</p>
        <Option>
          <span>{priceUnit(props.price)}원</span>
          <div style={{display: "flex", position: "relative"}}>
            <button className="minusBtn" onClick={onclickMinus}>감소</button>
            <input readOnly="readnly" value={quantity} />
            <button className="plusBtn" onClick={onclickPlus}>추가</button>
          </div>
        </Option>
        <Total>
          <span>합계</span>
          <span>{priceUnit(props.price * quantity)}원</span>
        </Total>
        <Point>
          <span>적립</span>
          <span>로그인 후, 회원할인가와 적립혜택 제공</span>
        </Point>
        <ButtonDiv>
          {/* props로 받아온걸로 true, false 수정 */}
          <button onClick={() => { setModal(!getModal) }}>취소</button>
          <button onClick={ addBasket }>장바구니 담기</button>
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
    line-height: 30px;
  }
  button {
    overflow: hidden;
    font-weight: 600;
    border: 1px solid #e1e1e1;
    font-size: 0;
    width: 30px;
    height: 30px;
  }
  button.minusBtn {
    position: absolute;
    right: 58px;
    overflow: hidden;
    float: left;
    font-weight: 800;
    background-image: url(https://res.kurly.com/pc/service/common/2009/ico_minus_on.svg);
    background-color: transparent;
    background-repeat: no-repeat;
    background-size: 30px 30px;
    background-position: 50% 50%;
  }
  input {
    position: absolute;
    right: 28px;
    width: 30px;
    height: 30px;
    border: 1px solid #e1e1e1;
    text-align: center;
  }
  button.plusBtn {
    position: absolute;
    top: 0px;
    right: 0px;
    overflow: hidden;
    float: right;
    font-weight: 800;
    background-image: url(https://res.kurly.com/mobile/service/cart/2010/ico_plus_on.svg);
    margin-left: -1px;
    background-color: transparent;
    background-repeat: no-repeat;
    background-size: 35px 35px;
    background-position: 50% 50%;
  }
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  span:first-child {
    font-size: 16px;
    font-weight: 800;
    line-height: 35px;
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