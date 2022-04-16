import React from "react";
import styled from "styled-components";

import Flex from "../elements/Flex";
import InputBox from "../elements/InputBox";
import Text from "../elements/Text";
import Button from "../elements/Button";

const Login = props => {

    return (
        <Flex >
            <LoginSection>
                
                <Text textAlign="center">로그인</Text>
                
                <InputBox 
                    margin="35px 0 0 0"
                    type="text"
                    ph="아이디"
                    width="90%"
                    height="54px"
                    border="1px solid #ccc"
                    fontSize="14px"
                    outline="none"
                    padding="0 0 0 16px"
                />
                <InputBox 
                    margin="12px 0"
                    type="password"
                    ph="비밀번호"
                    width="340px"
                    height="54px"
                    border="1px solid #ccc"
                    fontSize="14px"
                    outline="none"
                />
                <Flex fd="column">
                    <Flex 
                        jc="space-between" 
                        padding="0 0 28px"
                    >
                        <CheckBox>
                            <InputBox 
                                margin="0"
                                type="checkbox" 
                                width="16px" 
                                height="17px" 
                                />
                            <Text fontSize="13px">
                                보안접속
                            </Text>
                        </CheckBox>
                        <Search>
                            <Text fontSize="13px">
                                아이디 찾기 | 비밀번호 찾기
                            </Text>
                        </Search>
                    </Flex>
                </Flex>
                <Button
                    margin="0 0 12px 0 "
                    width="340px"
                    height="54px"
                    fontSize="16px"
                    bg="#5F0080"
                    
                >
                    <Text color="white" textAlign="center">로그인</Text>
                </Button>
                <Button
                    width="340px"
                    height="54px"
                    bg="white"
                    border="1px solid #5F0080"
                    // _onClick={() => ()}
                >
                    <Text color="#5F0080" textAlign="center">회원가입</Text>
                </Button>
            </LoginSection>
        </Flex>
    )
}

const LoginSection = styled.div`
    width: 340px;
    margin: 0 auto;
    padding-top: 90px;
    letter-spacing: -.6px;
    height: 442px;
    border: 2px solid blue;
    text-align: center;    
`;

const CheckBox = styled.div`
    /* margin: 9px 0 0 0; */
    display: flex;
`;

const Search = styled.div`
    padding: 13px 0 0 0;
`;

export default Login;