import { all } from 'redux-saga/effects';
import {
  default as counterReducer,
  STORE_KEY as COUNTER_STORE_KEY,
} from './counter';

import {
  default as loginReducer,
  STORE_KEY as LOGIN_STORE_KEY,
  sagas as loginSagas,
} from './login';

export const reducers = {
  [COUNTER_STORE_KEY]: counterReducer,
  [LOGIN_STORE_KEY]: loginReducer,
};

export function* rootSaga() {
  yield all([loginSagas.addUserAsync()]);
}
