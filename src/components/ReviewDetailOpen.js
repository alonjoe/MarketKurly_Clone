import React from "react";
import styled from 'styled-components'

const ReviewDetail = (props) => {

  const {
    _onClick,
		display,
    children,
  } = props;

  const styles = {
		display: display,
  };

  return (
    <Detail {...styles} onClick={_onClick}>
      {children}
    </Detail>
  )


}

ReviewDetail.defaultProps = {
	_onClick: () => {}, // 아무것도 없을 때 이걸 넣어줘야 오류가 안나니까 default 값으로 넣어주는 것 같다.
	display: "none"
};

const Detail = styled.div`
  padding: 30px 20px;
  width: 100%;
  height: fit-content;
  font-size: 12px;
  border-bottom: 1px solid #e3e3e3;
	display: ${(props) => (props.display)};
`;

export default ReviewDetail;