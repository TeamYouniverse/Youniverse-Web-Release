import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider, { Settings } from 'react-slick';
import styled from '@emotion/styled';
import image_1 from '@assets/planet_main.svg';
import image_2 from '@assets/onboarding_2.svg';
import image_3 from '@assets/onboarding_3.svg';
import CarouselPage, { CarouselContent } from './CarouselPage';

interface CarouselProps {
  updateSlideIndex: React.Dispatch<React.SetStateAction<number>>;
}

function OnboardingCarousel({ updateSlideIndex }: CarouselProps) {
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

  const sliderProps: Settings = {
    arrows: true,
    infinite: false,
    autoplay: false,
    pauseOnHover: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };

  const handleAfterChange = (currentSlide) => {
    updateSlideIndex(currentSlide);
  };

  return (
    <Styled.Root>
      <Slider {...sliderProps} afterChange={handleAfterChange}>
        {pages?.map((page: CarouselContent) => (
          <CarouselPage
            key={page.id}
            id={page.id}
            title={page.title}
            imageUrl={page.imageUrl}
            description={page.description}
          />
        ))}
      </Slider>
    </Styled.Root>
  );
}

export default OnboardingCarousel;

const Styled = {
  Root: styled.div`
    width: 100%;
    /* height: 70vh; */
    margin: 10vh 0 20vh 0;

    .slick-next,
    .slick-prev {
      left: auto;
      right: auto;
      visibility: hidden;
    }
  `,
};
