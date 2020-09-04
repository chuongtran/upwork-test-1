import React, { useMemo } from 'react';
import styled from 'styled-components';
import moment from 'moment';

const StyledWrapper = styled.div`

`;

const StyledDate = styled.div`
  font-size: 14px;
  font-weight: 600;
`;

const StyledEvent = styled.div`
  width: 45px;
  height: 45px;
  border: 1px solid #fff;
  margin: 6px 0 10px;
  border-radius: 4px;
`;

const getDatesInWeek = (date) => {
  const startDate = moment(date).startOf('week');
  const dateArray = [0, 1, 2, 3, 4, 5, 6];
  return dateArray.map((dateIndex) => moment(startDate).add('day', dateIndex));
};

const Weekly = ({ date }) => {
  const dates = useMemo(() => getDatesInWeek(date), [date]);
  return (
    <StyledWrapper className="flex justify-content-space-between">
      {dates.map((dateInWeek, dateIndex) => (
        <StyledDate className="text--white flex flex--column align-items-center justify-content-center" key={dateIndex}>
          <span>{dateInWeek.format('ddd')}</span>
          <StyledEvent />
          <span>{dateInWeek.format('DD')}</span>
        </StyledDate>
      ))}
    </StyledWrapper>
  );
};

export default Weekly;
