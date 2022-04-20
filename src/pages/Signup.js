import React, { useState } from "react";
import styled from "styled-components";

import Flex from "../elements/Flex";
import InputBox from "../elements/InputBox";
import Text from "../elements/Text";
import Button from "../elements/Button";
import PopupDom from "../shared/PopupDom";
import PopupPostCode from "../components/PopupPostCode";
import { api } from "../shared/api";

import { actionCreators as userActions } from "../redux/modules/user";
import { useDispatch } from "react-redux";

const Signup = props => {
    const dispatch = useDispatch();

    //ref형태의 리스트 사용할게용
    const refID = React.useRef();
    const refPWD = React.useRef();
    const refPWDC = React.useRef();
    const refNAME = React.useRef();
    const refADDR = React.useRef();

    //   state 객체형태 사용
    const [checks, setCheck] = React.useState({
        idSubText: null,
        nameSubText: null,
        pwdSubText: null,
        pwdcSubText: null,
    });

    const { idSubText, pwdSubText, pwdcSubText, nameSubText, addRSubText} = checks;

    const space_pattern = /\s/g; // 공백 확인 정규표현식
    

    function isEmail(asValue) {
        var regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
        
        return regExp.test(asValue); // 형식에 맞는 경우 true 리턴
    }


    // 비밀번호 길이 확인
    const pwdCheck = () => {
        const pwd = refPWD.current.value;
        if (pwd.length < 4) {
            return false;
        } else {
            return true;
        }
    };

    //회원가입 이벤트입니다
    const signUpBtn = async () => {
        const id = refID.current.value;
        const pwd = refPWD.current.value;
        const pwdC = refPWDC.current.value;
        const name = refNAME.current.value;
        const address = refADDR.current.value;
        console.log(id, pwd, pwdC, name, address)

        const isSpace = (id + name + pwd + pwdC).match(space_pattern);


        //이메일 형식 체크
        if (isEmail(id) === false) {
            window.alert("아이디 형식이 틀렸습니다.")
            return;
            
        }
            
        if (pwdCheck() === false) {
            window.alert("비번 형식이 틀렸습니다.")
            return;
        } 

        if (pwd !== pwdC) {
            window.alert("비밀번호가 틀립니다.")
            return;
        }
        //띄어쓰기 or 공백 체크
        if (isSpace || !id || !name || !pwd || !pwdC) {
            window.alert("빈 칸 혹은 띄워쓰기가 존재합니다.");
            window.alert("공백 형식이 틀렸습니다.")
            return;
        }

        // // 어떠한 조건이 성립이 안됐을때
        // if (id || pwd || pwdC || name || address) {
        //     window.alert("입력칸을 확인해주세요!");
        //     return;
        // }
        
        dispatch(userActions.signUpMD(id, pwd, pwdC, name, address))
    };

    
    // 팝업창 상태 관리
    // const [isPopupOpen, setIsPopupOpen] = useState(false)
    
    // 팝업창 열기
    // const openPostCode = () => {
    //     setIsPopupOpen(true)
    // }

    // 팝업창 닫기
    // const closePostCode = () => {
    //     setIsPopupOpen(false)
    // }


    

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
                                margin="19px 145px 0 0"
                                type="text"
                                ph="비밀번호를 입력해주세요"
                                width="332px"
                                height="44px"
                                border="1px solid #ccc"
                                fontSize="14px"
                                outline="none"
                                padding="0 0 0 16px"
                                _ref={refID}
                                subText={isEmail}
                            />
                        </IdInput>
                    </Flex>
                    <Flex jc="space-between">
                        <Sort>
                            <Text fontSize="14px" padding="14px 0 0 20px">비밀번호</Text>
                            <Text padding="14px 0 0 0" color="red">*</Text>
                        </Sort>
                        <IdInput>
                            <InputBox 
                                type="password"
                                margin="19px 145px 0 0"
                                ph="비밀번호를 입력해주세요"
                                width="332px"
                                height="44px"
                                border="1px solid #ccc"
                                fontSize="14px"
                                outline="none"
                                padding="0 0 0 16px"
                                _ref={refPWD}
                                subText={pwdSubText}
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
                                type="password"
                                ph="비밀번호를 한번 더 입력해주세요"
                                width="332px"
                                height="44px"
                                border="1px solid #ccc"
                                fontSize="14px"
                                outline="none"
                                padding="0 0 0 16px"
                                _ref={refPWDC}
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
                                _ref={refNAME}
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
                        <InputBox 
                                margin="19px 145px 0 0"
                                type="text"
                                ph="주소를 입력해주세요"
                                width="332px"
                                height="44px"
                                border="1px solid #ccc"
                                fontSize="14px"
                                outline="none"
                                padding="0 0 0 16px"
                                _ref={refADDR}
                        />
                        {/* <IdInput>
                            <div>
                                <Button
                                    type="button"
                                    width="332px"
                                    height="44px"
                                    bg="white"
                                    border="1px solid #5F0080"
                                    fontSize="14px"
                                    cursor="pointer"
                                    margin="19px 145px 0 5px"
                                    _ref={refADDR}
                                    // 버튼 클릭시 팝업 생성
                                    _onClick={openPostCode}
                                    
                                >
                                <Text color="#5F0080" textAlign="center">주소 검색</Text>
                                </Button> */}
                                {/* 팝업 생성 기준 */}
                                {/* <div id='popupDom'>
                                    {isPopupOpen && (
                                        <PopupDom>
                                            <PopupPostCode onClose={closePostCode} />
                                        </PopupDom>
                                    )}
                                </div>
                            </div>
                        </IdInput> */}
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
                    _onClick={() => signUpBtn()}
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