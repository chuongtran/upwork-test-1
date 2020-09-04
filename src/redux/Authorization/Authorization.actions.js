import * as types from './Authorization.actionTypes';

export const updateLoginDetails = (payload) => ({
  type: types.UPDATE_LOGIN_DETAILS,
  payload,
});

export const updateRegisterDetails = (payload) => ({
  type: types.UPDATE_REGISTER_DETAILS,
  payload,
});

export const updateForgotPasswordDetails = (payload) => ({
  type: types.UPDATE_FORGOT_PASSWORD_DETAILS,
  payload,
});
