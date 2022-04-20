import React from "react";
import styled from "styled-components";
import { history } from "../redux/configStore";
import { Image, Grid, Layout, Text, Description, Table, Pagination, Button, CountBtn, Space } from "../elements/detail/index";
import { useSelector, useDispatch } from "react-redux";
import ReviewDetailOpen from "./ReviewDetailOpen";


const ReviewDetail = (props) => {
  const dispatch = useDispatch();
  const [reviewDetailOpen, setReviewDetailOpen] = React.useState("none");
  const reviewDetailClick = () => {
    if (reviewDetailOpen === "none") {
      setReviewDetailOpen("inherit");
    } else {
      setReviewDetailOpen("none");
    }
  }

  React.useEffect(() => {
    console.log('hi')
    console.log(reviewid)
  }, []);

  const {
    reviewid,
    title,
    content,
    userName,
    createdAt,
    _onClick,
  } = props;

  
  
return (
  <React.Fragment>
    <Table tr _onClick={reviewDetailClick}>
      <Table td align="center">{reviewid}</Table>
      <Table td>{title}</Table>
      <Table td align="center">{userName}</Table>
      <Table td align="center">{createdAt.split("T")[0]}</Table>
    </Table>
    <ReviewDetailOpen display={reviewDetailOpen}>
      {content}
      <Button wrap margin="20px 0 0" justify="flex-end">
        {/* <Button subOutline margin="0 4px 0 0" >수정</Button> */}
        {/* <Button _onClick={deleteReview} subOutline _key={props.reviewid}>삭제</Button> */}
        <Button subOutline _onClick={_onClick} _key={reviewid}>삭제</Button>
      </Button>
    </ReviewDetailOpen>
  </React.Fragment>
);
            
}

// const ReviewDetailOpen = styled.div`
//   padding: 30px 20px;
//   width: 100%;
//   height: fit-content;
//   font-size: 12px;
//   border-bottom: 1px solid #e3e3e3;
//   ${(props) => (props.hide ? `display: none;` : "")};
// `;

export default ReviewDetail;