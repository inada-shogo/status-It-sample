import {all, fork} from 'redux-saga/effects';
import {GetSetting, GetStatus} from "./management/management.saga";

export const RootSaga = function* root() {
  yield all([
    fork(GetStatus),
    fork(GetSetting),
  ]);
};
