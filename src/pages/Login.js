import React from "react";
import styled from "styled-components";

import Flex from "../elements/Flex";
import InputBox from "../elements/InputBox";
import Text from "../elements/Text";

const Login = props => {

    return (
        <Flex >
            <LoginSection>
                
                
                    <Text >로그인</Text>
                
                
                <InputBox 
                    margin="35px 0 0 0"
                    type="text"
                    ph="아이디"
                    width="100%"
                    height="54px"
                    border="1px solid #ccc"
                    fontSize="14px"
                    outline="none"
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
                보안접속 아이디 찾기 | 비밀번호 찾기
                <InputBox/>
                <InputBox/>
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

export default Login;