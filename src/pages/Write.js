import React from "react";
import styled from "styled-components";

import { Image, Grid, Layout, Text, Description, Table, Pagination, Button, CountBtn, Space, Input } from "../elements/detail/index";

const Write = (props) => {

  const {
    thumb,
  } = props;

  console.log(thumb)

  return (
    <Layout margin="68px auto 88px" width="fit-content">
      <Text weight="700" size="24px" color="#333" margin="5px 0 34px">
        후기 작성
      </Text>
      <GoodsInfo>
        <Grid is_flex width="100%">
          <Image width="80px" height="103px" src="https://img-cf.kurly.com/shop/data/goods/1649919583551y0.jpg" />
          <Text margin="0 0 0 25px" color="#000" size="16px" line-height="24px">
            [코이누르] 정통 인도커리 3종
          </Text>
        </Grid>
      </GoodsInfo>
      <Tbody>
      <Tr>
        <Th>제목</Th>
        <Td>
          <Input type="text" width="710px" name="subject" placeholder="제목을 입력해주세요." className="inp " value="" />
        </Td>
      </Tr>
      <Tr>
        <Th>후기작성</Th>
        <Td>
        <div className="field_cmt">
          <Input textarea height="500px" width="710px" name="contents" cols="100" rows="10" placeholder="자세한 후기는 다른 고객의 구매에 많은 도움이 되며,
          일반식품의 효능이나 효과 등에 오해의 소지가 있는 내용을 작성 시 검토 후 비공개 조치될 수 있습니다. 
          반품/환불 문의는 1:1문의로 가능합니다." />
        </div>
        </Td>
      </Tr>
      </Tbody>
      <Button wrap justify="center" margin="40px">
        <Button flexGrow="0" width="200px" weight="500">등록하기</Button>
      </Button>
    </Layout>
  )
}

const Tbody = styled.tbody`
  margin: 0 auto;
  width: fit-content;
`

const Tr = styled.tr`
`

const Th = styled.th`
  border-top: 1px solid #dddfe1;
  background-color: #f7f7f7;
  font-size: 12px;
  color: #666;
  width: 110px;
`

const Td = styled.td`
  padding: 10px 0 10px 10px;
  border-top: 1px solid #dddfe1;
`

const GoodsInfo = styled.div`
  overflow: hidden;
  padding: 20px 15px;
  border-top: 2px solid #5f0080;
  width: 100%;
`

export default Write;