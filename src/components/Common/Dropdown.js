import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classnames from 'classnames';

// COMPONENTS
import { Close } from 'components/Icons';
import Button from './Button';
import { Container } from '../PageLayout';

const DropdownWrapper = styled.div`
  .dropdown__container {
    overflow: auto;
    max-height: 100vh;
    z-index: 1000;
    position: fixed;
    bottom: -100vh;
    left: 0;
    right: 0;
    min-height: 100px;
    transition: 0.4s cubic-bezier(0.25, 0, 0, 0.991) bottom;
    // transform: translateY(100%);
    z-index: 1000;
    background: ${(props) => (props.type === 'primary' ? props.theme.backgroundPrimary : props.theme.backgroundSecondary)};
    border-radius: 16px 16px 0px 0px;
    padding-top: 16px;
    padding-bottom: 16px;
  }
  .dropdown__mask {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.5);
    z-index: 999;
    opacity: 0;
    visibility: hidden;
  }

  .dropdown__container__label {
    color: #fff;
    font-size: 17px;
    line-height: 20px;
    font-weight: 600;
    margin-bottom: 16px;
  }

  &.open {
    & > .dropdown__container {
      // transform: translateY(0);
      bottom: 0;
    }
    & > .dropdown__mask {
      opacity: 1;
      visibility: visible;
    }
  }

  & + * {
    margin-top: 16px;
  }

`;

const Dropdown = ({
  label, children, type, open: openProps, onToggle, hasCloseIcon, modalTitle, buttonProps,
}) => {
  const [open, setOpen] = useState(false);
  const toggleOpen = useCallback((forceOpen) => {
    setOpen(typeof forceOpen !== 'undefined' ? forceOpen : !open);
    if (typeof onToggle === 'function') onToggle(typeof forceOpen !== 'undefined' ? forceOpen : !open);
  }, [open]);

  useEffect(() => {
    if (openProps !== open) setOpen(openProps);
  }, [openProps]);

  return (
    <DropdownWrapper type={type} className={classnames({ open })}>
      {['string', 'number'].includes(typeof label) ? (
        <Button {...buttonProps} onClick={() => toggleOpen()}>{label}</Button>
      ) : (
        <span onClick={() => toggleOpen()}>{label}</span>
      )}
      <div className="dropdown__container">
        <Container>
          {
            (modalTitle || hasCloseIcon) && (
              <div className="dropdown__container__label flex align-items-center justify-content-space-between mb-3">
                <div>{modalTitle}</div>
                {hasCloseIcon && <Close onClick={(e) => { e.stopPropagation(); toggleOpen(); }} />}
              </div>
            )
          }
        </Container>
        <Container>{children}</Container>
      </div>
      <div className="dropdown__mask" onClick={(e) => { e.stopPropagation(); toggleOpen(); }} />
    </DropdownWrapper>
  );
};

Dropdown.propTypes = {
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node,
  ]).isRequired,
  type: PropTypes.string,
  modalTitle: PropTypes.string,
  open: PropTypes.bool,
  hasCloseIcon: PropTypes.bool,
};

Dropdown.defaultProps = {
  type: 'primary',
  open: false,
  hasCloseIcon: true,
  modalTitle: null,
};

export default Dropdown;
