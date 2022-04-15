import IntroduceSentence from '@components/common/IntroduceSentence';
import styled from '@emotion/styled';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import Image from 'next/image';
import CenterStar from '@assets/center-star.svg';
import UnderlinedButton from '@src/components/common/UnderlinedButton';
import { flexColumnCenter } from '@src/lib/style/mixin';
import Header from '@src/components/common/Header';
import NameInput from '@src/components/common/NameInput';
import PwInput from '@src/components/common/PwInput';
import ToastMessage from '@src/components/common/ToastMessage';
import { useState } from 'react';
import { TOAST_DELAY } from '@src/constants';
import { validate } from '@src/utils/validations/nameValidator';

function login() {
  const router = useRouter();
  const [toast, setToast] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!(e.target instanceof HTMLFormElement)) return;
    const $name = e.target.elements[0] as HTMLInputElement;
    const $pw = e.target.elements[1] as HTMLInputElement;

    try {
      if (!validate('name', $name.value) || !validate('pw', $pw.valueAsNumber)) return;
    } catch (error) {
      setToast(true);
      if (!toast) {
        setTimeout(() => {
          setToast(false);
        }, TOAST_DELAY);
      }
      return;
    }

    // @TODO : POST
    router.push('/mylink');
  };

  return (
    <Styled.Root>
      <Header></Header>
      <IntroduceSentence />
      <Styled.ImageWrapper>
        <Image src={CenterStar} alt="star" />
      </Styled.ImageWrapper>
      <Styled.Form onSubmit={handleSubmit}>
        <Styled.NameWrapper>
          <label htmlFor="name-input">당신의 우주 이름을 적어주세요.</label>
          <NameInput valid={false} />
        </Styled.NameWrapper>
        <Styled.PwWrapper>
          <label htmlFor="pw-input">비밀번호 숫자 4자리를 입력해주세요.</label>
          <PwInput valid={false} />
        </Styled.PwWrapper>
        <UnderlinedButton>생성</UnderlinedButton>
      </Styled.Form>
      {toast && <ToastMessage>우주 이름이나 비밀번호를 확인해주세요.</ToastMessage>}
    </Styled.Root>
  );
}

export default login;

const Styled = {
  Root: styled.div`
    ${flexColumnCenter}
    position: relative;

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
  `,
  PwWrapper: styled.div`
    width: 100%;
    margin-bottom: 51px;
  `,
  Form: styled.form`
    font-size: 15px;
    color: ${({ theme }) => theme.color.white};
    ${flexColumnCenter};
    width: 80%;

    label {
      margin-bottom: 20px;
      display: block;
    }
  `,
};
