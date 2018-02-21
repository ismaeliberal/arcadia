import actionCreatorFactory from 'typescript-fsa';

import { STORE_KEY } from './login.model';
import * as interfaces from './login.actions.interfaces';

const actionCreator = actionCreatorFactory(STORE_KEY);

export const addUserAsyncActionCreator = actionCreator.async<
  interfaces.SubmitPayload,
  interfaces.AddUserAsyncPayloadDone
>('ADD_USER_ASYNC');
