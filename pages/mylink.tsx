import Header from '@src/components/common/Header';
import React, { useState } from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import MainPlanet from '@assets/planet_main.svg';
import { flexColumnCenter } from '@src/lib/style/mixin';
import CopyIcon from '@assets/copy_icon.svg';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import UnderlinedButton from '@src/components/common/UnderlinedButton';
import { useRouter } from 'next/router';
import ToastMessage from '@src/components/common/ToastMessage';
import { TOAST_DELAY } from '@src/constants';

function mylink() {
  const [toast, setToast] = useState(false);
  const router = useRouter();

  const handleCopy = () => {
    setToast(true);

    if (toast) return;
    setTimeout(() => {
      setToast(false);
    }, TOAST_DELAY);
  };

  const handleStart = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // @TODO routing 시키기
    // router.push('/')
  };

  return (
    <Styled.Root>
      <Header />
      <p>의진 우주가 탄생했습니다.</p>
      <Styled.Main>
        <Styled.ImageWrapper>
          <Image src={MainPlanet} alt="Main-Planet" width="188px" height="188px" />
        </Styled.ImageWrapper>
        <p>링크를 공유하여 감정으로 우주를 채워보세요.</p>
        <CopyToClipboard text="http://youniverse.kimiw1.ac.kr" onCopy={handleCopy}>
          <Styled.CopyButton>
            <div>http://youniverse.kimiw1.ac.kr</div>
            <Styled.CopyIcon></Styled.CopyIcon>
          </Styled.CopyButton>
        </CopyToClipboard>
        <UnderlinedButton handleClick={handleStart}>우주 진입</UnderlinedButton>
      </Styled.Main>
      {toast && <ToastMessage>주소를 복사했습니다.</ToastMessage>}
    </Styled.Root>
  );
}

export default mylink;

const Styled = {
  Root: styled.div`
    width: 80%;
    margin: auto;
    ${flexColumnCenter}
    color: white;
    & > p {
      font-size: 15px;
    }
    & > header {
      margin-bottom: 76px;
    }
  `,

  Main: styled.main`
    ${flexColumnCenter}
  `,

  ImageWrapper: styled.div`
    margin: 52px 0 58px;
  `,
  CopyButton: styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: inherit;
    width: 262px;
    border-bottom: 1px solid white;
    margin: 31px 0 45px;
  `,
  CopyIcon: styled.div`
    background: url(${CopyIcon.src});
    width: 38px;
    height: 38px;
  `,
};
