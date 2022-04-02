import styled from '@emotion/styled';
import Header from '@src/components/common/Header';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import planetImage from '@assets/planet_main.svg';
import IntroduceSentence from '@src/components/common/IntroduceSentence';
import Message from '@src/components/Landing/Message';

function landing() {
  const router = useRouter();
  const [order, setOrder] = useState<number>(1);

  useEffect(() => {
    setInterval(() => {
      setOrder(order + 1);
      setTimeout(() => {
        router.push('/onboarding');
      }, 1500);
    }, 1500);
  }, []);

  return (
    <>
      <Header />
      <Styled.Main>
        <Styled.TextWrapper>
          <IntroduceSentence />
          <Message order={order} />
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
