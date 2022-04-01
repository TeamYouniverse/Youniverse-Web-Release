import styled from '@emotion/styled';
import Header from '@src/components/common/Header';
import React from 'react';
import Image from 'next/image';
import planetImage from '@assets/planet_main.svg';

function landing() {
  return (
    <>
      <Header />
      <Styled.Main>
        <Styled.TextWrapper>
          <p>
            나와 너의 감정 공유의 시간을 행성에 기록하다,
            <br />
            Youniverse
          </p>
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
    height: 20vh;

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
    bottom: -201px;
    /* & * {
      position: fixed;
      bottom: -201px;
    } */
  `,
};
