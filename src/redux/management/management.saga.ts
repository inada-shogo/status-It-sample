import { takeEvery } from "redux-saga/effects";
import { MaActions } from "./management.action";
import {getSetting, getStatus} from "./management.api";

function* tryGetStatus() {
  yield getStatus();
}

function* tryGetSetting() {
  yield getSetting();
}

export function* GetStatus() {
  yield takeEvery(MaActions.api.get.status, tryGetStatus);
}

export function* GetSetting() {
  yield takeEvery(MaActions.api.get.setting, tryGetSetting);
}
