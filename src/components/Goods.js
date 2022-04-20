import React, { useCallback, useState } from "react";
import styled from "styled-components";

import {priceUnit} from "../shared/Price";

const Goods = () => {

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

  return (
    <React.Fragment>
      <Wrap>
        <Check src="https://res.kurly.com/mobile/service/common/2006/ico_checkbox.svg" />
        <ImgBox>
          <img src="https://img-cf.kurly.com/shop/data/goods/1649898244424i0.jpg" />
        </ImgBox>
        <GoodsName>
          <p>[서울마님] 카스테라 인절미</p>
          <p>[서울마님] 인절미 5종</p>
        </GoodsName>
        <div style={{display: "flex", position: "relative"}}>
            <button className="minusBtn" onClick={onclickMinus}>감소</button>
            <input readOnly="readnly" value={quantity} />
            <button className="plusBtn" onClick={onclickPlus}>추가</button>
        </div>
        <Amount>4,600원</Amount>
        <span><img src="https://res.kurly.com/mobile/service/cart/2007/ico_delete.svg"/></span>
      </Wrap>
    </React.Fragment>
  )
}

export default Goods;

const Wrap = styled.div`
  display: flex;
  span {
    margin-left: 0px;
    line-height: 75px;
    img {
      margin-left: 25px;
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
  margin-left: 165px;
  line-height: 75px;
  font-weight: 500;
`;