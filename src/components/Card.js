import React from "react";
import styled from "styled-components";

const Card = () => {

  return (
    <React.Fragment>
      <Item>
        {/* imgurl 가져와서 넣기 */}
        <a><div></div></a>
        <button style={{border: "none", background: "url(https://res.kurly.com/pc/ico/2010/ico_cart.svg) no-repeat 50% 50%", cursor: "pointer"}}></button>
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

  a {
    width: 100%;
    height: 435px;
    cursor: pointer;
    transition: 0.3s;
  }
  a:hover {
    transform: scale(1.05);
  }
  a > div {
    width: 100%;
    height: 435px;
    background: #999;
  }
  button {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    position: absolute;
    right: 15px;
    bottom: 260px;
    z-index: 2;
  }
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
