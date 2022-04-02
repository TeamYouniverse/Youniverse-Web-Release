import Header from '@src/components/common/Header';
import OnboardingCarousel from '@src/components/Onboarding/OnboardingCarousel';
import PageIndicator from '@src/components/Onboarding/PageIndicator';
import React from 'react';

function onboarding() {
  return (
    <>
      <Header />
      <OnboardingCarousel />
      <PageIndicator />
    </>
  );
}

export default onboarding;
