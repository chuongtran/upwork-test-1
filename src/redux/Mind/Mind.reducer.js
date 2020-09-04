import { initialState } from './Mind.initialState';
import * as types from './Mind.actionTypes';

export default (state = initialState, action) => {
  switch (action.type) {
    case types.START_EDITING_MIND:
      return {
        ...state,
        edit: {
          ...state.map[action.payload.mindId],
        },
      };

    case types.EDIT_MIND: {
      return {
        ...state,
        map: {
          ...state.map,
          [action.payload.mindId]: {
            ...state.map[action.payload.mindId],
            ...action.payload.objectToUpdate,
          },
        },
      };
    }
    default:
      return { ...state };
  }
};
