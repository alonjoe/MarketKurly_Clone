import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { actionsCreators as itemActions } from "../redux/modules/card";

import Card from "./Card";
import { Pagination } from "../elements/detail/index";

const New = () => {
  const dispatch = useDispatch();
  const newList = useSelector((state) => state.card.list);
  // console.log(newList);

  React.useEffect(() => {
    dispatch(itemActions.getNewDB());
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
            <li>추천순</li><p></p>
            <li>신상품순</li><p></p>
            <li>판매량순</li><p></p>
            <li>혜택순</li><p></p>
            <li>낮은 가격순</li><p></p>
            <li>높은 가격순</li>
          </ul>
        </SortMenu>
        <List>
          {/* 맵으로 카드 돌리기, key값은 unique하게, 배열풀어서 속성으로 넘겨주기 */}
          {newList.map((v, i) => {
            return <Card key={`newItem_${i}`} {...v} />
          })}
        </List>
      </Content>
      <Pagination />
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
  ul > li {
    padding: 0px 10px 0 8px;
    color: #999;
    cursor: pointer;
  }
  ul > li:nth-child(3) {
    color: #000;
  }
  ul > li:hover {
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