import React from 'react';
import classnames from 'classnames';
import styled from 'styled-components';

const StyledInput = styled.textarea`
  width: 100%;
  padding: 20px;
  font-weight: 500;
  font-size: 16px;
  border: 1px solid #fff;
  border-radius: 16px;
  background: none;
  display: block;
  color: #fff;
  line-height: 1.3;


  &.empty {
    opacity: 0.4;
  }
  &:focus {
    opacity: 1;
  }
`;

const TextArea = ({ value, placeholder, ...rest }) => (
  <StyledInput className={classnames({ empty: !value })} value={value} {...rest}>
    {value || placeholder}
  </StyledInput>
);
export default TextArea;
