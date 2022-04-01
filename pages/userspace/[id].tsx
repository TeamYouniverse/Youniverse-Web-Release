import React from 'react';
import styled from '@emotion/styled';
import mainPlanet from '@assets/planet_main.svg';
import happyPlanet from '@assets/planet_happy.svg';
import sadPlanet from '@assets/planet_sad.svg';
import sorryPlanet from '@assets/planet_sorry.svg';
import touchedPlanet from '@assets/planet_touched.svg';
import verifyBtn from '@assets/verifyBtn.svg';

function UserSpace() {
  return (
    <Styled.mainPlanetBtn>
      <Styled.planetTitle>고양이냥</Styled.planetTitle>
      <Styled.happyPlanetBtn />
      <Styled.sadPlanetBtn />
      <Styled.sorryPlanetBtn />
      <Styled.touchedPlanetBtn />
      <Styled.verifyBtn />
    </Styled.mainPlanetBtn>
  );
}

export default UserSpace;

const Styled = {
  mainPlanetBtn: styled.button`
    width: 255px;
    height: 255px;
    background: url(${mainPlanet.src});
    background-size: cover;
    position: relative;
    display: flex;
    justify-content: center;
    top: 33vh;
    cursor: pointer;
    & * {
      position: absolute;
      cursor: pointer;
    }
    @media (min-width: 768px) {
      width: 280px;
      height: 280px;
    }
    @media (max-width: 315px) {
      width: 200px;
      height: 200px;
    }
  `,
  planetTitle: styled.h1`
    color: white;
    font-size: 16px;
    top: -19%;
    @media (max-width: 413px) {
      top: -20%;
    }
    @media (min-width: 768px) {
      top: -19%;
      font-size: 18px;
    }
  `,
  happyPlanetBtn: styled.button`
    width: 51px;
    height: 51px;
    background: url(${happyPlanet.src});
    background-size: cover;
    top: -9vh;
    right: -15%;
    @media (max-width: 413px) {
      top: -10vh;
      right: -9vw;
    }
    @media (min-width: 768px) {
      width: 61px;
      height: 61px;
      right: -29%;
      top: -9vh;
    }
  `,
  sadPlanetBtn: styled.button`
    width: 44px;
    height: 44.44px;
    background: url(${sadPlanet.src});
    background-size: cover;
    right: -10%;
    top: 34vh;
    @media (max-width: 413px) {
      right: -8vw;
      top: 42vh;
    }
    @media (min-width: 768px) {
      width: 55px;
      height: 55px;
      right: -22%;
      top: 34vh;
    }
  `,
  sorryPlanetBtn: styled.button`
    width: 38px;
    height: 38px;
    background: url(${sorryPlanet.src});
    background-size: cover;
    top: -20vh;
    right: 91%;
    @media (max-width: 413px) {
      top: -21vh;
      right: 65vw;
    }
    @media (min-width: 768px) {
      width: 48px;
      height: 48px;
      right: 108%;
      top: -18vh;
    }
  `,
  touchedPlanetBtn: styled.button`
    width: 70px;
    height: 70.7px;
    background: url(${touchedPlanet.src});
    background-size: cover;
    top: 40vh;
    left: -6%;
    @media (max-width: 413px) {
      bottom: -20vh;
      left: -5vw;
    }
    @media (min-width: 768px) {
      width: 85px;
      height: 85px;
      left: -33%;
      top: 39vh;
    }
  `,
  verifyBtn: styled.button`
    width: 49px;
    height: 49px;
    background: url(${verifyBtn.src});
    background-size: cover;
    top: 60vh;
    left: 104%;
    @media (max-width: 413px) {
      top: 57vh;
      left: 63vw;
    }
    @media (min-width: 768px) {
      width: 59px;
      height: 59px;
      top: 60vh;
      left: 124%;
    }
  `,
};
