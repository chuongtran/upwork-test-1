import React from 'react';
import styled from 'styled-components';

import { PageContainer, Navigation, Container } from 'components/PageLayout';
import { useHistory } from 'react-router-dom';
import {
  ChevronLeft, List,
} from 'components/Icons';
import Calendar from 'components/Calendar/Calendar';

const CalendarWrapper = styled.div`
  color: #fff;
  fill: #fff;

  .rbc-day-bg {
    border: 1px solid #fff !important;
    border-radius: 4px;
    height: 45px;
    max-width: 45px;
    // visibility: hidden;
  }
  .rbc-month-view {
    height: auto;
  }
  .rbc-month-row {
    min-height: 75px;
  }
  .rbc-row-bg {
    min-height: 45px;
    position: relative !important;
    justify-content: space-between;
  }
  .rbc-off-range-bg, .rbc-off-range {
    opacity: 0;
    visibility: hidden;
  }
  .rbc-row {
    justify-content: space-between;
  }
  .rbc-date-cell {
    font-size: 14px;
    font-weight: 600;
    max-width: 45px;
    line-height: 28px;
    pointer-events: none;
  }
`;

const PageMindMonthly = () => {
  const history = useHistory();
  return (
    <PageContainer>
      <div id="pageMingMonthly">
        <Navigation
          className="text--white"
          leftElem={<ChevronLeft onClick={() => history.push('/mind/weekly')} />}
          rightElem={<List onClick={() => history.push('/mind/list')} />}
          label="Mind's reactions"
          noBackground
        />
        <Container>
          <CalendarWrapper>
            <Calendar className="text--white" selectable={false} />
          </CalendarWrapper>
        </Container>
      </div>
    </PageContainer>
  );
};

export default PageMindMonthly;
