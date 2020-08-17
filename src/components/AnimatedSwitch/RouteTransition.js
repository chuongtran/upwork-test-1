/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React, { cloneElement, createElement } from 'react';
import PropTypes from 'prop-types';
import TransitionMotion from 'react-motion/lib/TransitionMotion';

import { ensureSpring, identity } from './helpers';

function noop() {}

function RouteTransition({
  children,
  className,
  atEnter,
  atActive,
  atLeave,
  wrapperComponent = 'div',
  didLeave = noop,
  mapStyles = identity,
  runOnMount = false,
}) {
  // eslint-disable-next-line no-nested-ternary
  const defaultStyles = runOnMount === false
    ? null
    : children === undefined
      ? []
      : [
        {
          key: children.key,
          data: children,
          style: atEnter,
        },
      ];

  const styles = children === undefined
    ? []
    : [
      {
        key: children.key,
        data: children,
        style: ensureSpring(atActive),
      },
    ];

  return (
    <TransitionMotion
      defaultStyles={defaultStyles}
      styles={styles}
      willEnter={() => atEnter}
      willLeave={() => ensureSpring(atLeave)}
      didLeave={didLeave}
    >
      {(interpolatedStyles) => (
        <div className={className}>
          {interpolatedStyles.map((config) => {
            const props = {
              style: mapStyles(config.style),
              key: config.key,
            };

            return wrapperComponent !== false
              ? createElement(wrapperComponent, props, config.data)
              : cloneElement(config.data, props);
          })}
        </div>
      )}
    </TransitionMotion>
  );
}

RouteTransition.propTypes = {
  className: PropTypes.string,
  wrapperComponent: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.element,
    PropTypes.string,
    PropTypes.func,
  ]),
  atEnter: PropTypes.object.isRequired,
  atActive: PropTypes.object.isRequired,
  atLeave: PropTypes.object.isRequired,
  didLeave: PropTypes.func,
  mapStyles: PropTypes.func,
  runOnMount: PropTypes.bool,
};

export default RouteTransition;
