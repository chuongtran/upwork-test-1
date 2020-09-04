import React from 'react';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';

const StyledWrapper = styled.div`
  background-color: #FFF2FF;
  background-image: url('/assets/images/bg_instant-benefit.png');
  background-position: center bottom -80px;
  background-size: calc(100% - 32px) auto;
  background-repeat: no-repeat;
  padding-top: 40px;
  padding-bottom: 50px;
`;

const StyledCardsWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow: auto;
`;

const StyledCard = styled.div`
  background: linear-gradient(93.49deg, #5570F7 -16.84%, #A38CFF 92.26%), #C4C4C4;
  border-radius: 12px;
  min-width: 195px;
  width: 195px;
  height: 145px;
  margin-left: 16px;
  padding: 20px;

  &:last-child {
    margin-right: 16px;
  }

  b {
    margin-top: 18px;
    font-size: 20px;
    line-height: 1.2;
  }
`;

const ITEMS = [
  {
    duration: 30,
    title: 'Deep Relaxation',
  },
  {
    duration: 30,
    title: 'Improve focus',
  },
];

const InstantBenefit = () => (
  <StyledWrapper className="mb-8">
    <SectionTitle label="Instant Benefit" />
    <StyledCardsWrapper>
      {ITEMS.map((item, itemIndex) => (
        <StyledCard className="flex flex--column text--white" key={itemIndex}>
          <span>
            {item.duration}
            {' '}
            min
          </span>
          <b>
            {item.title}
          </b>
        </StyledCard>
      ))}
    </StyledCardsWrapper>
  </StyledWrapper>
);

export default InstantBenefit;
