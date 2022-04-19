import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import Card from "./Card";
import { Pagination } from "../elements/detail/index";

const Best = () => {

  // const bestList = useSelector((state) => console.log(state.card.list));
  // console.log(bestList);

  return (
    <React.Fragment>
      <Content>
        <h3 style={{fontSize: "28px", textAlign: "center", margin: "28px 0 19px 0", color: "#333"}}>베스트</h3>
        <SortMenu>
          <p>총 688개</p>
          <ul>
            <li>추천순</li><p></p>
            <li>신상품순</li><p></p>
            <li>판매량순</li><p></p>
            <li>혜택순</li><p></p>
            <li>낮은 가격순</li><p></p>
            <li>높은 가격순</li>
          </ul>
        </SortMenu>
        {/* 맵으로 카드 돌리기 */}
        <List>
          {/* ex)  베스트상품 list로 받아와서! */}
          {/* ex)  {...a} <- props로 넘겨주기 */}
          {/* {bestList.map((a, idx) => {
            return <Card key={a.productId} {...a} />;
          })} */}
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </List>
      </Content>
      <Pagination />
    </React.Fragment>
  )
}

export default Best;

const Content = styled.div`
  margin: 0 auto;
  width: 1050px;
  padding: 0 0 60px;
  color: #333;
`;

const SortMenu = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  margin-bottom: 15px;
  p {
    color: #333;
  }
  ul {
    display: flex;
    position: relative;
  }
  ul > li {
    padding: 0px 10px 0 8px;
    color: #999;
    cursor: pointer;
  }
  ul > li:hover {
    color: #000;
  }
  ul > li:nth-child(5) {
    color: #000;
  }
  ul > li:last-child {
    border: none;
  }
  ul p::after {
    content: "";
    position: absolute;
    width: 1px;
    height: 10px;
    background: #e5e5e5;
    top: 5px;
  }
`;

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const PageDiv = styled.div`

`;