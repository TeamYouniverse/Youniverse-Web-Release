import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';

interface ToastMessageProps {
  children: React.ReactNode;
}

function ToastMessage({ children }: ToastMessageProps) {
  return (
    <Styled.Root>
      <Styled.Message>{children}</Styled.Message>
    </Styled.Root>
  );
}

export default ToastMessage;

const toastAnimation = keyframes`
  0% {
    visibility: hidden;
    opacity: 0;
  }
  10% {
    visibility: visible;
    opacity: 1;
  }
  80% {
    visibility: visible;
    opacity: 1;
  }
  100% {
    visibility: hidden;
    opacity: 0;
  }
`;

const Styled = {
  Root: styled.div`
    background: #504f5c;
    border-radius: 11px;
    display: flex;
    align-items: center;
    text-align: center;
    visibility: hidden;
    animation-delay: 0.5s;
    animation-duration: 3s;
    animation-name: ${toastAnimation};
  `,
  Message: styled.p`
    width: 100%;
    font-size: 14px;
    line-height: 150%;
    color: #ffffff;
    margin: 12px;
  `,
};
