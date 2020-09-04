import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledNavigation = styled.div`
  background: ${(props) => (props.noBackground ? 'none' : '#fff')};
  position: ${(props) => (props.noBackground ? 'absolute' : 'fixed')};
  // position: fixed;
  top: 0;
  left: 0;
  right: 0;
  line-height: 26px;
  // padding-top: 16px;
  // padding-bottom: 16px;
  font-size: 17px;
  font-weight: bold;
  text-align: center;
  box-shadow: ${(props) => (props.hasShadow ? '0px 1px 4px rgba(184, 184, 184, 0.25)' : 'none')};
  z-index: 101;
  min-height: 60px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: ${({ theme }) => theme.appMaxWidth};
  margin-left: auto;
  margin-right: auto;

  .elem {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    position: absolute;
    top: 0;
    bottom: 0;

    span {
      font-size: 17px;
    }

    &--left {
      left: 16px;
    }
    &--right {
      position: absolute;
      right: 16px;
    }
  }
`;

const StyledProgress = styled.div`
  position: absolute;
  left: 16px;
  height: 3px;
  bottom: 0px;
  right: 16px;
  background-color: #fff;

  &::before {
    transition: 0.4s all;
    content: "";
    background: ${(props) => props.theme.colorLinearOrange};
    width: ${(props) => props.width}%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
  }


`;
const Navigation = ({
  label,
  progress,
  leftElem,
  rightElem,
  noBackground,
  hasShadow,
  style,
  className,
}) => (
  <div className="" style={{ height: '60px', ...style }}>
    <StyledNavigation noBackground={noBackground} hasShadow={hasShadow} className={className}>
      <div className="elem elem--left">{leftElem || null}</div>
      <div className="navigation-label flex justify-content-center">
        {label}
      </div>
      <div className="elem elem--right">{rightElem || null}</div>
      {progress ? <StyledProgress width={progress} /> : null}
    </StyledNavigation>
  </div>
);

Navigation.propTypes = {
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.array,
  ]),
  progress: PropTypes.number,
  leftElem: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.array,
  ]),
  rightElem: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.array,
  ]),
  noBackground: PropTypes.bool,
  hasShadow: PropTypes.bool,
};
Navigation.defaultProps = {
  label: '',
  progress: 0,
  leftElem: null,
  rightElem: null,
  noBackground: false,
  hasShadow: false,
};

export default Navigation;
