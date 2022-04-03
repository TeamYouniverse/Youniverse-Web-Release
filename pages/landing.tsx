import styled from '@emotion/styled';
import Header from '@src/components/common/Header';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import planetImage from '@assets/planet_main.svg';
import IntroduceSentence from '@src/components/common/IntroduceSentence';

function landing() {
  const router = useRouter();
  const messages: string[] = [
    '나만의 우주를 만들어보세요.\n행성이 감정을 담아둘거예요',
    '함께 느꼈던 감정을 행성에 기록할 친구들을\nYouniverse로 초대할 수 있어요.',
  ];
  const [message, setMessage] = useState(messages[0]);

  useEffect(() => {
    console.log('useEffect on hell');
    let timer = setInterval(() => {
      switch (message) {
        case messages[0]:
          setMessage(messages[1]);
          break;
        case messages[1]:
          router.push('/onboarding');
          break;
      }
    }, 1500);
    return () => clearTimeout(timer);
  }, [message]);

  return (
    <>
      <Header />
      <Styled.Main>
        <Styled.TextWrapper>
          <IntroduceSentence />
          <p>{message}</p>
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
      white-space: pre-line;
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
