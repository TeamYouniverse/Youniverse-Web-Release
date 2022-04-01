import styled from '@emotion/styled';
import React from 'react';

interface ButtonProps {
  children: String;
  handleClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

function UnderlinedButton({ children, handleClick }: ButtonProps) {
  return <Styled.Root onClick={handleClick}>{children}</Styled.Root>;
}

export default UnderlinedButton;

const Styled = {
  Root: styled.button`
    color: white;
    border-bottom: 1px solid white;
    padding: 0px 11px 8px 11px;
    font-size: 14px;
  `,
};
