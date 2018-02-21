import { SagaIterator } from 'redux-saga';
import { call, takeLatest } from 'redux-saga/effects';
import { addUserAsyncActionCreator } from './login.actions.creators';
import { AddUserAsyncPayloadDone } from './login.actions.interfaces';
import { isType, AnyAction } from 'typescript-fsa';
import { bindAsyncAction } from 'typescript-fsa-redux-saga-extended';
import * as api from './login.api';

const addUserAsyncHandler = bindAsyncAction(addUserAsyncActionCreator)(
  function*(action: AnyAction): SagaIterator {
    if (isType(action, addUserAsyncActionCreator.started)) {
      // console.log(action.payload);
      const res = yield call(api.addUser, action.payload);
      // console.log(res);
      //   if (res.status >= 400) {
      //     throw new Error(`Server error: ${res.status}`);
      //   }

      const result: AddUserAsyncPayloadDone = {
        response: res,
      };

      return result;
    }
  },
);

/**
 * Exportamos un objeto con todas las sagas,
 * ya que siempre usaremos todas a la vez
 */
export const sagas = {
  addUserAsync: function* watchAddUserAsync() {
    yield takeLatest(addUserAsyncActionCreator.started, addUserAsyncHandler);
  },
};
