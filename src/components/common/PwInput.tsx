import { REGEXP } from '@src/utils/regexp';
import { pwValidator } from '@src/validation/pwValidator';
import React from 'react';
import { useState } from 'react';
import styled from '@emotion/styled';
import { MESSAGE } from '@src/constants/message';

function PwInput({ valid = true }: { valid?: boolean }) {
  const [pw, setPw] = useState<number>();
  const [messageForPw, setMessageForPw] = useState('');

  const handlePwChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (REGEXP.NOT_NUMBER_IN_NUMBER_INPUT.test(e.target.value)) return;

    const value = e.target.valueAsNumber;

    if (value.toString().length > 4) return;

    try {
      if (pwValidator(value)) {
        setMessageForPw(MESSAGE.VALID_PW);
      }
    } catch ({ message }) {
      setMessageForPw(message);
    }

    setPw(value);
  };

  let keyOnKeyDown: string;
  let valueAfterKeyDown: string;
  const handlePwKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!(e.target instanceof HTMLInputElement)) return;
    keyOnKeyDown = e.key;
    const value = e.target.value;

    if (REGEXP.NOT_NUMBER_IN_NUMBER_INPUT.test(keyOnKeyDown) && keyOnKeyDown.length === 1) {
      valueAfterKeyDown = value;
      return;
    }
  };

  const handlePwInput = (e: React.FormEvent<HTMLInputElement>) => {
    if (!(e.target instanceof HTMLInputElement)) return;

    if (REGEXP.NOT_NUMBER_IN_NUMBER_INPUT.test(keyOnKeyDown) && keyOnKeyDown.length === 1) {
      e.target.value = valueAfterKeyDown;
      return;
    }
  };

  return (
    <>
      <Styled.Input
        id="pw-input"
        type="number"
        placeholder="ex. 1234"
        value={pw || ''}
        onChange={handlePwChange}
        onKeyDown={handlePwKeyPress}
        onInput={handlePwInput}
      />
      {valid && <Styled.Message messageForPw={messageForPw}>{messageForPw}</Styled.Message>}
    </>
  );
}

export default PwInput;

const Styled = {
  Input: styled.input`
    display: block;
    background: transparent;
    outline: 0;
    border: 0;
    width: 100%;
    border-bottom: 1px solid white;
    padding-bottom: 10px;
    color: white;

    &::placeholder {
      color: #565656;
    }
  `,
  Message: styled.p<{ messageForPw: string }>`
    color: ${({ messageForPw }) => (messageForPw === MESSAGE.VALID_PW ? 'white' : '#ffc5c5')};
    line-height: 20px;
    height: 10px;
    margin: 5px 0;
    font-size: 10px;
  `,
};
