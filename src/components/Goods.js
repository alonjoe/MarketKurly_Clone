import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { actionsCreators as basketActions } from "../redux/modules/basket";

import {priceUnit} from "../shared/Price";

const Goods = (props) => {

  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(props.amount);

  // 수량 +,-하는 함수
  const onclickPlus = useCallback(() => {
		if (quantity > 99) return;
		setQuantity(quantity + 1);
	}, [quantity]);
  const onclickMinus = useCallback(() => {
		if (quantity < 2) return;
		setQuantity(quantity - 1);
	}, [quantity]);

  const deleteGoods = () => {
    window.alert("삭제하시겠습니까?");
    dispatch(basketActions.deleteGoodsDB(props.cartId));
  }

  return (
    <React.Fragment>
      <Wrap>
        <Check src="https://res.kurly.com/mobile/service/common/2006/ico_checkbox.svg" />
        <ImgBox>
          <img src={props.imgurl} />
        </ImgBox>
        <GoodsName>
          <p>{props.title}</p>
        </GoodsName>
        <div style={{display: "flex", position: "relative"}}>
            <button className="minusBtn" onClick={onclickMinus}>감소</button>
            <input readOnly="readnly" value={quantity} />
            <button className="plusBtn" onClick={onclickPlus}>추가</button>
        </div>
        <Amount>{priceUnit(props.price*quantity)}원</Amount>
        <span>
          <img 
            onClick={deleteGoods}
            src="https://res.kurly.com/mobile/service/cart/2007/ico_delete.svg"/>
        </span>
      </Wrap>
    </React.Fragment>
  )
}

export default Goods;

const Wrap = styled.div`
  position: relative;
  display: flex;
  padding: 20px 0;
  border-bottom: 1px solid #f4f4f4;
  span {
    margin-left: 0px;
    line-height: 75px;
    img {
      position: absolute;
      top: 52px;
      right: 10px;
    }
  }
  div {
    left: 87px;
    top: 25px;
  }
  div > button {
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

const Check = styled.img`
  margin-right: 30px;
`;

const ImgBox = styled.div`
  width: 60px;
  height: 78px;
  margin-right: 25px;
  img {
    width: 100%;
  }
`;

const GoodsName = styled.div`
  width: 335px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  p {
    font-weight: 500;
  }
`;

const Amount = styled.div`
  margin-left: 155px;
  line-height: 75px;
  font-weight: 500;
  text-align: right;
`;