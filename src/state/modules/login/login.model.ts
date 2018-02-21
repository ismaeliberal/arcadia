export const STORE_KEY = 'login';

/**
 * type for global "Readonly".
 */
export type StateModel = Readonly<{
  name: string;
  mail: string;
  tel: string;
  code: string;
  isError: boolean;
}>;

/**
 * Initial store state
 */
export const initialState: StateModel = {
  name: '',
  mail: '',
  tel: '',
  code: '',
  isError: false,
};

/**
 * Form model
 */
export type UserForm = {
  name: string;
  mail: string;
  tel: string;
  code: string;
};

/**
 * User firebase
 */
export type UserFirebase = {
  name: string;
  mail: string;
  tel: string;
  points: number;
};
