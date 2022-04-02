import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider, { Settings } from 'react-slick';
import styled from '@emotion/styled';
import Image from 'next/image';
import image_1 from '@assets/planet_main.svg';
import image_2 from '@assets/onboarding_2.svg';
import image_3 from '@assets/onboarding_3.svg';

interface CarouselContent {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
}

function OnboardingCarousel() {
  const pages: CarouselContent[] = [
    {
      id: 0,
      title: '기록 행성',
      imageUrl: image_1,
      description: '행성에 들어가 감정을 선택하고\n글을 작성해보세요.',
    },
    {
      id: 1,
      title: '감정 행성',
      imageUrl: image_2,
      description: '감정 행성에 들어가 별을 누르면\n기록을 볼 수 있어요.',
    },
    {
      id: 2,
      title: '별자리',
      imageUrl: image_3,
      description: '감정 기록을 많이 모을수록\n별자리가 채워져요.',
    },
  ];

  const getSlideNumber = (minus?: number) => {
    const length = pages?.length;

    if (!length) return 1;
    if (!minus) return length + 1;

    return length + 1 - minus;
  };

  const sliderProps: Settings = {
    arrows: false,
    infinite: false,
    autoplay: false,
    pauseOnHover: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };

  return (
    <Styled.Root>
      <Slider {...sliderProps}>
        {pages?.map((page: CarouselContent) => (
          <Styled.PageWrapper>
            <Styled.Title>{page.title}</Styled.Title>
            <Image width="100vh" height="100vh" src={page.imageUrl} alt="" />
            <Styled.Description>{page.description}</Styled.Description>
          </Styled.PageWrapper>
        ))}
      </Slider>
    </Styled.Root>
  );
}

export default OnboardingCarousel;

const Styled = {
  Root: styled.div`
    width: 100%;
    height: 70vh;
    margin: 10vh 0 20vh 0;

    .slick-list {
      padding: 0 !important;
    }
  `,
  PageWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  `,
  Title: styled.h1`
    font-size: 16px;
    text-align: center;
    color: #ffffff;
  `,
  Description: styled.p`
    font-size: 15px;
    line-height: 150%;
    text-align: center;
    color: #ffffff;
    white-space: pre-line;
  `,
};
