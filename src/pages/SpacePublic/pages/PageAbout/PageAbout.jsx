import React, { useState } from 'react';

// ICONS
import About from './modules/About';
import Authorization from './modules/Authorization';

export default () => {
  const [step, setStep] = useState(0);

  return step === 0 ? <About onNext={() => setStep(1)} /> : <Authorization />;
};
