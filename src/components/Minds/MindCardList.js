import React from 'react';
import styled from 'styled-components';
import MindCard from './MindCard';

const StyledList = styled.div`

`;

const MindCardList = ({ minds }) => (
  <StyledList>
    {minds.map((item, itemIndex) => <MindCard mind={item} key={itemIndex} />)}
  </StyledList>
);

export default MindCardList;
