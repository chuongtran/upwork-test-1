import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 16px 0;

  span {
    padding: 0 8px;
    font-size: 16px;
    font-weight: 600;
  }
  &::before, &::after {
    content: "";
    width: 30px;
    height: 1px;
    background: linear-gradient(270deg, #FFFFFF -68.89%, rgba(255, 255, 255, 0) 100%);
  }
  &::before {
    transform: rotate(180deg);
  }
`;

export default ({ className, label }) => (
  <StyledWrapper className={`${className} text--white`}><span>{label}</span></StyledWrapper>
);
