import styled from '@emotion/styled';
import { css } from '@emotion/react';
import React from 'react';

interface UnderlinedButtonStyledProps {
  isEnabled?: boolean;
}

interface ButtonProps extends UnderlinedButtonStyledProps {
  children: string;
  handleClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

function UnderlinedButton({ children, isEnabled = true, handleClick }: ButtonProps) {
  return (
    <Styled.Root onClick={handleClick} isEnabled={isEnabled}>
      {children}
    </Styled.Root>
  );
}
export default UnderlinedButton;

const Styled = {
  Root: styled.button<UnderlinedButtonStyledProps>`
    ${({ isEnabled }) =>
      isEnabled
        ? css`
            color: white;
            border-bottom: 1px solid white;
          `
        : css`
            color: #565656;
            border-bottom: 1px solid #565656;
          `}
    padding: 0px 11px 8px 11px;
  `,
};
