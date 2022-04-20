import React from "react";
import styled from "styled-components";
import { history } from "../redux/configStore";
import { Image, Grid, Layout, Text, Description, Table, Pagination, Button, CountBtn, Space } from "../elements/detail/index";
import { useSelector, useDispatch } from "react-redux";
import { reviewCreators as reviewActions } from "../redux/modules/review";

const Review = (props) => {
  const dispatch = useDispatch();
  const review = React.useRef(null);
  const checkClick = (e) => {
    // console.log(e.target)
  }

  React.useEffect(() => {
    dispatch(reviewActions.getReviewDB());
    window.addEventListener('click', checkClick);
  }, []);

  
  const reviewdata = useSelector((state) => state.review.review);
  const key = Object.keys([...reviewdata]);
  const reviewList = [...reviewdata].sort((a, b) => a - b);

  const deleteReview = (current) => {
    const reviewid = Number(current.target.value)
    dispatch(reviewActions.deleteReviewDB(reviewid));
  }

  return (
    <React.Fragment>
        <Grid>
          <Table table>
            <Table tbody>
              <Table tr>
                <Table th align="center">작성번호</Table>
                <Table th>내용</Table>
                <Table th align="center">작성자</Table>
                <Table th align="center">작성일</Table>
              </Table>
              {reviewList? 
                  reviewList.map((review, idx) => {
                  return (
                    <React.Fragment>
                      <Table tr>
                        <Table td align="center">{review.reviewid}</Table>
                        <Table td>{review.title}</Table>
                        <Table td align="center">{review.userName}</Table>
                        <Table td align="center">{review.createdAt.split("T")[0]}</Table>
                      </Table>
                      <ReviewDetail>
                        {review.content}
                        <Button wrap margin="20px 0 0" justify="flex-end">
                          {/* <Button subOutline margin="0 4px 0 0" >수정</Button> */}
                          <Button _onClick={deleteReview} subOutline _key={review.reviewid}>삭제</Button>
                        </Button>
                      </ReviewDetail>
                    </React.Fragment>
                  );
              }): null}
           </Table>
          </Table>
          <Button wrap margin="30px 0" justify="flex-end">
            <Button _onClick={() => { history.push("/write") }} sub flexGrow="0" width="fit-content">
              후기쓰기
            </Button>
          </Button>
          <Pagination>
            <Pagination icon imgUrl="https://res.kurly.com/pc/etc/old/images/common/icon-pagination-first.png">맨 처음 페이지로 가기</Pagination>
            <Pagination icon imgUrl="https://res.kurly.com/pc/etc/old/images/common/icon-pagination-prev.png">이전 페이지로 가기</Pagination>
            <Pagination selected>1</Pagination>
            <Pagination number>2</Pagination>
            <Pagination number>3</Pagination>
            <Pagination number>4</Pagination>
            <Pagination number>5</Pagination>
            <Pagination number>6</Pagination>
            <Pagination number>7</Pagination>
            <Pagination number>8</Pagination>
            <Pagination number>9</Pagination>
            <Pagination number>10</Pagination>
            <Pagination icon imgUrl="https://res.kurly.com/pc/etc/old/images/common/icon-pagination-next.png">다음 페이지로 가기</Pagination>
            <Pagination icon imgUrl="https://res.kurly.com/pc/etc/old/images/common/icon-pagination-last.png">맨 끝 페이지로 가기</Pagination>
          </Pagination>
        </Grid>        
    </React.Fragment>
  )
}

const ReviewDetail = styled.div`
  padding: 30px 20px;
  width: 100%;
  height: fit-content;
  font-size: 12px;
  border-bottom: 1px solid #e3e3e3;
  ${(props) => (props.hide ? `display: none;` : "")};
`;

export default Review;