import React from 'react';
import PropTypes from 'prop-types';
import Dots from './Dots';
import Spinner from './Spinner';

const Loading = (props) => {
  const { type, isScreen } = props;
  switch (type) {
    case 'spinner':
      return <Spinner />;
    case 'dots':
      return <Dots isScreen={isScreen} />;
    default:
      return <Spinner />;
  }
};

Loading.propTypes = {
  type: PropTypes.string,
  isScreen: PropTypes.bool,
};
Loading.defaultProps = {
  type: 'dots',
  isScreen: false,
};
export default Loading;
