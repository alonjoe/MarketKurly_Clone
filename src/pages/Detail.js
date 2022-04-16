import React, { useState } from "react";

import { Image, Grid, Layout, Text, Description, Table, Pagination, Button, CountBtn, Space } from "../elements/detail/index";
import Review from "../components/Review";


const Main = () => {
  return (
    <React.Fragment>
      <Layout>
        <Grid gridColoumn="430px 1fr">
          <Image src="https://img-cf.kurly.com/shop/data/goods/1649919583551y0.jpg" />
          <div>
            <Text margin="10px 0" lineheight="34px" weight="700" color="#333" size="24px">
                [미미네] 어묵많이 눈꽃치즈 국물떡볶이
            </Text>
            <Text lineheight="20px" color="#999" size="14px" margin="4px 60px 29px 0">
                오동통한 어묵이 가득
            </Text>
            <Text lineheight="20px" color="#333" size="14px">
              회원할인가
            </Text>
            <Text lineheight="30px" weight="700" size="28px">
              5,670
              <Text span margin="0 7px 0 2px" weight="700" size="18px">원</Text>
              <Text span weight="700" size="28px" color="#fa622f">10%</Text>
            </Text> 
            <Text margin="7px 0 19px" lineThrough size="16px" color="#999">
              14,980원
            </Text>
            <Description dl>
              <Description dt>
                판매단위
              </Description> 
              <Description dd>
                1팩
              </Description>
            </Description>
            <Description dl>
              <Description dt>
                중량/용량
              </Description> 
              <Description dd>
                620g
              </Description>
            </Description> 
            <Description dl>
              <Description dt>
                배송구분
              </Description>
              <Description dd>
                샛별배송/택배배송
              </Description>
            </Description>
            <Description dl>
              <Description dt>
                포장타입
              </Description> 
              <Description dd>냉동/스티로폼
                <Text size="12px" weight="400" color="#666" margin="4px 0 0">택배배송은 에코포장이 스티로폼으로 대체됩니다.</Text>
              </Description>
            </Description> 
            <Description dl>
              <Description dt>
                알레르기정보
              </Description> 
              <Description dd>
                -떡 : 밀 함유<br />
                -어묵 : 밀, 대두 함유<br />
                -소스 : 밀 함유<br />
                -치즈 : 우유 함유
              </Description>
            </Description>
            <Description dl>
              <Description dt>
                구매수량
              </Description> 
              <Description dd>
                <CountBtn />
              </Description>
            </Description>
            <Text align="right" margin="30px 0 20px">
              <Text span weight="700" color="#333" size="13px">총 상품금액 :</Text> 
                <Text span lineheight="32px" margin="0 8px 0" weight="700" color="#333" size="32px">
                  5,960
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
          <Review />
        </Grid>
      </Layout>
        
      
    </React.Fragment>
  )
}

export default Main;