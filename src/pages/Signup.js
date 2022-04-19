import React from "react";
import styled from "styled-components";

import Flex from "../elements/Flex";
import InputBox from "../elements/InputBox";
import Text from "../elements/Text";
import Button from "../elements/Button";

import { actionCreators as userActions } from "../redux/modules/user";
import { useDispatch } from "react-redux";

const Signup = props => {
    const dispatch = useDispatch();

    //ref형태의 리스트 사용할게용
    const ref = React.useRef([]);

      // state 객체형태 사용
    const [checks, setCheck] = React.useState({
        idSubText: null,
        nameSubText: null,
        pwdSubText: null,
        pwdcSubText: null,
    });

    // const { idSubText, pwdSubText, pwdcSubText, nameSubText, phoneSubText, addRSubText} = checks;

    //회원가입 이벤트입니다
    const signUpBtn = async () => {
        const id = ref.current[0].value;
        const pwd = ref.current[1].value;
        const pwdc = ref.current[2].value;
        const name = ref.current[3].value;
        const phone = ref.current[4].value;
        const address = ref.current[5].value;
    }

    // const [checks, setCheck]
    return (
        <>
            <Flex>
                <SignupSection>
                    <Text margin="50px 0 0 0" fontSize="28px" fontWeight="700" textAlign="center">회원가입</Text>
                    <PageSub>
                        <Text margin="51px 3px 6px" color="red">*</Text>
                        <Text padding="51px 0 10px" fontSize="12px">필수입력사항</Text>
                    </PageSub>
                    <Flex jc="space-between">
                        <Sort>
                            <Text fontSize="14px" padding="14px 0 0 20px">아이디</Text>
                            <Text padding="14px 0 0 0" color="red">*</Text>
                        </Sort>
                        <IdInput>
                            <InputBox 
                                margin="19px 0 0 0"
                                type="text"
                                ph="예: marketkurly@kurly.com"
                                width="332px"
                                height="44px"
                                border="1px solid #ccc"
                                fontSize="14px"
                                outline="none"
                                padding="0 0 0 16px"
                            />
                            <Button
                                width="120px"
                                height="44px"
                                bg="white"
                                border="1px solid #5F0080"
                                cursor="pointer"
                                margin="19px 20px 0 5px"
                                // _onClick={() => ()}
                            >
                            <Text color="#5F0080" textAlign="center" fontWeight="700">중복확인</Text>
                            </Button>
                        </IdInput>
                    </Flex>
                    <Flex jc="space-between">
                        <Sort>
                            <Text fontSize="14px" padding="14px 0 0 20px">비밀번호</Text>
                            <Text padding="14px 0 0 0" color="red">*</Text>
                        </Sort>
                        <IdInput>
                            <InputBox 
                                margin="19px 145px 0 0"
                                type="text"
                                ph="비밀번호를 입력해주세요"
                                width="332px"
                                height="44px"
                                border="1px solid #ccc"
                                fontSize="14px"
                                outline="none"
                                padding="0 0 0 16px"
                            />
                        </IdInput>
                    </Flex>
                    <Flex jc="space-between">
                        <Sort>
                            <Text fontSize="14px" padding="14px 0 0 20px">비밀번호확인</Text>
                            <Text padding="14px 0 0 0" color="red">*</Text>
                        </Sort>
                        <IdInput>
                            <InputBox 
                                margin="19px 145px 0 0"
                                type="text"
                                ph="비밀번호를 한번 더 입력해주세요"
                                width="332px"
                                height="44px"
                                border="1px solid #ccc"
                                fontSize="14px"
                                outline="none"
                                padding="0 0 0 16px"
                            />
                        </IdInput>
                    </Flex>
                    <Flex jc="space-between">
                        <Sort>
                            <Text fontSize="14px" padding="14px 0 0 20px">이름</Text>
                            <Text padding="14px 0 0 0" color="red">*</Text>
                        </Sort>
                        <IdInput>
                            <InputBox 
                                margin="19px 145px 0 0"
                                type="text"
                                ph="이름을 입력해주세요"
                                width="332px"
                                height="44px"
                                border="1px solid #ccc"
                                fontSize="14px"
                                outline="none"
                                padding="0 0 0 16px"
                            />
                        </IdInput>
                    </Flex>
                    <Flex jc="space-between">
                        <Sort>
                            <Text fontSize="14px" padding="14px 0 0 20px">휴대폰</Text>
                            <Text padding="14px 0 0 0" color="red">*</Text>
                        </Sort>
                        <IdInput>
                            <InputBox 
                                margin="19px 0 0 0"
                                type="text"
                                ph="숫자만 입력해주세요"
                                width="332px"
                                height="44px"
                                border="1px solid #ccc"
                                fontSize="14px"
                                outline="none"
                                padding="0 0 0 16px"
                            />
                            <Button
                                width="120px"
                                height="44px"
                                bg="white"
                                border="1px solid #5F0080"
                                fontSize="14px"
                                cursor="pointer"
                                margin="19px 20px 0 5px"
                                // _onClick={() => ()}
                            >
                            <Text color="#5F0080" textAlign="center" fontWeight="700">인증번호 받기</Text>
                            </Button>
                        </IdInput>
                    </Flex>
                    <Flex jc="space-between">
                        <Sort>
                            <Text fontSize="14px" padding="14px 0 0 20px">주소</Text>
                            <Text padding="14px 0 0 0" color="red">*</Text>
                        </Sort>
                        <IdInput>
                            <Button
                                width="332px"
                                height="44px"
                                bg="white"
                                border="1px solid #5F0080"
                                fontSize="14px"
                                cursor="pointer"
                                margin="19px 145px 0 5px"
                                // _onClick={() => ()}
                            >
                            <Text color="#5F0080" textAlign="center">주소 검색</Text>
                            </Button>
                        </IdInput>
                    </Flex>
                    <PageEnd>
                        <Text fontSize="12px" margin="10px 0 20px 159px">배송지에 따라 상품 정보가 달라질 수 있습니다.</Text>
                    </PageEnd>
                    <Flex>
                    <Button
                    margin="40px 0 60px 0 "
                    width="240px"
                    height="56px"
                    fontSize="16px"
                    bg="#5F0080"
                    cursor="pointer"
                >
                    <Text color="white" textAlign="center" fontWeight="700">가입하기</Text>
                </Button>
                    </Flex>
                </SignupSection>
            </Flex>
        </>
    )
}

const SignupSection = styled.div`
    width: 640px;
    /* border: 2px solid blue; */
    margin: 0 auto;
`;

const PageSub = styled.div`
    border-bottom: 2px solid;
    display: flex;
    justify-content: right;
`;

const PageEnd = styled.div`
    border-bottom: 1px solid #eee;
    display: flex;
    /* justify-content: center; */
`;

const Sort = styled.div`
    display: flex;
`;

const IdInput = styled.div`
    display: flex;
`;

export default Signup;