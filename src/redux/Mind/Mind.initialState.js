import { MINDS } from 'data/mind.constants';
import { keyBy } from 'lodash';

export const initialState = {
  list: MINDS,
  map: keyBy(MINDS, 'id'),
  edit: null,
};
