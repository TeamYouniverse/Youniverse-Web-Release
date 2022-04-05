import Header from '@src/components/common/Header';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import verifyPlanet from '@assets/verify_planet.svg';
import styled from '@emotion/styled';
import RoundButton from '@src/components/common/RoundButton';
import UnderlinedButton from '@src/components/common/UnderlinedButton';
import { flexColumnCenter } from '@src/lib/style/mixin';
import { useRouter } from 'next/router';
import Input from '@src/components/common/Input';
import ToastMessage from '@src/components/common/ToastMessage';
import { PW_MINLENGTH, TOAST_DELAY } from '@src/constants';
import useInput from '@src/hooks/useInput';

function verify() {
  const router = useRouter();
  const [isWrong, setIsWrong] = useState(false);
  const [password, setPassword, onChange] = useInput<string>('');
  const [isDisabled, setIsDisabled] = useState(false);

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    router.push('/');
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // @TODO POST 코드 작성
    setIsWrong(true);
    setTimeout(() => {
      setIsWrong(false);
    }, TOAST_DELAY);
  };

  useEffect(() => {
    const passwordLength = password.length;
    if (passwordLength < PW_MINLENGTH) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [password]);
  return (
    <>
      <Header />
      <Styled.Main>
        <Styled.ImageSection>
          <Image src={verifyPlanet} alt="관리자 인증 페이지 행성 사진" />
        </Styled.ImageSection>
        <Styled.Form onSubmit={handleSubmit}>
          <label htmlFor="pw-input" className="label">
            비밀번호를 입력해주세요.
          </label>
          <Input
            id="pw-input"
            type="number"
            placeholder="ex.0000"
            value={password}
            sort="middle"
            onChange={onChange}
            maxLength={4}
          />
        </Styled.Form>
        <UnderlinedButton handleClick={handleSubmit} disabled={isDisabled}>
          확인
        </UnderlinedButton>
        <Styled.AdditionalSection>
          <p className="additional-text">
            우주의 주인이 아니신가요? <br /> 나만의 우주를 만들어보세요.
          </p>
          <RoundButton handleClick={clickHandler}>우주 생성하러 가기</RoundButton>
          {isWrong && (
            <ToastMessage>
              틀린 비밀번호입니다. <br /> 다시 입력해주세요.
            </ToastMessage>
          )}
        </Styled.AdditionalSection>
      </Styled.Main>
    </>
  );
}

export default verify;
const Styled = {
  Main: styled.main`
    width: 80vw;
    max-width: 500px;
    color: white;
    margin-top: 4.84vh;
    ${flexColumnCenter};
    @media (max-width: 767px) {
      width: 80vw;
      max-width: 400px;
    }
  `,
  ImageSection: styled.section`
    margin-bottom: 4.84vh;
    width: 100%;
    & * {
      width: 100%;
    }
  `,
  Form: styled.form`
    ${flexColumnCenter};
    font-size: 15px;
    width: 75%;
    .label {
      margin-bottom: 2.96vh;
    }
    margin-bottom: 4.84vh;
    @media (max-width: 315px) {
      font-size: 13px;
    }
  `,
  AdditionalSection: styled.section`
    width: 75%;
    ${flexColumnCenter};
    margin-top: 11.25vh;
    font-size: 15px;
    .additional-text {
      margin-bottom: 3.59vh;
      line-height: 200%;
      @media (max-width: 767px) {
        line-height: 150%;
      }
    }
    @media (max-width: 315px) {
      font-size: 13px;
    }
  `,
};
