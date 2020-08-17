import React from 'react';
import styled from 'styled-components';

const StyledSpinner = styled.div`
  color: official;
  display: inline-block;
  position: relative;
  width: 40px;
  height: 40px;
  padding-left: 10px;
  padding-right: 10px;

  div {
    transform-origin: 10px 20px;
    animation: lds-spinner 0.8s linear infinite;
    &::after {
      content: " ";
      display: block;
      position: absolute;
      top: 3px;
      left: 10px;
      width: 2px;
      height: 8px;
      border-radius: 20%;
      background: #2b2b2b;
    }

    &:nth-child(1) {
      transform: rotate(0deg);
      animation-delay: -0.7s;
    }
    &:nth-child(2) {
      transform: rotate(45deg);
      animation-delay: -0.6s;
    }
    &:nth-child(3) {
      transform: rotate(90deg);
      animation-delay: -0.5s;
    }
    &:nth-child(4) {
      transform: rotate(135deg);
      animation-delay: -0.4s;
    }
    &:nth-child(5) {
      transform: rotate(180deg);
      animation-delay: -0.3s;
    }
    &:nth-child(6) {
      transform: rotate(225deg);
      animation-delay: -0.2s;
    }
    &:nth-child(7) {
      transform: rotate(270deg);
      animation-delay: -0.1s;
    }
    &:nth-child(8) {
      transform: rotate(315deg);
    }

  }


  @keyframes lds-spinner {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

const Spinner = () => (
  <StyledSpinner className="spinner">
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    {/* <div />
    <div />
    <div />
    <div /> */}
  </StyledSpinner>
);
export default Spinner;
