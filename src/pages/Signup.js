import React from "react";
import styled from "styled-components";

import Flex from "../elements/Flex";
import InputBox from "../elements/InputBox";
import Text from "../elements/Text";
import Button from "../elements/Button";

const Signup = props => {

    return (
        <>
            <Flex>
                <SignupSection>
                    회원가입
                    <PageSub>
                        *필수입력사항
                    </PageSub>
                    <InputBox
                    />
                    <InputBox
                    />
                    <InputBox
                    />
                    <InputBox
                    />
                    <InputBox
                    />
                    <InputBox
                    />
                    <Button
                    />
                    배송지에 따라 상품 정보가 달라질 수 있습니다.
                    <InputBox type="checkbox"/>
                    <InputBox type="checkbox"/>
                    <InputBox type="checkbox"/>
                    <InputBox />
                    <InputBox type="checkbox"/>
                    <InputBox type="checkbox"/>
                    이용약관동의 *
                    <InputBox type="checkbox"/>
                    전체 동의합니다
                    선택항목에 동의하지 않은 경우도 회원가입 및 일반적인 서비스를 이용할 수 있습니다.
                    <InputBox type="checkbox"/>
                    이용약관 동의(필수)
                    약관보기{'>'}
                    <InputBox type="checkbox"/>
                    개인정보 수집이용 동의(필수)
                    약관보기{'>'}
                    <InputBox type="checkbox"/>
                    개인정보 수집이용 동의(선택)
                    약관보기{'>'}
                    <InputBox type="checkbox"/>
                    무료배송,할인쿠폰 등 혜택/정보 수신 동의(선택)
                    <InputBox type="checkbox"/>
                    SMS
                    <InputBox type="checkbox"/>
                    이메일
                    동의 시 한 달간 [5%적립] + [2만원 이상 무료배송] 첫 주문 후 안내
                    <InputBox type="checkbox"/>
                    본인은 만 14세 이상입니다.(필수)
                    <FormFooter>
                        <Button margin="96px 0 0 0">
                            가입하기
                        </Button>
                    </FormFooter>
                    
                    
                </SignupSection>
            </Flex>
        </>
    )
}

const SignupSection = styled.div`
    width: 640px;
    border: 2px solid blue;
`;

const PageSub = styled.div`
    border-bottom: 1px solid;
`;

const FormFooter = styled.div`
    border-top: 1px solid #eee;
    width: 100%;
    height: 96px;
`;

export default Signup;