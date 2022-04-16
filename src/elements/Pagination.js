import { size } from "lodash";
import React from "react";
import styled from 'styled-components'

const Pagination = (props) => {

  const {
    imgUrl,
    children,
    icon,
    size,
    wrap,
    number,
  } = props;

  const styles = {
    imgUrl: imgUrl,
    size: size,
  };

  if (icon) {
    return (
      <PageIconLink {...styles}>
        {children}
      </PageIconLink>
    );
  }

  if (number) {
    return (
      <PageLink {...styles}>
        {children}
      </PageLink>
    );
  }

  return (
    <WrapPagination {...styles}>
      <Pagination icon imgUrl="https://res.kurly.com/pc/etc/old/images/common/icon-pagination-first.png">맨 처음 페이지로 가기</Pagination>
      <Pagination icon imgUrl="https://res.kurly.com/pc/etc/old/images/common/icon-pagination-prev.png">이전 페이지로 가기</Pagination>
      <Pagination number>1</Pagination>
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
    </WrapPagination>
  )


}

Pagination.defaultProps = {
  imgUrl: false,
  size: "34px",
};

const WrapPagination = styled.div`
  margin: 0 auto;
  width: fit-content;
`

const PageIconLink = styled.a`
  background-image: url("${(props) => (props.imgUrl)}");
  background-repeat: no-repeat;
  background-position: 50% 50%;
  text-indent: -9999px;
  display: inline-block;
  width: ${(props) => (props.size)};
  height: ${(props) => (props.size)};
  border: 1px solid #ddd;
  border-left: 0;
  vertical-align: top;
  text-align: center;
  &:first-child {
    border-left: 1px solid #ddd;
  }
`;

const PageLink = styled.a`
  display: inline-block;
  width: ${(props) => (props.size)};
  height: ${(props) => (props.size)};
  line-height: ${(props) => (props.size)};
  border: 1px solid #ddd;
  border-left: 0;
  vertical-align: top;
  text-align: center;
`;


export default Pagination;