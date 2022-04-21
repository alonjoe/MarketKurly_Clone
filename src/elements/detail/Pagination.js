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
    selected,
    _onClick,
    value,
    active,
    activeNum,
  } = props;

  const styles = {
    imgUrl: imgUrl,
    size: size,
  };

  if (icon) {
    return (
      <PageIconLink onClick={_onClick} {...styles}>
        {children}
      </PageIconLink>
    );
  }

  if (number) {
    return (
      <PageLink onClick={_onClick} active={active} activeNum={activeNum} value={value} {...styles}>
        {children}
      </PageLink>
    );
  }

  if (selected) {
    return (
      <PageLinkActive {...styles}>
        {children}
      </PageLinkActive>
    );
  }

  return (
    <WrapPagination {...styles}>
      {children}
    </WrapPagination>
  )


}

Pagination.defaultProps = {
  imgUrl: false,
  size: "34px",
  active: false,
};

const WrapPagination = styled.div`
  margin: 0 auto;
  width: fit-content;
  margin-bottom: 88px;
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
  cursor: pointer;
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
  font-size: 12px;
  cursor: pointer;
  ${(props) => (props.activeNum-1 === props.value ? 
  `
  background-color: #f7f7f7;
  color: #5f0080;
  cursor: default;
  ` : null)};
`;

const PageLinkActive = styled.a`
  display: inline-block;
  width: ${(props) => (props.size)};
  height: ${(props) => (props.size)};
  line-height: ${(props) => (props.size)};
  border: 1px solid #ddd;
  border-left: 0;
  vertical-align: top;
  text-align: center;
  font-size: 12px;
  background-color: #f7f7f7;
  color: #5f0080;
`;


export default Pagination;