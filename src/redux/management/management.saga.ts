import { takeEvery } from "redux-saga/effects";
import { MaActions } from "./management.action";
import {doc, getDoc} from "firebase/firestore";
import db from "../../firebase";
import {buildStatus} from "../../entities/status";
import {Store} from "../store";

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

export function* GetStatus() {
  yield takeEvery(MaActions.api.get.status, tryGetStatus);
}
