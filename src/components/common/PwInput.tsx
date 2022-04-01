import { REGEXP } from '@src/utils/regexp';
import { pwValidator } from '@src/validation/pwValidator';
import React from 'react';
import { useState } from 'react';

function PwInput() {
  const [pw, setPw] = useState<number>();
  const [messageForPw, setMessageForPw] = useState('');

  const handlePwChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (REGEXP.NOT_NUMBER_IN_NUMBER_INPUT.test(e.target.value)) return;

    const value = e.target.valueAsNumber;

    if (value.toString().length > 4) return;

    try {
      if (pwValidator(value)) {
        setMessageForPw('');
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
      <input
        id="pw-input"
        type="number"
        placeholder="ex. 1234"
        value={pw || ''}
        onChange={handlePwChange}
        onKeyDown={handlePwKeyPress}
        onInput={handlePwInput}
      />
      <p>{messageForPw}</p>
    </>
  );
}

export default PwInput;
