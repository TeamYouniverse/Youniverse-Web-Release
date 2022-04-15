import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
type direction = 'top' | 'bottom' | 'left' | 'right';
interface CircularCarouselProps {
  className?: string;
  [key: string]: any;
  children?: ReactNode;
  radius?: number;
  angle?: number;
  center?: direction;
}

function CircularCarousel({
  className,
  radius = 10,
  angle = 360,
  center = 'bottom',
  children,
  ...props
}: CircularCarouselProps) {
  return <Styled.Root>{children}</Styled.Root>;
}

export default CircularCarousel;

const Styled = {
  Root: styled.div``,
};
