import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { actionsCreators as basketActions } from "../redux/modules/basket";

import Delivery from "../components/Delivery";
import MyCart from "../components/MyCart";

const Basket = () => {

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(basketActions.getBasketDB());
  }, []);

  return (
    <React.Fragment>
      <H1>장바구니</H1>
      <Flex>
        <MyCart/>
        <Delivery/>
      </Flex>
    </React.Fragment>
  )
}

export default Basket;

const H1 = styled.h1`
  text-align: center;
  margin: 50px 0;
  color: #333;
  font-size: 28px;
  font-weight: 500;
`;

const Flex = styled.div`
  display: flex;
  margin: 0 auto;
  width: 1050px;
  justify-content: space-between;
`;