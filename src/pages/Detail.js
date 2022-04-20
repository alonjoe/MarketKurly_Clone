import React, { useState } from "react";

import { Image, Grid, Layout, Text, Description, Table, Pagination, Button, CountBtn, Space } from "../elements/detail/index";
import Review from "../components/Review";
import { Apis } from "../shared/api";
import { useSelector, useDispatch } from "react-redux";
import { detailCreators as detailActions } from "../redux/modules/detail";
import { reviewCreators as reviewActions } from "../redux/modules/review";
import axios from "axios";



const Main = () => {
  const [id, setId] = React.useState(null);
  const [title, setTitle] = React.useState(null);
  const [subtitle, setSubtitle] = React.useState(null);
  const [price, setPrice] = React.useState(0);
  const priceWithComma = price
  const [discount, setDiscount] = React.useState(0);
  const discountedPrice = (price-(price/100*discount))
  const [imgUrl, setImgUrl] = React.useState(null);
  const [like, setLike] = React.useState(null);
  const [salesUnit, setSalesUnit] = React.useState(null);
  const [weightVolume, setWeightVolume] = React.useState(null);
  const [shippingType, setShippingType] = React.useState(null);
  const [packagingType, setPacakagingType] = React.useState(null);
  const [allergyInfo, setAllergyInfo] = React.useState(null);
  const [notification, setNotification] = React.useState(null);
  const [amount, setAmount] = React.useState(1);
  const TotalPrice = discountedPrice*amount
  const withComma = (number) => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");


  const dispatch = useDispatch();

  const detail = useSelector((state) => state.detail.detail);
  const reviewList = useSelector((state) => state.review.review);


  React.useEffect(() => {
    if (detail === null) {
      console.log('---디테일 없음')
      dispatch(detailActions.getDetailDB())
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

  React.useEffect(() => {
    if (detail) {
      setTitle(detail.title);
      setSubtitle(detail.subtitle);
      setPrice(detail.price);
      setDiscount(detail.discount);
      setImgUrl(detail.imgurl);
      setLike(detail.like);
      setSalesUnit(detail.salesUnit);
      setWeightVolume(detail.weigtVolume);
      setShippingType(detail.shippingType);
      setPacakagingType(detail.packagingType);
      setAllergyInfo(detail.allergyInfo);
      setNotification(detail.notification);
    } else {
      return null
    }
  }, [])
  
  
  return (
    <React.Fragment>
      <Layout>
        <Grid gridColoumn="430px 1fr">
          <Image src={imgUrl} />
          <div>
            <Text margin="10px 0" lineheight="34px" weight="700" color="#333" size="24px">
              {title}
            </Text>
            <Text lineheight="20px" color="#999" size="14px" margin="4px 60px 29px 0">
              {subtitle}
            </Text>
            <Text lineheight="20px" color="#333" size="14px">
              회원할인가
            </Text>
            <Text lineheight="30px" weight="700" size="28px">
              {withComma(discountedPrice)}
              <Text span margin="0 7px 0 2px" weight="700" size="18px">원</Text>
              <Text span weight="700" size="28px" color="#fa622f">{discount}%</Text>
            </Text> 
            <Text margin="7px 0 19px" lineThrough size="16px" color="#999">
              {withComma(price)}원
            </Text>
            <Description dl>
              <Description dt>
                판매단위
              </Description> 
              <Description dd>
                {salesUnit? salesUnit: null}
              </Description>
            </Description>
            <Description dl>
              <Description dt>
                중량/용량
              </Description> 
              <Description dd>
                {weightVolume}
              </Description>
            </Description> 
            <Description dl>
              <Description dt>
                배송구분
              </Description>
              <Description dd>
                {shippingType}
              </Description>
            </Description>
            <Description dl>
              <Description dt>
                포장타입
              </Description> 
              <Description dd>
                {packagingType}
                {/* <Text size="12px" weight="400" color="#666" margin="4px 0 0">택배배송은 에코포장이 스티로폼으로 대체됩니다.</Text> */}
              </Description>
            </Description> 
            {allergyInfo? 
              <Description dl>
                <Description dt>
                  알레르기정보
                </Description> 
                <Description dd>
                  {allergyInfo}
                </Description>
              </Description>
              : null
            }
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
                  {withComma(TotalPrice)}
                  <Text span margin="0 0 0 2px" weight="700" color="#333" size="20px">원</Text>
              </Text>
            </Text>
            <Button wrap margin="0 0 88px">
              {/* <Button iconOutline imgUrl="https://res.kurly.com/pc/service/pick/btn-itemdetail-like.svg" flexGrow="0" width="56px">찜하기 버튼</Button>  */}
              <Button iconOutline imgUrl="https://res.kurly.com/pc/service/pick/btn-itemdetail-like-on.svg" flexGrow="0" width="56px">찜하기 버튼</Button> 
              <Button margin="0 0 0 8px">장바구니 담기</Button>
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