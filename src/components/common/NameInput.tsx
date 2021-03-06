import React from 'react';
import { useState } from 'react';
import styled from '@emotion/styled';
import { MESSAGE } from '@src/constants/message';
import { validate } from '@src/utils/validations/nameValidator';

function NameInput({ valid = true }: { valid?: boolean }) {
  const [name, setName] = useState('');
  const [messageForName, setMessageForName] = useState('');

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      if (validate('name', e.target.value)) {
        setMessageForName(MESSAGE.VALID_NAME);
      }
    } catch ({ message }) {
      setMessageForName(message);
    }
    setName(e.target.value);
  };

  return (
    <>
      <Styled.Input
        id="name-input"
        type="text"
        placeholder="ex. 고양이"
        value={name}
        onChange={handleNameChange}
      />
      {valid && <Styled.Message messageForName={messageForName}>{messageForName}</Styled.Message>}
    </>
  );
}

export default NameInput;

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
  Message: styled.p<{ messageForName: string }>`
    color: ${({ messageForName }) => (messageForName === MESSAGE.VALID_NAME ? 'white' : '#ffc5c5')};
    line-height: 20px;
    height: 10px;
    margin: 5px 0;
    font-size: 10px;
  `,
};
