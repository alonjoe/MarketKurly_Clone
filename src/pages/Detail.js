import React from "react";

import { Image, Grid, Layout, Text, Description, Table, Pagination, Button, CountBtn } from "../elements/detail/index";

const Main = () => {

  return (
    <React.Fragment>
      <Layout id="sectionView">
        <Grid gridColoumn="430px 1fr">
          <Image src="https://img-cf.kurly.com/shop/data/goods/1649919583551y0.jpg" />
          <div>
            <Text weight="700" color="#333" size="24px" className="goods_name">
                [미미네] 어묵많이 눈꽃치즈 국물떡볶이
            </Text>
            <Text color="#999" size="14px"  className="short_desc">
                오동통한 어묵이 가득
            </Text>
            <Text color="#333" size="14px" className="goods_dcinfo">
              회원할인가
            </Text>
            <Text className="goods_price">
              <span className="position">
                <span className="dc">
                  <Text weight="700" size="28px" className="dc_price">
                    5,670<Text span weight="700" size="18px" className="won">원</Text>
                    <Text span weight="700" size="28px" color="#fa622f" className="dc_percent">
                      10%
                    </Text>
                  </Text> 
                  <Text lineThrough size="16px" color="#999" class="price">14,980<span class="won">원</span></Text>
                </span>
              </span>
            </Text>
            <div className="goods_info">
              <Description dl className="list fst">
                <Description dt className="tit">
                  판매단위
                </Description> 
                <Description dd className="desc">
                  1팩
                </Description>
              </Description>
              <Description dl className="list">
                <Description dt className="tit">
                  중량/용량
                </Description> 
                <Description dd className="desc">
                  620g
                </Description>
              </Description> 
              <Description dl className="list">
                <Description dt className="tit">
                  배송구분
                </Description>
                <Description dd className="desc">
                  샛별배송/택배배송
                </Description>
              </Description>
              <Description dl className="list">
                <Description dt className="tit">
                  포장타입
                </Description> 
                <Description dd className="desc">냉동/스티로폼
                  <strong className="emph">택배배송은 에코포장이 스티로폼으로 대체됩니다.</strong>
                </Description>
              </Description> 
              <Description dl className="list">
                <Description dt className="tit">
                  알레르기정보
                </Description> 
                <Description dd className="desc">
                  -떡 : 밀 함유<br />
                  -어묵 : 밀, 대두 함유<br />
                  -소스 : 밀 함유<br />
                  -치즈 : 우유 함유
                </Description>
              </Description>
              <Description dl className="list">
                <Description dt className="tit">
                  구매수량
                </Description> 
                <Description dd className="desc">
                  <CountBtn />
                </Description>
              </Description>
                <Text align="right">
                <Text span weight="700" color="#333" size="13px">총 상품금액 :</Text> 
                <Text span weight="700" color="#333" size="32px">
                  5,960
                  <Text span weight="700" color="#333" size="20px">원</Text>
                </Text>
                </Text>
            </div>
            <div id="cartPut">
              <Button wrap>
                {/* <DetailButton iconOutline imgUrl="https://res.kurly.com/pc/service/pick/btn-itemdetail-like.svg" flexGrow="0" width="56px" class="pick_icon_button">찜하기 버튼</DetailButton>  */}
                <Button iconOutline imgUrl="https://res.kurly.com/pc/service/pick/btn-itemdetail-like-on.svg" flexGrow="0" width="56px">찜하기 버튼</Button> 
                <Button margin="0 0 0 8px">장바구니 담기</Button>
              </Button>
            </div>
          </div>
        </Grid>
        <Grid>
          <div id="reviewView">
            <Table table className="xans-board-listheader">
              <Table tbody>
                <Table tr>
                  <Table th className="input_txt" align="center">번호</Table>
                  <Table th className="input_txt">제목</Table>
                  <Table th className="input_txt" align="center">작성자</Table>
                  <Table th className="input_txt" align="center">작성일</Table>
                </Table>
                <Table tr>
                  <Table td align="center">공지</Table>
                  <Table td className="subject">금주의 Best 후기 안내</Table>
                  <Table td className="user_grade" align="center">Marketkurly</Table>
                  <Table td className="time" align="center">2019-11-01</Table>
                </Table>
              </Table>
            </Table>
            <p>
              <Button wrap justify="flex-end">
                <Button sub flexGrow="0" width="fit-content">후기쓰기</Button>
              </Button>
            </p>
            <Pagination />
          </div>
        </Grid>
      </Layout>
        
      
    </React.Fragment>
  )
}

export default Main;