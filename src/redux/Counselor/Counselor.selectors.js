import { createSelector } from 'reselect';

const counselorSelector = (state) => state.counselor;

export const selectCounselorFilter = () => createSelector(
  counselorSelector,
  (counselor) => counselor.filter,
);

export const selectCounselorOrderBy = () => createSelector(
  counselorSelector,
  (counselor) => counselor.orderBy,
);

export const selectCounselorBooking = () => createSelector(
  counselorSelector,
  (counselor) => counselor.booking,
);
