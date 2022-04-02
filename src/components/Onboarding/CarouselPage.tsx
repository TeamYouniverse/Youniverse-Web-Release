import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import imagea from '@assets/onboarding_3.svg';

export interface CarouselContent {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
}

function CarouselPage(props: CarouselContent) {
  const { title, imageUrl, description }: CarouselContent = props;
  return (
    <Styled.PageWrapper>
      <Styled.Title>{title}</Styled.Title>
      <Image width="250vh" height="300vh" src={imageUrl} alt="" />
      <Styled.Description>{description}</Styled.Description>
    </Styled.PageWrapper>
  );
}

export default CarouselPage;

const Styled = {
  PageWrapper: styled.div`
    height: 60vh;
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
