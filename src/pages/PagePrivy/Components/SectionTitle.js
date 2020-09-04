import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h3`
  font-size: 30px;
  line-height: 37px;
  color: #5574F7;
  font-weight: normal;
  text-align: center;
  margin-bottom: 24px;
  margin-top: 0;
`;

export default ({ label, style }) => <StyledTitle style={style} className="text--courgette">{label}</StyledTitle>;
