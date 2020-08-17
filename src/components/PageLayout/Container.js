import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledContainer = styled.div`
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.6rem;
  padding-right: 1.6rem;
  background: ${(props) => props.background};
`;

const Container = ({ children, background, className }) => (
  <StyledContainer background={background} className={className}>
    {children}
  </StyledContainer>
);

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.array,
    PropTypes.string,
  ]),
  background: PropTypes.string,
  className: PropTypes.string,
};
Container.defaultProps = {
  children: null,
  background: 'none',
  className: null,
};

export default Container;
