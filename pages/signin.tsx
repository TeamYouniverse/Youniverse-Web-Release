import IntroduceSentence from '@components/common/IntroduceSentence';
import styled from '@emotion/styled';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import CenterStar from '@assets/center-star.svg';
import UnderlinedButton from '@src/components/common/UnderlinedButton';
import { flexColumnCenter } from '@src/lib/style/mixin';
import { signinValidator } from '@src/validation/signinValidator';

function Signin() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [messageForName, setMessageForName] = useState('');
  const [pw, setPw] = useState<number>();
  const [messageForPw, setMessageForPw] = useState('');

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      if (signinValidator(e.target.value)) {
        setMessageForName('');
      }
    } catch ({ message }) {
      setMessageForName(message);
    }
    setName(e.target.value);
  };

  const handlePwChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.valueAsNumber;
    if (value.toString().length > 4) return;

    setPw(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (messageForName || messageForPw) return;
    // @TODO : POST

    router.push('/mylink');
  };

  return (
    <Styled.Root>
      <IntroduceSentence />
      <Styled.ImageWrapper>
        <Image src={CenterStar} alt="star" />
      </Styled.ImageWrapper>
      <Styled.Form onSubmit={handleSubmit}>
        <Styled.NameWrapper>
          <label htmlFor="name-input">당신의 우주 이름을 정해주세요.</label>
          <input
            id="name-input"
            type="text"
            placeholder="ex. 고양이"
            value={name}
            onChange={handleNameChange}
          />
          <p>{messageForName}</p>
        </Styled.NameWrapper>
        <Styled.PwWrapper>
          <label htmlFor="pw-input">비밀번호 숫자 4자리를 입력해주세요.</label>
          <input
            id="pw-input"
            type="number"
            placeholder="ex. 1234"
            value={pw || ''}
            onChange={handlePwChange}
          />
          <p></p>
        </Styled.PwWrapper>
        <UnderlinedButton>생성</UnderlinedButton>
      </Styled.Form>
    </Styled.Root>
  );
}

export default Signin;

const Styled = {
  Root: styled.div`
    ${flexColumnCenter}
  `,
  ImageWrapper: styled.div`
    margin-bottom: 50px;
  `,
  NameWrapper: styled.div`
    width: 100%;
    margin-bottom: 21px;

    & > p {
      line-height: 20px;
      height: 10px;
      margin: 5px 0;
      font-size: 10px;
      color: #ffc5c5;
    }
  `,
  PwWrapper: styled.div`
    width: 100%;
    margin-bottom: 72px;

    & > p {
      line-height: 20px;
      height: 10px;
      margin: 5px 0;
    }
  `,
  Form: styled.form`
    font-size: 15px;
    color: white;
    ${flexColumnCenter};
    width: 100%;

    label {
      margin-bottom: 20px;
      display: block;
    }

    input {
      display: block;
      background: transparent;
      outline: 0;
      border: 0;
      width: 100%;
      border-bottom: 1px solid white;
      padding-bottom: 10px;
      color: white;
    }

    input::placeholder {
      color: #565656;
    }
  `,
};
