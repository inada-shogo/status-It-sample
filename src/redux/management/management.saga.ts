import { takeEvery } from "redux-saga/effects";
import { MaActions } from "./management.action";
import {doc, getDoc} from "firebase/firestore";
import db from "../../firebase";
import {buildStatus} from "../../entities/status";
import {Store} from "../store";
import {buildSetting} from "../../entities/setting";

function* tryGetStatus() {
  const getStatus = async () => {
    const docRef = doc(db, 'sample','status');
    const docSnap = await getDoc(docRef);
    if(docSnap.exists()) {
      Store.dispatch(MaActions.setStatus(buildStatus(docSnap.data())));
    }
  }
  yield getStatus();
}


function* tryGetSetting() {
  const getSetting = async () => {
    const docRef = doc(db, 'sample','setting');
    const docSnap = await getDoc(docRef);
    if(docSnap.exists()) {
      Store.dispatch(MaActions.setSetting(buildSetting(docSnap.data())));
    }
  }
  yield getSetting();
}

export function* GetStatus() {
  yield takeEvery(MaActions.api.get.status, tryGetStatus);
}

export function* GetSetting() {
  yield takeEvery(MaActions.api.get.setting, tryGetSetting);
}
