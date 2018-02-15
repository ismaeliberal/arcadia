import { Action, Reducer } from 'redux';
import { isType } from 'typescript-fsa';
import * as actionCreators from './counter.actions.creators';
import { StateModel, initialState } from './counter.model';

const reducer: Reducer<StateModel> = (
  state = initialState,
  action: Action,
): StateModel => {
  if (isType(action, actionCreators.incrementActionCreator)) {
    return {
      ...state,
      count: state.count + action.payload.by,
      isIncrementing: false,
      isError: false,
    };
  }

  if (isType(action, actionCreators.decrementActionCreator)) {
    return {
      ...state,
      count: state.count - action.payload.by,
      isIncrementing: false,
      isError: false,
    };
  }

  if (isType(action, actionCreators.incrementAsyncActionCreator.started)) {
    return {
      ...state,
      isIncrementing: true,
      isError: false,
    };
  }

  if (isType(action, actionCreators.incrementAsyncActionCreator.done)) {
    return {
      ...state,
      count: state.count + action.payload.result.id,
      isIncrementing: false,
      isError: false,
    };
  }

  if (isType(action, actionCreators.incrementAsyncActionCreator.failed)) {
    return {
      ...state,
      isIncrementing: false,
      isError: true,
    };
  }

  if (isType(action, actionCreators.decrementAsyncActionCreator.started)) {
    return {
      ...state,
      isDecrementing: true,
      isError: false,
    };
  }

  if (isType(action, actionCreators.decrementAsyncActionCreator.done)) {
    return {
      ...state,
      count: state.count - action.payload.result.id,
      isDecrementing: false,
      isError: false,
    };
  }

  if (isType(action, actionCreators.decrementAsyncActionCreator.failed)) {
    return {
      ...state,
      isIncrementing: false,
      isError: true,
    };
  }

  return state;
};

export default reducer;
