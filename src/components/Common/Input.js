import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classnames from 'classnames';

const StyledLabel = styled.label`
  position: relative;
  display: block;
  background: none;
  margin-bottom: 2px
  border-radius: 50px;
  font-size: 16px;
  border: 1px solid #fff;
  color: #fff;
  font-weight: 600;

  & + * {
    margin-top: 16px;
  }

  &.disabled {
    opacity: 0.4;
    cursor: not-allowed;

    .input__container {
      &:after {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 100;
      }
    }
  }

  .input__container {
    position: relative;
    width: 100%;

    span.input__mask {
      position: absolute;
      top: 32px;
      left: 16px;
      font-weight: bold;
      font-size: 17px;
      line-height: 26px;
      letter-spacing: normal;
      transition: 0.4s all;
      opacity: 1;
      visibility: visible;
      background: #fff;
      width: calc(100% - 20px);
    }
  }
  span.input__label {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 16px;
    right: 16px;
    transition: 0.4s all;
    margin: auto;
    text-align: center;
  }

  // &:first-child {
  //   border-top-left-radius: 15px;
  //   border-top-right-radius: 15px;
  // }
  // &:last-child {
  //   border-bottom-left-radius: 15px;
  //   border-bottom-right-radius: 15px;
  // }

  .prefix {
    margin-right: -6px;
    margin-left: 12px;
    display: flex;
    align-items: center;
  }
`;
const StyledInput = styled.input`
  height: 26px;
  width: 100%;
  font-size: 16px;
  font-weight: 600;
  line-height: 19px;
  padding-left: 16px;
  padding-right: 16px;
  text-align: center;
  border: 0;
  background: none;
  transition: 0.4s all;
  opacity: 0;
  margin-top: 21px;
  margin-bottom: 3px;
  color: inherit;
  &:focus,
  &:not([value='']) {
    opacity: 1;
    ~ span.input__label {
      top: 12px;
      font-size: 12px;
      // opacity: 0.5;
    }
  }
  &:focus {
    & ~ span.input__mask {
      opacity: 0;
      visibility: hidden;
    }
  }
  // &:disabled {
  //   opacity: 0.7;
  // }
`;

const Input = ({
  prefix, label, className, value, mask, disabled, ...rest
}) => (
  <StyledLabel className={disabled && 'disabled'}>
    <div className="flex align-items-center">
      {prefix ? <span className="prefix">{prefix}</span> : null}
      <div className="input__container">
        <StyledInput
          disabled={disabled}
          value={value || ''}
          className={classnames(className, { empty: !value })}
          {...rest}
        />
        {label ? <span className="input__label">{label}</span> : null}
        {mask ? <span className="input__mask">{mask}</span> : null}
      </div>
    </div>
  </StyledLabel>
);

Input.propTypes = {
  prefix: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  label: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  mask: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Input.defaultProps = {
  prefix: null,
  label: null,
  className: null,
  value: null,
  mask: null,
};

export default Input;
