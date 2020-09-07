import React from 'react';
import styled from 'styled-components';
import ScrollContainer from 'react-indiana-drag-scroll';
import SectionTitle from './SectionTitle';
import { Container } from 'components/PageLayout';

import liveCoachBody from './Images/bg_live-coach-body.png';
import liveCoachMind from './Images/bg_live-coach-mind.png';
import liveCoach3 from './Images/bg_live-coach-3.png';

const StyledSectionWrapper = styled.div`
  background-image: url(/assets/images/bg_live-coach.png);
  background-size: 100% auto;
  background-position: top center
  padding-top: 80px;

`;
const StyledWrapper = styled(ScrollContainer)`
  display: flex;
  flex-wrap: nowrap;
  overflow: auto;
  padding-bottom: 16px;
`;

const StyledCard = styled.div`
  min-width: calc(50% - 8px);
  margin-right: 16px;
  border-radius: 12px;
  position: relative;
  overflow: hidden;
  &::before {
    border-radius: 12px;
    display: block;
    content: "";
    padding-top: 100%;
    background-image: ${(props) => `url(${props.background})`};
    background-size: cover;
  }
  &:last-child {
    margin-right: 0;
  }
  & > div {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;

const StyledCardTitle = styled.h4`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 11px;
  margin: 0;
  color: #fff;
  font-style: italic;
  font-size: 16px;
  color: #fff;
  font-weight: normal;
  & > span {
    position: relative;
    z-index: 2;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.8;
    background: ${(props) => props.backgroundColor};
  }
`;

const ITEMS = [
  {
    background: liveCoachMind,
    title: 'Mind',
    backgroundColor: '#F5B5C3',
  },
  {
    background: liveCoachBody,
    title: 'Body',
    backgroundColor: '#7DDDF1',
  },
  {
    background: liveCoach3,
    title: 'Mind 2',
    backgroundColor: '#F5B5C3',
  },
];

const PagePrivyLiveCoach = () => (
  <StyledSectionWrapper>
    <Container>
      <SectionTitle label="Live coach" />
      <StyledWrapper>
        {ITEMS.map((item, itemIndex) => (
          <StyledCard key={itemIndex} background={item.background}>
            <div>
              {item.icon}
              <StyledCardTitle backgroundColor={item.backgroundColor}>
                <span>{item.title}</span>
              </StyledCardTitle>
            </div>
          </StyledCard>
        ))}
      </StyledWrapper>
    </Container>
  </StyledSectionWrapper>
);
export default PagePrivyLiveCoach;
