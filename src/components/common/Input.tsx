import React, { ChangeEvent, InputHTMLAttributes } from 'react';
import styled from '@emotion/styled';

type Align = 'left' | 'middle';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'maxLength'> {
  className?: string;
  align: Align;
  valid?: boolean;
  maxLength?: number;
  [key: string]: any;
}
function Input({ className, align, valid = true, maxLength, onChange, ...props }: InputProps) {
  const handleChangeWithMaxLength = (e: ChangeEvent<HTMLInputElement>) => {
    if (String(e.target.value).length <= maxLength && typeof e.target.valueAsNumber === 'number') {
      onChange(e);
    }
  };

  return (
    <>
      <Styled.Input
        className={className}
        align={align}
        valid={valid}
        onChange={maxLength ? handleChangeWithMaxLength : onChange}
        {...props}
      />
    </>
  );
}

export default Input;

const Styled = {
  Input: styled.input<InputProps>`
    display: block;
    background: transparent;
    outline: 0;
    border: 0;
    width: 100%;
    border-bottom: 1px solid #565656;
    padding-bottom: 10px;
    color: #565656;
    &:focus {
      color: white;
      border-bottom: ${({ valid }) => (valid ? '1px solid #FFFFFF' : '1px solid #ffc5c5')};
    }
    text-align: ${({ align }) => (align === 'middle' ? 'center' : 'left')};
    &::placeholder {
      color: #565656;
    }
  `,
};
