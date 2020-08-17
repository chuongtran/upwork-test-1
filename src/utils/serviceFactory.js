import axios from 'axios';
import { pick } from 'lodash';
import { getToken, deleteToken } from 'utils/tokenHelper';
import { compile } from 'path-to-regexp';
import { API_URL } from 'configs';
import { push } from 'connected-react-router';

// ACTIONS
import { addNotification } from 'redux/GlobalUI/GlobalUI.actions';

// EVENT EMITTER
import EventEmitter from 'event';

// CONSTANT
import { EVENTS } from 'constants/events';

const defaults = {
  cancellable: false,
  actions: {
    get: {
      method: 'GET',
    },
    create: {
      method: 'POST',
    },
    update: {
      method: 'PUT',
    },
    query: {
      method: 'GET',
    },
    remove: {
      method: 'DELETE',
    },
    delete: {
      method: 'DELETE',
    },
  },
};

export const inProgress = {};

const API_ERROR_MESSAGE = (code, error) => {
  let message = '';

  if (code === 500) {
    message = 'An error has been occured, we are working to fix this issue.';
  } else {
    message = error;
  }

  return message;
};

export function createService(url, customActions) {
  const actions = { ...defaults.actions, ...customActions };

  function Resource() {}
  const keys = Object.keys(actions);
  keys.forEach((key) => {
    const action = actions[key];
    const { isSafe } = action;
    const { CancelToken } = axios;
    let cancel;

    Resource[key] = (params, data, additionalHeaders = {}) => {
      const toUrlWithParams = compile(action.url || url, {
        encode: encodeURIComponent,
      });
      if (!action.parallel && cancel !== undefined) {
        cancel('cancelled');
      }

      const queryParams = params
        ? Object.keys(params).filter(
          (v) => (action.url || url).indexOf(`:${v}`) === -1,
        )
        : [];

      const headersFormData = action.isFormData
        ? { 'content-type': 'multipart/form-data' }
        : {};

      const axiosConfigs = {
        url: `${API_URL}${toUrlWithParams(params)}`,
        method: action.method,
        params: pick(params, queryParams),
        data,
        withCredentials: false,
        ...action.config,
        headers: {
          ...headersFormData,
          ...additionalHeaders,
          'Access-Control-Allow-Origin': '*',
        },
        cancelToken: new CancelToken((c) => {
          cancel = c;
          if (!action.cannotBeCancelled) {
            inProgress[key] = c;
          }
        }),
      };
      if (!isSafe) {
        const accessToken = getToken();
        axiosConfigs.headers = {
          ...axiosConfigs.headers,
          Authorization: `Bearer ${accessToken}`,
        };
      }

      const promise = axios(axiosConfigs)
        .then((response) => {
          delete inProgress[key];
          return response;
        })
        .catch((err) => {
          if (typeof err === 'object' && err.message === 'cancelled') {
            return {
              status: 'cancelled',
            };
          }

          // TOOD: Should have a better way
          const { store } = window;
          const { dispatch } = store;
          const errMsg = err.response.data.message;

          const errorMessage = API_ERROR_MESSAGE(err.response.status, errMsg);

          if (err.response.status === 401) {
            deleteToken();

            if (window.location.pathname !== '/employee/login' && window.location.pathname !== '/login') {
              dispatch(push('/'));
            }
          }

          if (errMsg === 'Your bank item has just updated. Please re-authenticate your credential') {
            const eventEmitter = EventEmitter.getInstance();

            eventEmitter.emitEvent(EVENTS.REQUEST_UPDATE_PUBLIC_TOKEN, {});
          }

          if (errMsg !== 'Your bank item has just updated. Please re-authenticate your credential'
          && errMsg !== 'Insufficient Funds') {
            dispatch(
              addNotification({
                type: 'error',
                message: errorMessage,
              }),
            );
          }

          return { error: err };
        });
      return promise;
    };
  });
  return Resource;
}

export function createURLSearchParams(data) {
  const params = new URLSearchParams();
  Object.keys(data).forEach((key) => {
    params.append(key, data[key]);
  });
  return params;
}
