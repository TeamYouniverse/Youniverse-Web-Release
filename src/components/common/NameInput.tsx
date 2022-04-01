import { nameValidator } from '@src/validation/nameValidator';
import React from 'react';
import { useState } from 'react';

function NameInput() {
  const [name, setName] = useState('');
  const [messageForName, setMessageForName] = useState('');

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      if (nameValidator(e.target.value)) {
        setMessageForName('');
      }
    } catch ({ message }) {
      setMessageForName(message);
    }
    setName(e.target.value);
  };

  return (
    <>
      <input
        id="name-input"
        type="text"
        placeholder="ex. 고양이"
        value={name}
        onChange={handleNameChange}
      />
      <p>{messageForName}</p>
    </>
  );
}

export default NameInput;
