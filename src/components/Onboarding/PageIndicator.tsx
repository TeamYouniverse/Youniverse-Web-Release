import styled from '@emotion/styled';
import React from 'react';
import Image from 'next/image';
import starIcon from '@assets/star.svg';

function PageIndicator() {
  const handleSkipClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
  };

  const handleNextClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
  };

  return (
    <Styled.Root>
      <Styled.SkipButton onClick={handleSkipClick}>건너뛰기</Styled.SkipButton>
      <Styled.PageStarWrapper>
        <Image src={starIcon} alt="first" />
        <Image src={starIcon} alt="second" />
        <Image src={starIcon} alt="third" />
      </Styled.PageStarWrapper>
      <Styled.NextButton onClick={handleNextClick}>다음</Styled.NextButton>
    </Styled.Root>
  );
}

export default PageIndicator;

const Styled = {
  Root: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    position: fixed;
    bottom: 0px;
    padding: 0px 35px 0px 23px;
    width: 600px;
    @media (max-width: 767px) {
      width: 414px;
    }
    @media (max-width: 413px) {
      width: 100%;
    }
  `,
  SkipButton: styled.button`
    font-size: 12px;
    color: #ffffff;
  `,
  PageStarWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    width: 20vw;
    height: 33px;

    & * {
      width: 25px;
    }
  `,
  NextButton: styled.button`
    font-size: 12px;
    color: #ffffff;
  `,
};
