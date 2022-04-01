import styled from '@emotion/styled';
import React from 'react';

interface iButtonProps {
  title: String;
  onClick: () => void;
}

function Button({ title, onClick }: iButtonProps) {
  const data = {};
  return <Styled.CommonButton onClick={onClick}>{title}</Styled.CommonButton>;
}

export default Button;

const Styled = {
  CommonButton: styled.button`
    color: white;
    border-bottom: 1px solid white;
    padding: 0px 11px 8px 11px;
    font-family: 'JejuMyeongjo';
  `,
};
