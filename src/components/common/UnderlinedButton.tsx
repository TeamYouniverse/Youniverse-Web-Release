import styled from '@emotion/styled';
import { css } from '@emotion/react';
import React from 'react';

interface ButtonProps {
  children: string;
  [key: string]: any;
}

function UnderlinedButton({ children, ...props }: ButtonProps) {
  return <Styled.Root {...props}>{children}</Styled.Root>;
}
export default UnderlinedButton;

const Styled = {
  Root: styled.button`
    color: white;
    border-bottom: 1px solid white;
    padding: 0px 11px 8px 11px;
    font-size: 14px;

    :disabled {
      color: #565656;
      border-bottom: 1px solid #565656;
    }
  `,
};
