import * as actionCreators from './login.actions.creators';
import { UserForm } from 'src/state/modules/login/login.model';

export const addUserAsync = ({ name, mail, tel, code }: UserForm) => {
  return actionCreators.addUserAsyncActionCreator.started({
    name,
    mail,
    tel,
    code,
  });
};
