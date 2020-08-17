import styled from 'styled-components';

export const StyledCalendar = styled.div`
  height: 350px;

  .rbc-month-view {
    border: 0;
    .rbc-header {
      border: 0;
    }
    .rbc-day-bg {
      border: 0;

      &.rbc-off-range-bg {
        background: none;
      }
    }
    .rbc-today {
      background: none;
    }
    .rbc-month-row {
      border: 0;
    }

    .rbc-date-cell {
      padding: 0;
      text-align: center;
    }

    .rbc-month-header {
      margin-bottom: 16px;
    }
  }

`;
