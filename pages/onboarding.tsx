import Header from '@src/components/common/Header';
import OnboardingCarousel from '@src/components/Onboarding/OnboardingCarousel';
import PageIndicator from '@src/components/Onboarding/PageIndicator';
import React, { useState } from 'react';

function onboarding() {
  const [currSlide, setCurrSlide] = useState(0);

  return (
    <>
      <Header />
      <OnboardingCarousel updateSlideIndex={setCurrSlide} />
      <PageIndicator index={currSlide} />
    </>
  );
}

export default onboarding;
