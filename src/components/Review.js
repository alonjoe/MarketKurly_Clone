import React from "react";
import styled from "styled-components";
import { history } from "../redux/configStore";
import { Image, Grid, Layout, Text, Description, Table, Pagination, Button, CountBtn, Space } from "../elements/detail/index";
import { useSelector, useDispatch } from "react-redux";
import { reviewCreators as reviewActions } from "../redux/modules/review";
import ReviewDetail from "./ReviewDetail";
import ReviewPagination from "./ReviewPagination";


const Review = (props) => {
  const dispatch = useDispatch();
  const review = React.useRef(null);
  const [reviewDetailOpen, setReviewDetailOpen] = React.useState("none");
  const reviewDetailClick = () => setReviewDetailOpen("inherit");

  const checkClick = (e) => {
    // console.log(e.target)
  }

  React.useEffect(() => {
    dispatch(reviewActions.getReviewDB());
    window.addEventListener('click', checkClick);
  }, []);

  const userIs = useSelector((state) => state.user);
  const reviewdata = useSelector((state) => state.review.review);
  const key = Object.keys([...reviewdata]);

  const [currentPgIndex,setCurrentPgIndex]= React.useState(0)
  const [pgBtnActiveNum,setPgBtnActiveNum]= React.useState(1)
  const [currentPgWrapIndex,setCurrentPgWrapIndex]= React.useState(0)
  const [pgBtnActive,setPgBtnActive]= React.useState(false)
  const perPgNum = 7;
  const perPgIndex = perPgNum - 1;
  const totalReviewNum = reviewdata.length;
  const perPgNumArray = new Array(perPgNum);
  const pgEndIndex = Math.ceil(totalReviewNum/perPgNum)%10;


  const reverseReviewList = [...reviewdata].sort(function(a, b){
    return b.reviewid - a.reviewid
  })

  const reviewList = reverseReviewList.slice(currentPgIndex*perPgNum, currentPgIndex*perPgNum+perPgIndex+1)


  

  console.log(reverseReviewList)

  function changePg (current) {
    setCurrentPgIndex(current.target.text-1);
    const currentNum = Number(current.target.text);
    setPgBtnActiveNum(currentNum);
  }

  function changePgPlus (current) {
    if (currentPgIndex+1 < pgEndIndex) {
      console.log(currentPgIndex, pgEndIndex)
      setCurrentPgIndex(currentPgIndex+1);
      setPgBtnActiveNum(currentPgIndex+1);
    } else {
      return null
    }
  }

  function changePgMinus (current) {
    if (currentPgIndex+1 > 1) {
      console.log(currentPgIndex, pgEndIndex)
      setCurrentPgIndex(currentPgIndex-1);
      setPgBtnActiveNum(currentPgIndex-1);
    } else {
      return null
    }
  }

  console.log(pgBtnActiveNum);




  const deleteReview = (current) => {
    const reviewid = Number(current.target.value);
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
                    <ReviewDetail 
                      index={reverseReviewList.length-(idx+(currentPgIndex*perPgNum))-1}
                      reviewid={review.reviewid}
                      title={review.title} 
                      userName={review.userName}  
                      createdAt={review.createdAt.split("T")[0]} 
                      content={review.content}
                      _onClick={deleteReview}>
                    </ReviewDetail>
                  );
              }): null}
           </Table>
          </Table>
          <Button wrap margin="30px 0" justify="flex-end">
            {userIs.is_login? 
              <Button _onClick={() => { history.push("/write") }} sub flexGrow="0" width="fit-content">
              후기쓰기
            </Button>
            : null}
          </Button>
          <Pagination>
            <Pagination _onClick={null} icon imgUrl="https://res.kurly.com/pc/etc/old/images/common/icon-pagination-first.png">맨 처음 페이지로 가기</Pagination>
            <Pagination _onClick={changePgMinus} icon imgUrl="https://res.kurly.com/pc/etc/old/images/common/icon-pagination-prev.png">이전 페이지로 가기</Pagination>
            {
            [1,2,3,4,5,6,7,8,9,10].slice(0, pgEndIndex).map((v, i) => {
              return (
                <Pagination number _onClick={changePg} active={pgBtnActive} activeNum={pgBtnActiveNum} value={i}>{v}</Pagination>
                )
              })
            }
            <Pagination _onClick={changePgPlus} icon imgUrl="https://res.kurly.com/pc/etc/old/images/common/icon-pagination-next.png">다음 페이지로 가기</Pagination>
            <Pagination _onClick={null} icon imgUrl="https://res.kurly.com/pc/etc/old/images/common/icon-pagination-last.png">맨 끝 페이지로 가기</Pagination>
          </Pagination>
        </Grid>        
    </React.Fragment>
  )
}

// const ReviewDetail = styled.div`
//   padding: 30px 20px;
//   width: 100%;
//   height: fit-content;
//   font-size: 12px;
//   border-bottom: 1px solid #e3e3e3;
//   ${(props) => (props.hide ? `display: none;` : "")};
// `;

export default Review;