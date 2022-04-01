import styled from '@emotion/styled';
import React from 'react';
import { useRouter } from 'next/router';
import youniverseLogo from '@assets/logo.svg';
import Image from 'next/image';

function Header() {
  const router = useRouter();

  const handleLogoClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    router.push('/');
  };

  return (
    <Styled.LogoWrapper>
      <Styled.Logo onClick={handleLogoClick} />
    </Styled.LogoWrapper>
  );
}

export default Header;

const Styled = {
  LogoWrapper: styled.header`
    margin-top: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  `,
  Logo: styled.button`
    background: url(${youniverseLogo.src}) no-repeat;
    width: 150px;
    height: 56px;
  `,
};
