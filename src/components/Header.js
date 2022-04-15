import React from "react";
import styled from "styled-components";
import { history } from "../redux/configStore";
// import { useHistory } from "react-router-dom";


import { RiMenuFill } from "react-icons/ri";
import { GrLocation } from "react-icons/gr";
import { FiHeart } from "react-icons/fi";
import { BsCart2 } from "react-icons/bs";


const Header = () => {
  // const history = useHistory();

  return (
    <React.Fragment>
      <Outter>
        <Wrap>
          <UserMenu>
            <img src="https://res.kurly.com/pc/service/common/2011/delivery_210801.png" alt="샛별, 택배 배송안내" width="121" height="22" />
            {/* 조건걸어서 로그인시 */}
            {/* <ul>
              <a><li>000 님</li></a><p></p>
              <a><li>고객센터</li></a><p></p>
            </ul> */}
            {/* 비로그인시 */}
            <ul>
              <a><li>회원가입</li></a><p></p>
              <a><li>로그인</li></a><p></p>
              <a><li>고객센터</li></a>
            </ul>
          </UserMenu>
          <Box>
            <img src="https://res.kurly.com/images/marketkurly/logo/logo_x2.png" alt="마켓컬리 로고" />
          </Box>
          <Gnb>
            <ul>
              <li><RiMenuFill style={{position: "relative", top: "4px", marginRight: "10px", width: "18px", height: "18px"}}/>전체카테고리</li>
              <li onClick={() => { history.push("/new") }}>신상품</li>
              <li onClick={() => { history.push("/best") }}>베스트</li>
              <li>알뜰쇼핑</li>
              <li>특가/혜택</li>
            </ul>
            <form>
              <input type="text" placeholder="검색어를 입력해주세요" />
              <img src="https://res.kurly.com/pc/service/common/1908/ico_search_x2.png" />
            </form>
            <span className="hovericon"><GrLocation style={{width: "25px", height: "25px"}} /></span>
            <FiHeart style={{width: "25px", height: "25px"}} />
            <BsCart2 style={{width: "25px", height: "25px"}} />
          </Gnb>
        </Wrap>
      </Outter>
    </React.Fragment>
  )
}

export default Header;

const Outter = styled.div`
  border-bottom: 1px solid #eee;
`;

const Wrap = styled.div`
  margin: 0 auto;
  width: 1050px;
  height: 156px;
  background: #fff;
`;

const Box = styled.div`
  width: 103px;
  height: 79px;
  position: absolute;
  left: 47%;
  top: 2%;
  img {
    width: 100%;
    left: 0;
    position: absolute;
  }
`;

const UserMenu = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;

  ul {
    display: flex;
    justify-content: space-between;
    position: relative;
  }
  ul > a > li {
    font-size: 12px;
    padding: 0 12px;
  }
  ul p::after {
    content: "";
    position: absolute;
    width: 1px;
    height: 10px;
    background: #e5e5e5;
    top: 5px;
  }
`;

const Gnb = styled.div`
  position: relative;
  z-index: 300;
  display: flex;
  justify-content: space-between;
  margin-top: 75px;
  ul {
    display: flex;
  }
  ul li {
    padding: 0 36px;
    font-size: 15px;
    font-weight: 600;
    color: #333;
    &:hover {
      cursor: pointer;
    }
  }
  ul li:first-child {
    padding: 0 36px 0 0;
  }
  ul li:hover {
    color: #5f0080;
    text-decoration: underline;
    text-underline-position: under;
  }
  form {
    position: relative;
  }
  form input {
    width: 242px;
    height: 36px;
    padding: 0 60px 0 14px;
    border: 1px solid #f7f7f6;
    border-radius: 18px;
    background-color: #f7f7f7;
    font-family: 'Noto Sans';
    font-weight: 400;
    font-size: 12px;
    color: #666;
    line-height: 16px;
    outline: none;
    position: relative;
    top: -5px;
    &:focus {
      background: #fff;
    }
  }
  form img {
    width: 30px;
    height: 30px;
    position: absolute;
    right: 5px;
    top: -2px;
  }
  span:hover {
    color: #5f0080;
  }
`;