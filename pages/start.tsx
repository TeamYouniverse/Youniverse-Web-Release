import styled from '@emotion/styled';
import Header from '@src/components/common/Header';
import IntroduceSentence from '@src/components/common/IntroduceSentence';
import RoundButton from '@src/components/common/RoundButton';
import UnderlinedButton from '@src/components/common/UnderlinedButton';
import React, { useState } from 'react';
import Image from 'next/image';
import planetImage from '@assets/planet_main.svg';
import { useRouter } from 'next/router';
import { keyframes } from '@emotion/react';
import { css } from '@emotion/react';
import { flexColumnCenter } from '@src/lib/style/mixin';

function start() {
  const router = useRouter();
  const [isStartClicked, setIsStartClicked] = useState(false);

  const handleStartClicked = () => {
    setIsStartClicked(true);
    let timer = setTimeout(() => {
      router.push('/signup');
    }, 3000);
    return () => clearTimeout(timer);
  };

  return (
    <>
      <Header />
      <Styled.Main>
        <Styled.TextWrapper>
          <IntroduceSentence />
          <p>우선 우주를 만들러 가볼까요?</p>
        </Styled.TextWrapper>
        <Styled.ButtonWrapper>
          <UnderlinedButton onClick={handleStartClicked}>시작</UnderlinedButton>
          <RoundButton
            handleClick={() => {
              router.push('login');
            }}
          >
            이미 우주가 있다면
          </RoundButton>
        </Styled.ButtonWrapper>
        <Styled.PlanetWrapper isStartClicked={isStartClicked}>
          <Image src={planetImage} alt="planet image" />
        </Styled.PlanetWrapper>
      </Styled.Main>
    </>
  );
}

export default start;

const planetAnimation = keyframes`
  to {
    opacity: 0.5;
    bottom: -300px;
  }
`;

const Styled = {
  Main: styled.main`
    ${flexColumnCenter}
  `,

  TextWrapper: styled.div`
    ${flexColumnCenter}
    justify-content: space-between;
    position: relative;
    top: 20vh;
    height: 35vh;
    z-index: 1;

    & p {
      color: white;
      font-size: 15px;
      text-align: center;
    }
  `,

  ButtonWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 13vh;
    position: fixed;
    bottom: 0px;
    margin-bottom: 5vh;
    z-index: 2;
  `,

  PlanetWrapper: styled.div<{ isStartClicked: boolean }>`
    display: flex;
    justify-content: center;
    position: fixed;
    bottom: -150px;
    width: 70vw;

    @media (max-width: 413px) {
      bottom: -130px;
      width: 243px;
    }

    ${(props) =>
      props.isStartClicked
        ? css`
            animation-duration: 3s;
            animation-name: ${planetAnimation};
            animation-fill-mode: forwards;
          `
        : { visibility: 'visible' }}
  `,
};
