import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";
import "../shared/App.css";

const Card = () => {

  const [modal, setModal] = useState(false);

  return (
    <React.Fragment>
      <Item>
        {/* imgurl 가져와서 넣기 */}
        <div className="image">
          <img style={{width: "100%"}}
          src="https://img-cf.kurly.com/shop/data/goods/1648175852980l0.jpg" alt="내 마음대로 꾸미는 마스크줄" onerror="this.src='https://res.kurly.com/mobile/img/1808/img_none_x2.png'"/>
        </div>
        <ModalBtn 
          onClick={() => { setModal(true); }}
          style={{border: "none", background: "url(https://res.kurly.com/pc/ico/2010/ico_cart.svg) no-repeat 50% 50%", cursor: "pointer"}}>
        </ModalBtn>
        {modal === true 
        ? <Modal getModal={modal} setModal={setModal}/>
        : null
        }
        
        <Info>
          {/* title넣기 */}
          <Name>[미미네] 어묵많이 눈꽃치즈 국물떡볶이</Name>
          <Cost>
            {/* discount넣기 */}
            <span className="dc">10%</span>
            {/* 할인된가격 */}
            <span className="price">5,670원</span>
            {/* price */}
            <span className="original">6300원</span>
            {/* desc 요청하기 */}
            <span className="desc">오동토동한 어묵이 가득</span>
          </Cost>
        </Info>
      </Item>
    </React.Fragment>
  )
}

export default Card;

const Item = styled.div`
  width: 338px;
  height: 682px;
  position: relative;
  .image {
    width: 100%;
    height: 435px;
    cursor: pointer;
    overflow: hidden;
  }
  .image > img {
    transition:  0.5s;
  }
  .image > img:hover {
    transform: scale(1.02);
  }
`;

const ModalBtn = styled.button` 
  width: 45px;
  height: 45px;
  border-radius: 50%;
  position: absolute;
  right: 15px;
  bottom: 260px;
  z-index: 2;
`;

const Info = styled.div`
  padding: 14px 10px 10px 0;
`;

const Name = styled.p`
  font-size: 20px;
  margin-bottom: 7px;
`;

const Cost = styled.span`
  span.dc {
    color: #fa622f;
    font-size: 18px;
    margin-right: 5px;
    font-weight: bold;
  }
  span.price {
    font-size: 18px;
    font-weight: bold;
  }
  span.original {
    display: block;
    text-decoration: line-through;
    color: #999;
    font-weight: 400;
    margin-top: 5px;
    margin-bottom: 11px;
  }
  span.desc {
    font-size: 13px;
    color: #999;
  }
`;
