import React from 'react';
import styled from '@emotion/styled';

interface RoundButtonProps {
  children: string;
  handleClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

function RoundButton({ children, handleClick }: RoundButtonProps) {
  return <Styled.Root onClick={handleClick}>{children}</Styled.Root>;
}

export default RoundButton;

const Styled = {
  Root: styled.button`
    height: 27px;
    border-radius: 50px;
    border: 1px solid white;
    padding: 0 20px;
    background: transparent;
    color: white;
    font-weight: 400;
  `,
};
