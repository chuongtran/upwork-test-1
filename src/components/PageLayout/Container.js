import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledContainer = styled.div`
  max-width: ${({ theme }) => theme.appMaxWidth};
  margin-left: auto;
  margin-right: auto;
  padding-left: ${(props) => (props.noPadding ? 0 : '16px')};
  padding-right: ${(props) => (props.noPadding ? 0 : '16px')};
  background: ${(props) => props.background};
`;

const Container = ({
  children, background, className, noPadding,
}) => (
  <StyledContainer background={background} className={className} noPadding={noPadding}>
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
