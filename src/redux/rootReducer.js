import { combineReducers } from 'redux';

// REDUCERS
import { connectRouter } from 'connected-react-router';

import { apiStatus } from './ApiStatus/ApiStatus.reducer';
import counselor from './Counselor/Counselor.reducer';
import authorization from './Authorization/Authorization.reducer';
import mind from './Mind/Mind.reducer';

const AppReducer = (history) => combineReducers({
  router: connectRouter(history),
  apiStatus,
  counselor,
  authorization,
  mind,
});

const rootReducer = (history) => (state, action) => AppReducer(history)(state, action);

export default rootReducer;
