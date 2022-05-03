import {all, fork} from 'redux-saga/effects';
import {GetStatus} from "./management/management.saga";

export const RootSaga = function* root() {
  yield all([
    fork(GetStatus),
  ]);
};
