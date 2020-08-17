import { Route } from 'react-router-dom';
import React, { Suspense, lazy, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { ConnectedRouter } from 'connected-react-router';

// HISTORY
import { history } from 'redux/store';

// Import CSS reset and Global Styles
import GlobalStyle from 'styles/globals';

// COMPONENTS
import AnimatedSwitch from 'components/AnimatedSwitch/AnimatedSwitch';
import { Menu } from 'components/PageLayout';

// CONSTANTS
import Loading from 'components/Loading/Loading';
import { THEME } from './constants/theme';

// ICONS
import {
  Privy, Body, Mind, Breath, More,
} from 'components/Icons';

const ITEMS = [
  {
    label: 'Privy',
    path: '/privy',
    icon: <Privy />,
  },
  {
    label: 'Mind',
    path: '/mind',
    icon: <Body />,
  },
  {
    label: 'Body',
    path: '/body',
    icon: <Mind />,
  },
  {
    label: 'Breath',
    path: '/breath',
    icon: <Breath />,
  },
  {
    label: 'More',
    path: '/more',
    icon: <More />,
  },
];

// Employee
const PageCounselors = lazy(() => import('./pages/PageCounselors/PageCounselors'));
const PageCounselorDetails = lazy(() => import('./pages/PageCounselorDetails/PageCounselorDetails'));

const App = () => {
  useEffect(() => {
  }, []);

  return (
    <ThemeProvider theme={THEME}>
      <GlobalStyle />
      <ConnectedRouter history={history}>
        <Suspense fallback={<Loading type="dots" isScreen />}>
          <AnimatedSwitch>
            <Route exact path="/counselors" component={PageCounselors} />
            <Route exact path="/counselors/:counselorId" component={PageCounselorDetails} />
          </AnimatedSwitch>
          <Menu items={ITEMS} />
        </Suspense>
      </ConnectedRouter>
    </ThemeProvider>
  );
};

export default App;
