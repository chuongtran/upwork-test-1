import React, { useCallback } from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';

// ACTIONS
import { updateCounselorBooking } from 'redux/Counselor/Counselor.actions';

// SELECTORS
import { selectCounselorBooking } from 'redux/Counselor/Counselor.selectors';

// COMPONENTS
import { CalendarChevronLeft, CalendarChevronRight } from 'components/Icons';

const CalendarToolbar = ({ label, view }) => {
  const dispatch = useDispatch();
  const { currentDate } = useSelector(selectCounselorBooking());

  const onPrevMonth = useCallback(() => {
    dispatch(
      updateCounselorBooking({
        currentDate: new Date(moment(currentDate).subtract(1, 'month')),
      }),
    );
  }, [currentDate]);

  const onNextMonth = useCallback(() => {
    dispatch(
      updateCounselorBooking({
        currentDate: new Date(moment(currentDate).add(1, 'month')),
      }),
    );
  }, [currentDate]);

  const onBackToMonthView = useCallback(() => {
    dispatch(
      updateCounselorBooking({
        view: 'month',
      }),
    );
  }, [currentDate]);

  return (
    <div className="flex align-items-center justify-content-space-between mb-3">
      <div>
        {
          view === 'day' && (
            <span onClick={onBackToMonthView}>Back</span>
          )
        }

      </div>
      <div className="flex align-items-center">
        {view !== 'week' && <CalendarChevronLeft onClick={onPrevMonth} />}
        <span className="ml-3 mr-3 text--size-17 text--semibold">
          {label}
        </span>
        {view !== 'week' && <CalendarChevronRight onClick={onNextMonth} />}
      </div>
      <div />
    </div>
  );
};

export default CalendarToolbar;
