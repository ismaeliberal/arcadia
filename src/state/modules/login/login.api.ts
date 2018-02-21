import db from './../../../services/firebase';
import { SubmitPayload } from './login.actions.interfaces';

export const addUser = (payload: SubmitPayload) => {
  return db
    .collection('users')
    .doc(payload.mail)
    .set(
      {
        name: payload.name,
        mail: payload.mail,
        tel: payload.tel,
        code: payload.code,
      },
      { merge: true },
    )
    .then(() => {
      return 'Document succesfully written';
    })
    .catch(error => {
      return `Error adding document: ${error}`;
    });
};
