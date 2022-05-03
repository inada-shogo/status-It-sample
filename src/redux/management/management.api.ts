import {doc, getDoc} from "firebase/firestore";
import db from "../../firebase";
import {Store} from "../store";
import {MaActions} from "./management.action";
import {buildStatus} from "../../entities/status";
import {buildSetting} from "../../entities/setting";

export const getStatus = async () => {
  const docRef = doc(db, 'sample','status');
  const docSnap = await getDoc(docRef);
  if(docSnap.exists()) {
    Store.dispatch(MaActions.setStatus(buildStatus(docSnap.data())));
  }
}

export const getSetting = async () => {
  const docRef = doc(db, 'sample','setting');
  const docSnap = await getDoc(docRef);
  if(docSnap.exists()) {
    Store.dispatch(MaActions.setSetting(buildSetting(docSnap.data())));
  }
}