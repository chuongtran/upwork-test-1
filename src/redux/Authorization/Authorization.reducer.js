import * as types from './Authorization.actionTypes';

import { initialState } from './Authorization.initialState';

export default (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_LOGIN_DETAILS:
      return {
        ...state,
        login: {
          ...state.login,
          ...action.payload,
        },
      };

    case types.UPDATE_REGISTER_DETAILS:
      return {
        ...state,
        register: {
          ...state.register,
          ...action.payload,
        },
      };

    case types.UPDATE_FORGOT_PASSWORD_DETAILS:
      return {
        ...state,
        forgotPassword: {
          ...state.forgotPassword,
          ...action.payload,
        },
      };

    default:
      return { ...state };
  }
};
