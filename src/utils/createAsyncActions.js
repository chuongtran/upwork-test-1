import { createAction } from 'redux-actions';

export function createAsyncActions(type) {
  const request = `${type}_REQUEST`;
  const success = `${type}_SUCCESS`;
  const fail = `${type}_FAILURE`;
  return [request, success, fail].map((actionType) => createAction(actionType));
}
