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
  }, []);

  const {
    reviewid,
    title,
    content,
    userName,
    createdAt,
    _onClick,
    index,
  } = props;

  
  
return (
  <React.Fragment>
    <Table tr _onClick={reviewDetailClick}>
      <Table td align="center">{index+1}</Table>
      <Table td>{title}</Table>
      <Table td align="center">{userName}</Table>
      <Table td align="center">{createdAt}</Table>
    </Table>
    <ReviewDetailOpen display={reviewDetailOpen}>
      {content}
      <Button wrap margin="20px 0 0" justify="flex-end">
        <Button subOutline _onClick={_onClick} _key={reviewid}>삭제</Button>
      </Button>
    </ReviewDetailOpen>
  </React.Fragment>
);
            
}

export default ReviewDetail;