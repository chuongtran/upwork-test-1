import React from 'react';
import styled from 'styled-components';

const StyledMind = styled.div`
  width: ${(props) => (props.single ? '100px' : 'calc(33% - 8px)')} ;
  border-radius: 8px;
  margin-bottom: 16px;
  height: 100px;
  font-size: 14px;
  font-family: Gilroy;
  font-weight: 600;

  svg {
    margin-bottom: 8px;
  }

  &.row-1 {
    background: linear-gradient(133.71deg, #75D6A1 -12.8%, rgba(40, 191, 255, 0) 129.85%), linear-gradient(132.8deg, #FFCA00 -30.25%, rgba(255, 202, 0, 0) 129.01%);
  }
  &.row-2 {
    background: linear-gradient(132.8deg, #7EE3DB -30.25%, rgba(126, 227, 219, 0) 129.01%);
  }
  &.row-3 {
    background: linear-gradient(132.8deg, #B653FF -30.25%, rgba(182, 83, 255, 0) 129.01%);
  }
  &.row-4 {
    background: linear-gradient(132.8deg, #FF7B7C -30.25%, rgba(255, 123, 124, 0) 129.01%);
  }
  &.row-5 {
    background: linear-gradient(132.8deg, #B7B7B7 -30.25%, rgba(183, 183, 183, 0) 129.01%);
  }
`;

export default ({
  mind, single, className, onClick,
}) => (
  <StyledMind
    single={single}
    onClick={() => onClick(mind)}
    className={`${className} flex flex--column align-items-center justify-content-center`}
    key={mind.id}
  >
    {mind.icon}
    <span className="text--white">{mind.title}</span>
  </StyledMind>
);
