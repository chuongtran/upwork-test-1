import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';

import Button from './Button';
import Dropdown from './Dropdown';
import { ArrowDropdown, Check } from 'components/Icons';

const Select = ({
  placeholder, value, options, onSelect, children, label, buttonProps,
}) => {
  const opts = useMemo(() => options.map((opt) => (['string', 'number'].includes(typeof opt) ? {
    value: opt,
    label: opt,
  } : opt)), [options]);
  const [open, setOpen] = useState(false);

  const valueDisplay = useMemo(() => opts.find((opt) => opt.value === value), [opts, value]);

  const toggleButton = useMemo(() => {
    if (children) return children;
    return (
      <Button {...buttonProps}>
        <span>{valueDisplay ? valueDisplay.label : placeholder}</span>
        <ArrowDropdown style={{ fill: '#fff' }} />
      </Button>
    );
  }, [children, valueDisplay, placeholder]);

  return (
    <Dropdown open={open} onToggle={() => setOpen(!open)} label={toggleButton} type="secondary" modalTitle={label} buttonProps={buttonProps}>
      {opts.map((opt) => (
        <Button
          className={opt.value === value ? 'selected' : ''}
          key={opt.value}
          onClick={() => { onSelect(opt.value); setOpen(false); }}
        >
          {opt.value === value && <Check style={{ fill: '#fff' }} />}
          <span>{opt.label}</span>
        </Button>
      ))}
    </Dropdown>
  );
};

Select.PropsTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  options: PropTypes.array,
  onSelect: PropTypes.func.isRequired,
};
Select.defaultProps = {
  placeholder: 'Please select',
  value: null,
  options: [],
};
export default Select;
