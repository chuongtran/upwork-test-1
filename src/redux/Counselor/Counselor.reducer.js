import * as types from './Counselor.actionsTypes';

import { initialState } from './Counselor.initialState';

export default (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_COUNSELOR_FILTER: {
      return {
        ...state,
        filter: {
          ...state.filter,
          ...action.payload,
        },
      };
    }

    case types.UPDATE_COUNSELOR_ORDER_BY: {
      return {
        ...state,
        orderBy: action.payload.orderBy,
      };
    }

    case types.UPDATE_COUNSELOR_BOOKING: {
      return {
        ...state,
        booking: {
          ...state.booking,
          ...action.payload,
        },
      };
    }

    default: return {
      ...state,
    };
  }
};
