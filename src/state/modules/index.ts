import {
  default as counterReducer,
  STORE_KEY as COUNTER_STORE_KEY,
} from './counter';

export const reducers = {
  [COUNTER_STORE_KEY]: counterReducer,
};
