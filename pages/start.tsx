import styled from '@emotion/styled';
import Header from '@src/components/common/Header';
import IntroduceSentence from '@src/components/common/IntroduceSentence';
import RoundButton from '@src/components/common/RoundButton';
import UnderlinedButton from '@src/components/common/UnderlinedButton';
import React from 'react';
import Image from 'next/image';
import planetImage from '@assets/planet_main.svg';
import { useRouter } from 'next/router';

function start() {
  const router = useRouter();

  return (
    <>
      <Header />
      <Styled.Main>
        <Styled.TextWrapper>
          <IntroduceSentence />
          <p>우선 우주를 만들러 가볼까요?</p>
        </Styled.TextWrapper>
        <Styled.ButtonWrapper>
          <UnderlinedButton
            onClick={() => {
              router.push('/signup');
            }}
          >
            시작
          </UnderlinedButton>
          <RoundButton
            handleClick={() => {
              router.push('/login');
            }}
          >
            이미 우주가 있다면
          </RoundButton>
        </Styled.ButtonWrapper>
        <Styled.PlanetWrapper>
          <Image src={planetImage} alt="planet image" />
        </Styled.PlanetWrapper>
      </Styled.Main>
    </>
  );
}

export default start;

const Styled = {
  Main: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,

  TextWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: relative;
    top: 20vh;
    height: 35vh;
    z-index: 10;

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
    z-index: 10;
  `,

  PlanetWrapper: styled.div`
    display: flex;
    justify-content: center;
    position: fixed;
    bottom: -150px;
    width: 70vw;

    @media (max-width: 413px) {
      bottom: -130px;
      width: 243px;
    }
  `,
};
