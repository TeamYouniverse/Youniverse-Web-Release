import IntroduceSentence from '@components/common/IntroduceSentence';
import styled from '@emotion/styled';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import { useState } from 'react';

function Signin() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [pw, setPw] = useState<number>();

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handlePwChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPw(e.target.valueAsNumber);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // @TODO : POST
    router.push('/mylink');
  };

  return (
    <Styled.Root>
      <IntroduceSentence />
      <Styled.Form onSubmit={handleSubmit}>
        <label htmlFor="name-input">당신의 우주 이름을 정해주세요.</label>
        <input
          id="name-input"
          type="text"
          placeholder="ex. 고양이"
          value={name}
          onChange={handleNameChange}
        />
        <label htmlFor="pw-input">비밀번호 숫자 4자리를 입력해주세요.</label>
        <input
          id="pw-input"
          type="number"
          placeholder="ex. 1234"
          value={pw}
          onChange={handlePwChange}
        />
        <button>생성</button>
      </Styled.Form>
    </Styled.Root>
  );
}

export default Signin;

const Styled = {
  Root: styled.div``,
  Form: styled.form`
    font-size: 15px;
    color: white;

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
    }

    input::placeholder {
      color: #565656;
    }

    input:nth-child(1) {
      margin-bottom: 41px;
    }

    input:nth-child(2) {
      margin-bottom: 72px;
    }
  `,
};
