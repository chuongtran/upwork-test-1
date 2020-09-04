import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const StyledCard = styled.div`
  background: rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  min-height: 140px;
  min-width: calc(50% - 8px);
  margin-bottom: 16px;
`;

const RecommendedCards = ({ items }) => (
  <StyledWrapper>
    {items.map((item, itemIndex) => (
      <StyledCard key={itemIndex}>
        {item}
      </StyledCard>
    ))}
  </StyledWrapper>
);

export default RecommendedCards;
