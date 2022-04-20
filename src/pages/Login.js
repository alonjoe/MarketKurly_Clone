import React from "react";
import styled from "styled-components";

import Flex from "../elements/Flex";
import InputBox from "../elements/InputBox";
import Text from "../elements/Text";
import Button from "../elements/Button";

import { actionCreators as userActions } from "../redux/modules/user";
import { useDispatch } from "react-redux";
import { history } from "../redux/configStore";

const Login = props => {
    const dispatch = useDispatch();
    const inputRefID = React.useRef();
    const inputRefPW = React.useRef();

    const loginBtn = () => {
        const id = inputRefID.current.value;
        const pwd = inputRefPW.current.value;
        console.log(id, pwd)
        
        dispatch(userActions.loginMD(id, pwd));
      
    };

    const signUpBtn = () => {
        history.push("/signup");
    };

    return (
        <Flex >
            <LoginSection>
                
                <Text fontSize="20px" fontWeight="800" textAlign="center">로그인</Text>
                
                <InputBox 
                    margin="35px 0 0 0"
                    type="text"
                    ph="아이디를 입력해주세요"
                    width="100%"
                    height="54px"
                    border="1px solid #ccc"
                    fontSize="14px"
                    outline="none"
                    padding="0 0 0 16px"
                    _ref={inputRefID}
                />
                <InputBox 
                    margin="12px 0"
                    type="password"
                    ph="비밀번호를 입력해주세요"
                    width="100%"
                    height="54px"
                    border="1px solid #ccc"
                    fontSize="14px"
                    outline="none"
                    padding="0 0 0 16px"
                    _ref={inputRefPW}
                />
                <Flex>
                    <Flex
                        jc="space-between" 
                        padding="0 0 28px"
                    >
                        <CheckBox>
                            <InputBox 
                                margin="0 5px 0 0"
                                type="checkbox" 
                                width="16px" 
                                height="17px"
                                ac="#5F0080"
                                />
                            <Text fontSize="13px">
                                보안접속
                            </Text>
                        </CheckBox>
                        <Text fontSize="13px" display="flex">
                            아이디 찾기<Text fontSize="0.1px" margin="0 3px">|</Text>비밀번호 찾기
                        </Text>
                    </Flex>
                </Flex>
                <Button
                    margin="0 0 12px 0 "
                    width="100%"
                    height="54px"
                    fontSize="16px"
                    bg="#5F0080"
                    cursor="pointer"
                    _onClick={() => loginBtn()}
                >
                    <Text color="white" textAlign="center">로그인</Text>
                </Button>
                <Button
                    width="100%"
                    height="54px"
                    fontSize="16px"
                    bg="white"
                    border="1px solid #5F0080"
                    cursor="pointer"
                    _onClick={() => signUpBtn()}
                >
                    <Text color="#5F0080" textAlign="center">회원가입</Text>
                </Button>
            </LoginSection>
        </Flex>
    )
}

const LoginSection = styled.div`
    width: 340px;
    margin: 0 auto 70px auto;
    padding-top: 90px;
    letter-spacing: -.6px;
    height: 442px;
    /* border: 2px solid blue; */
    text-align: center;    
`;

const CheckBox = styled.div`
    /* margin: 0 0 0 0; */
    display: flex;
`;

const Search = styled.div`
    /* margin: 0 0 0 0; */
`;

export default Login;