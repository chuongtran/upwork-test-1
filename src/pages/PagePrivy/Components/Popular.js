import React from 'react';
import styled from 'styled-components';

import SectionTitle from './SectionTitle';
import { Yoga, ArrowRight } from 'components/Icons';

const StyledWrapper = styled.div`
  flex-wrap: nowrap;
  overflow: auto;
  padding-bottom: 50px;
  padding-left: 16px;
  padding-right: 16px;
`;

const StyledCard = styled.div`
  margin-right: 16px;
  min-width: calc(100% - 32px);
  height: 170px;
  border-radius: 16px;
  position: relative;
  background: linear-gradient(286.84deg, #6AAEF0 0%, #7976FF 100%);
  padding: 20px;
  div {
    position: relative;
    z-index: 2;
    display: inline-block;
    text-align: center;
  }
  h4 {
    margin: 0;
  }
  svg {
    width: 50px;
    height: 50px;
  }
  &::before {
    content: "";
    position: absolute;
    background-image: url(/assets/images/bg_card.png);
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    opacity: 0.5;
  }
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 24px;
    left: 0;
    box-shadow: 0px 10px 40px rgba(110, 156, 244, 0.6);
    height: 92px;
    border-radius: 16px;
  }

  &:nth-of-type(2n) {
    background: linear-gradient(106.84deg, #F19CA7 0%, #FFD0AE 100%);
    &::after {
      box-shadow: 0px 10px 40px rgba(249, 185, 171, 0.6);
    }
  }

  &:nth-of-type(2n+3) {
    background: linear-gradient(286.84deg, #4EE065 0%, #46CEA3 100%);
    &::after {
      box-shadow: 0px 10px 40px rgba(74, 216, 126, 0.5);
    }
  }

  a {
    position: absolute;
    border-radius: 16px 0 16px 0;
    right: 0;
    bottom: 0;
    width: 60px;
    height: 50px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      width: 22.5px;
      height: 18.5px;
    }
    &:before {
      opacity: 0.6;
      content: "";
      position: absolute;
      background: linear-gradient(135deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%);
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }
`;

const ITEMS = [
  {
    icon: <Yoga />,
    title: 'Program',
  },
  {
    icon: <Yoga />,
    title: 'Yoga',
  },
  {
    icon: <Yoga />,
    title: 'Another',
  },
];

const PagePrivyPopular = () => (
  <div>
    <SectionTitle label="Popular" />
    <StyledWrapper className="flex">
      {ITEMS.map((item, itemIndex) => (
        <StyledCard key={itemIndex}>
          <div className="text--white">
            {item.icon}
            <h4>{item.title}</h4>
          </div>
          <a><ArrowRight /></a>
        </StyledCard>
      ))}
    </StyledWrapper>
  </div>
);
export default PagePrivyPopular;
