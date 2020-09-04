import { createSelector } from 'reselect';

const stateSelector = (state) => state.mind;

export const selectMindList = () => createSelector(
  stateSelector,
  (mind) => mind.list,
);

export const selectMindMap = () => createSelector(
  stateSelector,
  (mind) => mind.map,
);

export const selectEditingMind = (mindId) => createSelector(
  stateSelector,
  (mind) => mind.map[mindId],
);
