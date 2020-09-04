import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  padding-bottom: 90px;
`;
export default ({ children }) => <StyledWrapper>{children}</StyledWrapper>;
