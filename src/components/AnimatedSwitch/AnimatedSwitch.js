import React, { useEffect, useRef } from 'react';

import {
  Switch, matchPath, useLocation, useHistory,
} from 'react-router-dom';

// Components
import RouteTransition from './RouteTransition';

// AnimatedSwitch
const NO_MATCH = {
  key: 'no-match',
};

// Not every location object has a `key` property (e.g. HashHistory).
function getLocationKey(location) {
  return typeof location.key === 'string' ? location.key : '';
}

// Some superfluous work, but something we need to do in order
// to persist matches/allow for nesting/etc.
function getMatchedRoute(children, { pathname }) {
  const childrenArray = React.Children.toArray(children);

  for (let i = 0; i < childrenArray.length; i++) {
    const child = childrenArray[i];
    const matches = matchPath(pathname, {
      exact: child.props.exact,
      path: child.props.path,
    });

    if (matches) {
      return child;
    }
  }

  return NO_MATCH;
}

let counter = 0;

function AnimatedSwitch({ children, ...routeTransitionProps }) {
  const location = useLocation();
  const match = useRef(null);
  const key = useRef(null);

  const history = useHistory();
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
    return () => {
      unlisten();
    };
  }, []);

  const nextMatch = getMatchedRoute(children, location);

  if (match.current === null) {
    // Persist a reference to the most recent match
    match.current = nextMatch;
    key.current = getLocationKey(location);
  } else if (match.current.key !== nextMatch.key) {
    // Update the key given to Switch anytime the matched route changes
    match.current = nextMatch;
    // eslint-disable-next-line no-plusplus
    key.current = getLocationKey(location) + ++counter;
  }

  return (
    <RouteTransition
      {...routeTransitionProps}
      atEnter={{ opacity: 0 }}
      atLeave={{ opacity: 0 }}
      atActive={{ opacity: 1 }}
      className="switch-wrapper"
    >
      <Switch key={key.current} location={location}>
        {children}
      </Switch>
    </RouteTransition>
  );
}

export default AnimatedSwitch;
