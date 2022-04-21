import React from "react";
import styled from "styled-components";
import { history } from "../redux/configStore";


import { RiMenuFill } from "react-icons/ri";
import { GrLocation } from "react-icons/gr";
import { FiHeart } from "react-icons/fi";
import { BsCart2 } from "react-icons/bs";


import Flex from "../elements/Flex";
import session from "redux-persist/lib/storage/session";
import { useSelector } from "react-redux";

const Header = (props) => {
  // const history = useHistory();

  const is_login = useSelector((state) => state.user.is_login)
  const is_userName = useSelector((state) => state.user_name)
  const is_Session = sessionStorage.getItem("token");

  // const d_Session = sessionStorage.removeItem("token");
  // const deleteToken = localStorage.clear();

  // window.location.reload(false)
  
  return (
    <React.Fragment>
      <Outter>
        <Wrap>
          <UserMenu>
            <img src="https://res.kurly.com/pc/service/common/2011/delivery_210801.png" alt="샛별, 택배 배송안내" width="121" height="22"/>
            {is_Session || is_login ?  (
              <div>
                {/* 조건걸어서 로그인시 */}
                <ul>
                  <li>안녕하세요 {is_userName.user_name} 님</li><p></p>
                  <li><li onClick={() => {sessionStorage.clear(); window.location.href="/"}} >로그아웃</li></li><p></p>
                  
                  <li>고객센터</li>
                </ul>
              </div>
              ) : (
              <div>
                {/* 비로그인시 */}
                <ul>
                  <li onClick={() => { history.push("/signup") }}>회원가입</li><p></p>
                  <li onClick={() => { history.push("/login") }}>로그인</li><p></p>
                  <li>고객센터</li>
                </ul>
              </div>
            )}
          
          </UserMenu>
          
          <Box>
            <img src="https://res.kurly.com/images/marketkurly/logo/logo_x2.png" alt="마켓컬리 로고" 
              onClick={() => { history.push("/") }} style={{cursor: "pointer"}} />
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
            <div className="icon"><GrLocation style={{width: "25px", height: "25px"}} /></div>
            <div className="icon"><FiHeart style={{width: "25px", height: "25px"}} /></div>
            <div className="icon" onClick={() => { history.push("/basket") }}><BsCart2 style={{width: "25px", height: "25px"}} /></div>
          </Gnb>
        </Wrap>
      </Outter>
    </React.Fragment>
  )
}


export default Header;

const Outter = styled.div`
  box-shadow: 0px 1px 8px #eee;
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
  ul > li {
    font-size: 12px;
    padding: 0 12px;
    cursor: pointer;
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
  z-index: 3;
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
  .icon:hover {
    color: #5f0080;
  }
`;