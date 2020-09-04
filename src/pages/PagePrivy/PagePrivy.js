import React from 'react';
import styled from 'styled-components';

// COMPONENTS
import { Container } from 'components/PageLayout';
import Header from './Components/Header';
import Popular from './Components/Popular';
import LiveCoach from './Components/LiveCoach';
import Personalize from './Components/Personalize';
import Recommended from './Components/Recommended';
import Courses from './Components/Courses';
import InstantBenefit from './Components/InstantBenefit';

const StyledWrapper = styled.div`
  & > * {
  }
`;

const PagePrivy = () => (
  <Container id="pagePrivy" noPadding>
    <StyledWrapper style={{ background: '#F2FBFF' }}>
      <Header />
      <Popular />
      <LiveCoach />
      <Personalize />
      <Recommended />
      <Courses />
      <InstantBenefit />
    </StyledWrapper>
  </Container>
);

export default PagePrivy;
