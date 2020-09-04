import { get } from 'lodash';
import { createSelector } from 'reselect';

export const selectAuthorization = (path) => createSelector(
  (state) => state.authorization,
  (authorization) => get(authorization, path),
);
