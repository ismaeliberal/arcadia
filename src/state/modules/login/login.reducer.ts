import { Action, Reducer } from 'redux';
import { isType } from 'typescript-fsa';
import * as actionCreators from './login.actions.creators';
import { StateModel, initialState } from './login.model';

const reducer: Reducer<StateModel> = (
  state = initialState,
  action: Action,
): StateModel => {
  if (isType(action, actionCreators.addUserAsyncActionCreator.started)) {
    return {
      ...state,
      name: action.payload.name,
      mail: action.payload.mail,
      tel: action.payload.tel,
      code: action.payload.code,
      isError: false,
    };
  }

  if (isType(action, actionCreators.addUserAsyncActionCreator.done)) {
    return {
      ...state,
    };
  }

  if (isType(action, actionCreators.addUserAsyncActionCreator.failed)) {
    return {
      ...state,
      isError: true,
    };
  }

  return state;
};

export default reducer;
