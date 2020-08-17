import React from 'react';
import styled from 'styled-components';

const StyledAvatar = styled.div`
  width: ${(props) => props.width}px;
  height: ${(props) => props.width}px;
  background-image: url('/assets/images/bg_white-circle.svg');
  background-size: cover;
  padding: ${(props) => props.width / 9}px;

  img {
    width: 100%;
  }
`;


const Avatar = ({ src, width }) => (
  <StyledAvatar width={width} className="flex align-items-center justify-content-center">
    <img src={src} />
  </StyledAvatar>
);

export default Avatar;
