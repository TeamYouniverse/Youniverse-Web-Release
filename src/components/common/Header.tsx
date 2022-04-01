import styled from '@emotion/styled';
import React from 'react';
import Image from 'next/image';
import logoImage from '@assets/logo.svg';

function Header() {
  return (
    <Styled.ImageWrapper>
      <Image src={logoImage} alt="Youniverse Logo" />
    </Styled.ImageWrapper>
  );
}

export default Header;

const Styled = {
  ImageWrapper: styled.image`
    padding-top: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
};
