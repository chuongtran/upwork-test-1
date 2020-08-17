import React from 'react';
import { matchPath, useLocation, Route } from 'react-router-dom';


import RouteTransition from './RouteTransition';

// The key-getter for RouteTransition. It's either on or off.
function getKey({ pathname }, path, exact) {
  return matchPath(pathname, { exact, path }) ? 'match' : 'no-match';
}

function AnimatedRoute({
  render,
  component,
  path,
  exact,
  ...routeTransitionProps
}) {
  const location = useLocation();

  return (
    <RouteTransition {...routeTransitionProps}>
      <Route
        key={getKey(location, path, exact)}
        path={path}
        exact={exact}
        location={location}
        component={component}
        render={render}
      />
    </RouteTransition>
  );
}

export default AnimatedRoute;
