import { UserFirebase } from './login.model';

export interface AddUserAsyncPayloadDone {
  response: {
    status: number;
    data: Array<UserFirebase>;
  };
}

export interface SubmitPayload {
  name: string;
  mail: string;
  tel: string;
  code: string;
}
