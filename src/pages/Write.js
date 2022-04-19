import React, { useRef } from "react";
import styled from "styled-components";

import { Image, Grid, Layout, Text, Description, Table, Pagination, Button, CountBtn, Space, Input } from "../elements/detail/index";
import { useSelector, useDispatch } from "react-redux";
import { detailCreators as detailActions } from "../redux/modules/detail";
import { Apis } from "../shared/api";
import { reviewCreators as reviewActions } from "../redux/modules/review";



const Write = (props) => {
  const [id, setId] = React.useState(null);
  const [title, setTitle] = React.useState(null);
  const [imgUrl, setImgUrl] = React.useState(null);

  React.useEffect(() => {
    dispatch(detailActions.getDetailDB());
  }, []);

  const detail = useSelector((state) => state.detail.detail);

  React.useEffect(() => {
    if (detail) {
      setTitle(detail.title);
      setImgUrl(detail.imgurl);
    } else {
      return null
    }
  }, [])

  const inputTitle = React.useRef()
  const inputContent = React.useRef()
  
  const dispatch = useDispatch();

  const submit = () => {
    if (inputTitle.current.value === null || inputTitle.current.value === undefined || inputTitle.current.value === "") {
      alert("제목과 내용을 모두 입력해 주세요.");
    } else {
      dispatch(reviewActions.writeReviewDB(inputTitle.current.value, inputContent.current.value));
    }
  }

  return (
    <Layout margin="68px auto 88px" width="fit-content">
      <Text weight="700" size="24px" color="#333" margin="5px 0 34px">
        후기 작성
      </Text>
      <GoodsInfo>
        <Grid is_flex width="100%">
          <Image width="80px" height="103px" src={imgUrl} />
          <Text margin="0 0 0 25px" color="#000" size="16px" line-height="24px">
            {title}
          </Text>
        </Grid>
      </GoodsInfo>
      <Tbody>
      <Tr>
        <Th>제목</Th>
        <Td>
          <Input _ref={inputTitle} type="text" width="710px" name="subject" placeholder="제목을 입력해주세요." className="inp " value="" />
        </Td>
      </Tr>
      <Tr>
        <Th>후기작성</Th>
        <Td>
          <Input _ref={inputContent} textarea height="500px" width="710px" name="contents" cols="100" rows="10" placeholder="자세한 후기는 다른 고객의 구매에 많은 도움이 되며,
          일반식품의 효능이나 효과 등에 오해의 소지가 있는 내용을 작성 시 검토 후 비공개 조치될 수 있습니다. 
          반품/환불 문의는 1:1문의로 가능합니다." />
        </Td>
      </Tr>
      </Tbody>
      <Button wrap justify="center" margin="40px">
        <Button flexGrow="0" width="200px" weight="500" _onClick={submit}>등록하기</Button>
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