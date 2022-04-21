import React from "react";
import styled from 'styled-components'
import { Image, Grid, Layout, Text, Description, Table, Pagination, Button, CountBtn, Space } from "../elements/detail/index";

const ReviewPagination = (props) => {

  function changePg (current) {
    console.log(current.target);
    console.log(current.target.value);
    console.log(current.target.text);
    // window.location.reload();
  }

  const {
    _onClick,
		display,
    children,
    active,
    v,
    i,
  } = props;

  const styles = {
		display: display,
  };

  return (
    <Pagination number _onClick={_onClick} active={active} value={i}>{v}</Pagination>
  )


}

ReviewPagination.defaultProps = {
	_onClick: () => {}, // 아무것도 없을 때 이걸 넣어줘야 오류가 안나니까 default 값으로 넣어주는 것 같다.
	active: false,
  value: 1,
};

// const Detail = styled.div`
//   padding: 30px 20px;
//   width: 100%;
//   height: fit-content;
//   font-size: 12px;
//   border-bottom: 1px solid #e3e3e3;
// 	display: ${(props) => (props.display)};
// `;

export default ReviewPagination;