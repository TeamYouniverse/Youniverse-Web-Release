import IntroduceSentence from '@components/common/IntroduceSentence';
import styled from '@emotion/styled';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import Image from 'next/image';
import CenterStar from '@assets/center-star.svg';
import UnderlinedButton from '@src/components/common/UnderlinedButton';
import { flexColumnCenter } from '@src/lib/style/mixin';
import { nameValidator } from '@src/validation/nameValidator';
import Header from '@src/components/common/Header';
import NameInput from '@src/components/common/NameInput';
import PwInput from '@src/components/common/PwInput';
import { pwValidator } from '@src/validation/pwValidator';

function Signup() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!(e.target instanceof HTMLFormElement)) return;
    const $name = e.target.elements[0] as HTMLInputElement;
    const $pw = e.target.elements[1] as HTMLInputElement;

    try {
      if (!nameValidator($name.value) || !pwValidator($pw.valueAsNumber)) return;
    } catch (error) {
      return;
    }

    // @TODO : POST
    router.push('/mylink');
  };

  return (
    <Styled.Root>
      <Header />
      <IntroduceSentence />
      <Styled.ImageWrapper>
        <Image src={CenterStar} alt="star" />
      </Styled.ImageWrapper>
      <Styled.Form onSubmit={handleSubmit}>
        <Styled.NameWrapper>
          <label htmlFor="name-input">당신의 우주 이름을 정해주세요.</label>
          <NameInput />
        </Styled.NameWrapper>
        <Styled.PwWrapper>
          <label htmlFor="pw-input">비밀번호 숫자 4자리를 입력해주세요.</label>
          <PwInput />
        </Styled.PwWrapper>
        <UnderlinedButton>생성</UnderlinedButton>
      </Styled.Form>
    </Styled.Root>
  );
}

export default Signup;

const Styled = {
  Root: styled.div`
    ${flexColumnCenter}

    & > header {
      margin-bottom: 76px;
    }
  `,
  ImageWrapper: styled.div`
    margin-bottom: 50px;
  `,
  NameWrapper: styled.div`
    width: 100%;
    margin-bottom: 21px;

    /* & > p {
      line-height: 20px;
      height: 10px;
      margin: 5px 0;
      font-size: 10px;
      color: #ffc5c5;
    } */
  `,
  PwWrapper: styled.div`
    width: 100%;
    margin-bottom: 51px;
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
  `,
};
