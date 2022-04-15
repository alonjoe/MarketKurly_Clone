import React from "react";
import styled from "styled-components";

import Card from "./Card";

const Best = () => {

  return (
    <React.Fragment>
      <Content>
        <h3 style={{fontSize: "28px", textAlign: "center", margin: "28px 0 19px 0", color: "#333"}}>베스트</h3>
        <SortMenu>
          <p>총 688개</p>
          <ul>
            <a><li>추천순</li></a><p></p>
            <a><li>신상품순</li></a><p></p>
            <a><li>판매량순</li></a><p></p>
            <a><li>혜택순</li></a><p></p>
            <a><li>낮은 가격순</li></a><p></p>
            <a><li>높은 가격순</li></a>
          </ul>
        </SortMenu>
        {/* 맵으로 카드 돌리기 */}
        <List>
          {/* ex)  베스트상품 list로 받아와서 
          {articleList.map((a, idx) => {
            return <Article key={a.articleNum} {...a} />;
          })} 이런식으로 돌리기 */}
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </List>
      </Content>

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
  ul > a {
    padding: 0px 10px 0 8px;
    color: #999;
    cursor: pointer;
  }
  ul > a:hover {
    color: #000;
  }
  ul > a:last-child {
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