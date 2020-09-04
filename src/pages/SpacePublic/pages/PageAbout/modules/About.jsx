import React from 'react';
import styled from 'styled-components';

import { Container } from 'components/PageLayout';

// ICONS
import {
  Brain, Strength, Yoga, ZZZ,
} from 'components/Icons';
import { Button } from 'components/Common';

const StyledWrapper = styled(Container)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  .features {
    flex-wrap: wrap;
    display: flex;
    & > div {
      width: 50%;
    }

    .feature__icon {
      background-image: url(/assets/images/bg_circles.svg);
      width: 70px;
      height: 70px;
    }
    .feature__content {
      max-width: 200px;
    }
  }
`;

const stuffs = [
  {
    icon: <Brain />,
    content: (
      <span>
        Increase
        <br />
        your brain power
      </span>
    ),
  },
  {
    icon: <Strength />,
    content: (
      <span>
        Be mentally
        <br />
        and physically fit
      </span>
    ),
  },
  {
    icon: <Yoga />,
    content: (
      <span>
        Build
        <br />
        your resilience
      </span>
    ),
  },
  {
    icon: <ZZZ />,
    content: (
      <span>
        Sleep
        <br />
        well & be happy
      </span>
    ),
  },
];

export default ({ onNext }) => (
  <StyledWrapper className="flex align-items-center justify-content-center">
    <div className="text-center text--white">
      <div className="fade-in-up animation--delay-0 text--courgette text--size-18 pb-3 mb-10">Science-backed personalized programs</div>
      <div className="features text--semibold text--size-15">
        {
          stuffs.map((item, itemIndex) => (
            <div className={`fade-in-up animation--delay-${itemIndex + 1} feature mb-5 flex flex--column align-items-center`} map={itemIndex}>
              <div className="feature__icon flex align-items-center justify-content-center">
                {item.icon}
              </div>
              <span className="feature__content">{item.content}</span>
            </div>
          ))
        }
      </div>
      <div className="buttons" onClick={onNext}>
        <Button className="fade-in-up animation--delay-5" whiteBackground>Continue</Button>
      </div>
    </div>
  </StyledWrapper>
);
