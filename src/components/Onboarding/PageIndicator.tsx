import styled from '@emotion/styled';
import React from 'react';
import Image from 'next/image';
import starIcon from '@assets/star.svg';

interface PageProps {
  index: Number;
}

function PageIndicator({ index }: PageProps) {
  console.log(index);
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
        <Styled.FirstStar index={index}>
          <Image src={starIcon} alt="first" />
        </Styled.FirstStar>
        <Styled.SecondStar index={index}>
          <Image src={starIcon} alt="second" />
        </Styled.SecondStar>
        <Styled.ThirdStar index={index}>
          <Image src={starIcon} alt="third" />
        </Styled.ThirdStar>
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
    max-width: 150px;
    height: 33px;

    & * {
      width: 25px;
      height: 33px;
    }
  `,

  FirstStar: styled.div<{ index: Number }>`
    ${(props) => (props.index == 0 ? { opacity: 1 } : { opacity: 0.6 })}
  `,
  SecondStar: styled.div<{ index: Number }>`
    ${(props) => (props.index == 1 ? { opacity: 1 } : { opacity: 0.6 })}
  `,
  ThirdStar: styled.div<{ index: Number }>`
    ${(props) => (props.index == 2 ? { opacity: 1 } : { opacity: 0.6 })}
  `,

  NextButton: styled.button`
    font-size: 12px;
    color: #ffffff;
  `,
};
