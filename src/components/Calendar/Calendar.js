import React from 'react';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';

// SELECTORS
import { selectCounselorBooking } from 'redux/Counselor/Counselor.selectors';

// ACTIONS
import { updateCounselorBooking } from 'redux/Counselor/Counselor.actions';

// COMPONENTS
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import CalendarToolbar from './CalendarToolbar';

import { StyledCalendar } from './CalendarStyle';

import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const Calendar = () => {
  const dispatch = useDispatch();
  const { currentDate, selectedSlot, view } = useSelector(selectCounselorBooking());

  const onSelectSlot = (date) => {
    dispatch(updateCounselorBooking({
      selectedSlot: date,
    }));
  };

  return (
    <StyledCalendar className="calendar">
      <BigCalendar
        longPressThreshold={100}
        selectable
        localizer={localizer}
        events={selectedSlot ? [selectedSlot] : []}
        components={{
          toolbar: CalendarToolbar,
        }}
        date={currentDate}
        onSelectSlot={onSelectSlot}
        onNavigate={(e) => console.log(e)}
        onView={(toView) => dispatch(updateCounselorBooking({
          view: toView,
        }))}
        view={view}
      />
    </StyledCalendar>
  );
};

export default Calendar;
