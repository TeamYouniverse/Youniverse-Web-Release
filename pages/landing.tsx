import styled from '@emotion/styled';
import Header from '@src/components/common/Header';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import planetImage from '@assets/planet_main.svg';
import IntroduceSentence from '@src/components/common/IntroduceSentence';
import { flexColumnCenter } from '@src/lib/style/mixin';

function landing() {
  const router = useRouter();
  const messages: string[] = [
    '나만의 우주를 만들어보세요.\n행성이 감정을 담아둘거예요',
    '함께 느꼈던 감정을 행성에 기록할 친구들을\nYouniverse로 초대할 수 있어요.',
  ];
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    let timer = setInterval(() => {
      if (messages.length - 1 === messageIndex) {
        router.push('/onboarding');
      } else {
        setMessageIndex(messageIndex + 1);
      }
    }, 1500);
    return () => clearTimeout(timer);
  }, [messageIndex]);

  return (
    <>
      <Header />
      <Styled.Main>
        <Styled.TextWrapper>
          <IntroduceSentence />
          <p>{messages[messageIndex]}</p>
        </Styled.TextWrapper>
        <Styled.PlanetWrapper>
          <Image width="243px" src={planetImage} alt="planet" />
        </Styled.PlanetWrapper>
      </Styled.Main>
    </>
  );
}

export default landing;

const Styled = {
  Main: styled.main`
    ${flexColumnCenter}
  `,

  TextWrapper: styled.div`
    ${flexColumnCenter}
    justify-content: space-between;
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
  `,
};
