import React, { useState } from "react";

import { Image, Grid, Layout, Text, Description, Table, Pagination, Button, CountBtn, Space } from "../elements/detail/index";
import Review from "../components/Review";
import { Apis } from "../shared/api";
import { useSelector, useDispatch } from "react-redux";
import { detailCreators as detailActions } from "../redux/modules/detail";
import { reviewCreators as reviewActions } from "../redux/modules/review";
import { actionsCreators as basketActions } from "../redux/modules/basket";

import axios from "axios";



const Main = () => {
  const [amount, setAmount] = React.useState(1);
  const withComma = (number) => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");


  const dispatch = useDispatch();

  const detail = useSelector((state) => state.detail.detail);
  const reviewList = useSelector((state) => state.review.review);


  React.useEffect(() => {
    window.scrollTo(0, 0);
    if (detail === null) {
      console.log('---디테일 없음')
      dispatch(detailActions.getDetailDB())
      // window.location.reload();
    } else {
      console.log('---디테일 있음')
    };
    // dispatch(detailActions.getDetailDB());
    if (localStorage.getItem("token")) {
      dispatch(reviewActions.getUserInfo());
    }
    // window.location.reload();
  }, []);

  const MinusAmount = () => {
    if (amount > 1) {
      setAmount(amount-1);
    }
  }

  const PlusAmount = () => {
    setAmount(amount+1);
  }

  const addBasket = () => {
    dispatch(basketActions.addBestBasketDB(2, amount));
  }
  
  return (
    <React.Fragment>
      <Layout>
        <Grid gridColoumn="430px 1fr">
          <Image src={detail?detail.imgurl : null} />
          <div>
            <Text margin="10px 0" lineheight="34px" weight="700" color="#333" size="24px">
              {detail?detail.title:null}
            </Text>
            <Text lineheight="20px" color="#999" size="14px" margin="4px 60px 29px 0">
              {detail?detail.subtitle:null}
            </Text>
            <Text lineheight="20px" color="#333" size="14px">
              회원할인가
            </Text>
            <Text lineheight="30px" weight="700" size="28px">
              {detail? withComma(detail.price): null}
              <Text span margin="0 7px 0 2px" weight="700" size="18px">원</Text>
              <Text span weight="700" size="28px" color="#fa622f">{detail? detail.discount:null}%</Text>
            </Text> 
            <Text margin="7px 0 19px" lineThrough size="16px" color="#999">
              {detail? withComma(Math.floor(detail.price * (1 + detail.discount/100))): null}원
            </Text>
            <Description dl>
              <Description dt>
                판매단위
              </Description> 
              <Description dd>
                {detail?detail.salesUnit? detail.salesUnit: null:null}
              </Description>
            </Description>
            <Description dl>
              <Description dt>
                중량/용량
              </Description> 
              <Description dd>
                {detail? detail.weigtVolume:null}
              </Description>
            </Description> 
            <Description dl>
              <Description dt>
                배송구분
              </Description>
              <Description dd>
                {detail?detail.shippingType:null}
              </Description>
            </Description>
            <Description dl>
              <Description dt>
                포장타입
              </Description> 
              <Description dd>
                {detail?detail.packagingType:null}
                {/* <Text size="12px" weight="400" color="#666" margin="4px 0 0">택배배송은 에코포장이 스티로폼으로 대체됩니다.</Text> */}
              </Description>
            </Description> 
            {detail?detail.allergyInfo? 
              <Description dl>
                <Description dt>
                  알레르기정보
                </Description> 
                <Description dd>
                  {detail.allergyInfo}
                </Description>
              </Description>
              : null
            :null}
            <Description dl>
              <Description dt>
                구매수량
              </Description> 
              <Description dd>
                <CountBtn value={amount} _onClickMinus={MinusAmount} _onClickPlus={PlusAmount}>
                </CountBtn>
              </Description>
            </Description>
            <Text align="right" margin="30px 0 20px">
              <Text span weight="700" color="#333" size="13px">총 상품금액 :</Text> 
                <Text span lineheight="32px" margin="0 8px 0" weight="700" color="#333" size="32px">
                  {detail?withComma((detail.price-(detail.price/100*detail.discount))*amount):null}
                  <Text span margin="0 0 0 2px" weight="700" color="#333" size="20px">원</Text>
              </Text> 
            </Text>
            <Button wrap margin="0 0 88px">
              {/* <Button iconOutline imgUrl="https://res.kurly.com/pc/service/pick/btn-itemdetail-like.svg" flexGrow="0" width="56px">찜하기 버튼</Button>  */}
              <Button iconOutline imgUrl="https://res.kurly.com/pc/service/pick/btn-itemdetail-like-on.svg" flexGrow="0" width="56px">찜하기 버튼</Button> 
              <Button _onClick={addBasket} margin="0 0 0 8px">장바구니 담기</Button>
            </Button>
          </div>
        </Grid>
        <Grid>
          <Review reviewList={reviewList} />
        </Grid>
      </Layout>
        
      
    </React.Fragment>
  )
}

export default Main;