import React from 'react';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';

import {
  Breath, Ghost, BeWell, SleepWell,
} from 'components/Icons';

const StyledWrapper = styled.div`
  background-image: url('/assets/images/bg_recommended.png');
  background-size: 100% 100%;
  background-position: top center;
  padding-top: 80px;
  padding-bottom: 40px;
  position: relative;
  z-index: 2;
`;

const StyledItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-image: url('/assets/images/bg_4-items.png');
  background-size: 100% auto;
  background-position: center center;
`;
const StyledItem = styled.div`
  min-width: 50%;
  padding: 15px 0;
  svg {
    width: 40px;
  }
  b {
    font-weight: 600;
    font-size: 20px;
    font-family: Gilroy;
  }
`;

const ITEMS = [
  {
    icon: <Ghost width={50} height={50} />,
    title: 'Eat Well',
  },
  {
    icon: <SleepWell width={50} height={50} />,
    title: 'Sleep well',
  },
  {
    icon: <Breath width={50} height={50} />,
    title: 'Breath well',
  },
  {
    icon: <BeWell width={50} height={50} />,
    title: 'Be well',
  },
];

const PagePrivyRecommended = () => (
  <StyledWrapper>
    <SectionTitle style={{ color: '#fff' }} label="Recommended" />
    <StyledItems>
      {ITEMS.map((item, itemIndex) => (
        <StyledItem className="text--white flex flex--1 flex--column align-items-center justify-content-center" key={itemIndex}>
          {item.icon}
          <b>{item.title}</b>
        </StyledItem>
      ))}
    </StyledItems>
  </StyledWrapper>
);
export default PagePrivyRecommended;
