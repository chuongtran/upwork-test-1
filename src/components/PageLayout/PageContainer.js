import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledPage = styled.div`
  z-index: ${(props) => (props.hasMenu ? 1 : 500)};
  background: ${({ theme }) => theme.backgroundPrimaryTopToBottom};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  max-width: ${({ theme }) => theme.appMaxWidth};
  margin: auto;

  * > * {
    z-index: 10;
  }

  &::before {
    content: "";
    background-image: url(/assets/images/bg_landing-page.svg);
    background-size: cover;
    background-position: center center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;

const PageContainer = ({ children, hasMenu }) => (
  <StyledPage hasMenu={hasMenu}>
    {children}
  </StyledPage>
);

PageContainer.propTypes = {
  hasMenu: PropTypes.bool,
};
PageContainer.defaultProps = {
  hasMenu: false,
};
export default PageContainer;
