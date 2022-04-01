import React from 'react';
import styled from '@emotion/styled';

function IntroduceSentence() {
  return (
    <Styled.Root>
      나와 너의 감정 공유의 시간을 행성에 기록하다.
      <br />
      Youniverse
    </Styled.Root>
  );
}

export default IntroduceSentence;

const Styled = {
  Root: styled.div`
    color: white;
    font-weight: 400;
    font-size: 15px;
    line-height: 25px;
    text-align: center;
  `,
};
