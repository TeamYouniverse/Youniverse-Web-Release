import styled from '@emotion/styled';
import Header from '@src/components/common/Header';
import React from 'react';
import Image from 'next/image';
import planetImage from '@assets/planet_main.svg';
import IntroduceSentence from '@src/components/common/IntroduceSentence';

function landing() {
  return (
    <>
      <Header />
      <Styled.Main>
        <Styled.TextWrapper>
          <IntroduceSentence />
          <p>
            나만의 우주를 만들어보세요.
            <br />
            행성이 감정을 담아둘거예요.
          </p>
        </Styled.TextWrapper>
        <Styled.PlanetWrapper>
          <Image src={planetImage} alt="planet image" />
        </Styled.PlanetWrapper>
      </Styled.Main>
    </>
  );
}

export default landing;

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
    top: 25vh;
    height: 35vh;
    z-index: 10;

    & p {
      color: white;
      font-size: 15px;
      line-height: 170%;
      text-align: center;
    }
  `,

  PlanetWrapper: styled.div`
    display: flex;
    justify-content: center;
    position: fixed;
    bottom: -130px;
    width: 243px;
  `,
};
