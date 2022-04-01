import React, { useState } from 'react';
import styled from '@emotion/styled';
import mainPlanet from '@assets/planet_main.svg';
import happyPlanet from '@assets/planet_happy.svg';
import sadPlanet from '@assets/planet_sad.svg';
import sorryPlanet from '@assets/planet_sorry.svg';
import touchedPlanet from '@assets/planet_touched.svg';
import verifyBtn from '@assets/verifyBtn.svg';
import { useRouter } from 'next/router';

function UserSpace() {
  // @TODO 서버 연결 이후 initialProps로 받아오도록 수정
  const [userName, setUserName] = useState('고양이냥');
  const router = useRouter();
  const {
    query: { id },
  } = router;

  const onClickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const type = e.currentTarget.id;
    console.log(type);
    switch (type) {
      case 'main':
        router.push(`/${id}/write`);
        break;
      case 'happy':
        router.push(`/${id}/happy`);
        break;
      case 'sad':
        router.push(`/${id}/sad`);
        break;
      case 'sorry':
        router.push(`/${id}/sorry`);
        break;
      case 'touched':
        router.push(`/${id}/touched`);
        break;
      case 'verify':
        router.push(`/${id}/verify`);
        break;
    }
  };
  return (
    <Styled.mainPlanetBtn2>
      <Styled.mainPlanetBtn id="main" onClick={onClickHandler} />
      <Styled.planetTitle>{userName}</Styled.planetTitle>
      <Styled.happyPlanetBtn id="happy" onClick={onClickHandler} />
      <Styled.sadPlanetBtn id="sad" onClick={onClickHandler} />
      <Styled.sorryPlanetBtn id="sorry" onClick={onClickHandler} />
      <Styled.touchedPlanetBtn id="touched" onClick={onClickHandler} />
      <Styled.verifyBtn id="verify" onClick={onClickHandler} />
    </Styled.mainPlanetBtn2>
  );
}

export default UserSpace;

const Styled = {
  mainPlanetBtn2: styled.main`
    position: relative;
    display: flex;
    justify-content: center;
    width: 255px;
    height: 255px;
    top: 33vh;
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
  mainPlanetBtn: styled.button`
    width: 100%;
    height: 100%;
    background: url(${mainPlanet.src});
    background-size: cover;
    top: 0;
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
