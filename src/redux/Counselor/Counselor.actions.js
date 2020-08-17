import * as types from './Counselor.actionsTypes';

export const updateCounselorFilter = (data) => ({
  type: types.UPDATE_COUNSELOR_FILTER,
  payload: {
    ...data,
  },
});

export const updateCounselorOrderBy = (orderBy) => ({
  type: types.UPDATE_COUNSELOR_ORDER_BY,
  payload: {
    orderBy,
  },
});

export const updateCounselorBooking = (data) => ({
  type: types.UPDATE_COUNSELOR_BOOKING,
  payload: {
    ...data,
  },
});
