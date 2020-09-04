import * as types from './Mind.actionTypes';

export const startEditingMind = (mindId) => ({
  type: types.START_EDITING_MIND,
  payload: {
    mindId,
  },
});

export const editMind = (mindId, objectToUpdate) => ({
  type: types.EDIT_MIND,
  payload: {
    mindId,
    objectToUpdate,
  },
});
