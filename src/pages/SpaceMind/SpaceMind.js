import React from 'react';
import styled from 'styled-components';

// COMPONENTS
import { Route, Switch } from 'react-router-dom';

// PAGES
import { PageWrapper } from 'components/PageLayout';
import PageMindOverview from './pages/PageMindOverview';
import PageMindDetails from './pages/PageMindDetails';
import PageMindWeekly from './pages/PageMindWeekly';
import PageMindMonthly from './pages/PageMindMonthly';
import PageMindList from './pages/PageMindList';

const StyledContainer = styled.div`
  background: linear-gradient(180deg, #36D1DC -9.85%, #5B86E5 69.33%);
  min-height: 100vh;
  max-width: ${(props) => props.theme.appMaxWidth};
  margin: auto;

`;
export default () => (
  <StyledContainer>
    <PageWrapper>
      <Switch>
        <Route exact path="/mind" component={PageMindOverview} />
        <Route exact path="/mind/weekly" component={PageMindWeekly} />
        <Route exact path="/mind/monthly" component={PageMindMonthly} />
        <Route exact path="/mind/list" component={PageMindList} />
        <Route exact path="/mind/:mindId" component={PageMindDetails} />
      </Switch>
    </PageWrapper>
  </StyledContainer>
);
