import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as itemActions } from "redux";

import Card from "./Card";

const New = () => {
  const dispatch = useDispatch();
  const newList = useSelector((state) => state.card.list);

  React.useEffect(() => {
    // dispatch(itemActions.getNewDB());
  }, [])

  return (
    <React.Fragment>
      <Content>
        <Banner>
          <img src="https://img-cf.kurly.com/category/banner/pc/62aa0430-3ec9-4029-842f-36d8c21d9318" alt="카테고리배너"></img>
        </Banner>
        <h3 style={{fontSize: "28px", textAlign: "center", marginBottom: "19px", color: "#333"}}>신상품</h3>
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
        {/* ex)  신상품 newList로 받아와서 
          {articleList.map((a, idx) => {
            return <Article key={a.articleNum} {...a} />;
          })} 이런식으로 돌리기 */}
        <List>
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

export default New;

const Content = styled.div`
  margin: 0 auto;
  width: 1050px;
  padding: 0 0 60px;
  color: #333;
`;

const Banner = styled.div`
  width: 1050px;
  height: 400px;
  margin: 26px 0 50px 0;

  img {
    width: 100%;
    cursor: pointer;
  }
`;

const SortMenu = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  margin-bottom: 15px;
  p {
    color: #000;
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