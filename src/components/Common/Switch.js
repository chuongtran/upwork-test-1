import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledLabel = styled.label``;
const StyledCheckbox = styled.div`
  & > span {
    width: 50px;
    height: 30px;
    border-radius: 31px;
    display: flex;
    position: relative;
    overflow: hidden;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: ${({ theme }) => theme.colorGreen};
      opacity: 0.7;
    }
    &::after {
      content: '';
      position: absolute;
      left: 2px;
      top: 2px;
      height: 26px;
      width: 26px;
      background: #fff;
      border-radius: 50%;
      box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.15), 0px 3px 1px rgba(0, 0, 0, 0.06);
      transition: 0.4s all;
    }
  }
  & > input {
    opacity: 0;
    width: 0;
    height: 0;
    max-width: 0;
    margin: 0;
    visibility: hidden;
    display: block;
    &:checked {
      & + span {
        opacity: 1;
        &::before {
          opacity: 1;
        }
        &::after {
          left: 22px;
        }
      }
    }
  }

`;

const Switch = ({ label, checked, onToggle }) => (
  <StyledLabel className="flex align-items-center">
    <StyledCheckbox>
      <input type="checkbox" checked={checked} onChange={onToggle} />
      <span />
    </StyledCheckbox>
    {label}
  </StyledLabel>
);

Switch.propTypes = {
  label: PropTypes.string,
  checked: PropTypes.bool,
  onToggle: PropTypes.func,
};
Switch.defaultProps = {
  label: null,
  checked: false,
  onToggle: null,
};

export default Switch;
