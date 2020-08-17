import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${(props) => props.theme.inputHeight};
  border-radius: ${(props) => props.theme.inputHeight};
  border: 1px solid ${(props) => (props.bordered ? '#000' : '#fff')};
  width: 100%;
  cursor: pointer;
  background: none;
  font-size: 16px;
  line-height: 19px;
  color: ${(props) => (props.whiteBackground ? props.theme.colorText : '#fff')};
  background: ${(props) => (props.whiteBackground ? '#fff' : 'none')};
  padding: 0 20px;
  font-weight: 600;
  white-space: nowrap;
  text-overflow: ellipsis;

  &:disabled {
    opacity: 0.4;
  }

  & + * {
    margin-top: 16px;
  }
  & > span {
    flex: 1;  
  }

`;

export default (props) => <StyledButton {...props} />;
