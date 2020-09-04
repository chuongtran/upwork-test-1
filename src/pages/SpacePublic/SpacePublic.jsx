import React from 'react';

// COMPONENTS
import { Route } from 'react-router-dom';
import AnimatedSwitch from 'components/AnimatedSwitch/AnimatedSwitch';
import { PageContainer } from 'components/PageLayout';

// PAGES
import PageHome from './pages/PageHome/PageHome';
import PageAbout from './pages/PageAbout/PageAbout';
import PageLogin from './pages/PageAuthorization/PageLogin';
import PageRegister from './pages/PageAuthorization/PageRegister';
import PageForgotPassword from './pages/PageAuthorization/PageForgotPassword';
import PagePolls from './pages/PagePolls/PagePolls';

export default () => (
  <PageContainer style={{ zIndex: 500 }} hasMenu={false}>
    <AnimatedSwitch>
      <Route exact path="/" component={PageHome} />
      <Route exact path="/about" component={PageAbout} />
      <Route exact path="/login" component={PageLogin} />
      <Route exact path="/register" component={PageRegister} />
      <Route exact path="/forgot-password" component={PageForgotPassword} />
      <Route exact path="/what-brings-you-to" component={PagePolls} />
    </AnimatedSwitch>
  </PageContainer>
);
