import React from 'react';
import styled from 'styled-components';

const StyledDots = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${(props) => (props.isScreen ? '100vh' : '100%')};

  .lds-ellipsis {
    display: block;
    position: relative;
    width: 80px;
    height: 30px;
    display: flex;
    justtify-content: center;
    align-items: center;
  }
  .lds-ellipsis div {
    position: absolute;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: #363895;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  .lds-ellipsis div:nth-child(1) {
    left: 8px;
    animation: lds-ellipsis1 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(2) {
    left: 8px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(3) {
    left: 32px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(4) {
    left: 56px;
    animation: lds-ellipsis3 0.6s infinite;
  }
  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(24px, 0);
    }
  }
`;

const Dots = ({ isScreen }) => (
  <StyledDots isScreen={isScreen}>
    <div className="lds-ellipsis">
      <div />
      <div />
      <div />
      <div />
    </div>
  </StyledDots>
);

export default Dots;
