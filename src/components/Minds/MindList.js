import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Mind from './Mind';

const StyledList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const MindList = ({ minds, onItemClick }) => {
  const rows = [];
  let rowIndex = 0;
  minds.forEach((mind, mindIndex) => {
    rows[rowIndex] = rows[rowIndex] || [];
    rows[rowIndex].push(mind);
    if (mindIndex % 3 === 2) {
      rowIndex += 1;
    }
  });
  return (
    <StyledList>
      {
        rows.map((row, rowIdx) => row.map((item, itemIndex) => (
          <Mind
            mind={item}
            onClick={() => onItemClick(item)}
            className={`row-${1 + rowIdx}`}
            key={`${rowIdx}-${itemIndex}`}
          >
            {item.icon}
            <span className="text--white">{item.title}</span>
          </Mind>
        )))
      }
    </StyledList>
  );
};
MindList.propTypes = {
  minds: PropTypes.array.isRequired,
  onItemClick: PropTypes.func.isRequired,
};

export default MindList;
