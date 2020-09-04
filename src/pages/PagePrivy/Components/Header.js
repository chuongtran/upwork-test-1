import React from 'react';
import styled from 'styled-components';

import logoCheckin from './Images/logo_checkin.png';

const StyledHeader = styled.div`
  background-image: url(/assets/images/bg_header.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  height: 370px;
  text-align: center;
  padding-top: 60px;

  img {
    width: 170px;
  }
`;

const PagePrivyHeader = () => (
  <StyledHeader>
    <img src={logoCheckin} />
  </StyledHeader>
);
export default PagePrivyHeader;
