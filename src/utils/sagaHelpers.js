import { call, put } from 'redux-saga/effects';

export function* doSagaActionGenerator({ action, flow, apiService }) {
  const response = yield call(
    apiService,
    { ...action.queryParams },
    {
      ...action.params,
    },
    { ...action.headers },
  );

  const { data } = response;

  if ((!data || response.error) && flow.failure) {
    yield put(flow.failure(response.error || null));
    return;
  }

  if (flow.success) {
    yield put(flow.success(data, { ...action.queryParams, ...action.params }));
  }


  if (typeof action.callback === 'function') {
    yield action.callback({ ...data, meta: action.params });
  }
}
