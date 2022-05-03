import {doc, getDoc} from "firebase/firestore";
import db from "../firebase";
import {buildStatus} from "../entities/status";

export const getStatus = async () => {
  const docRef = doc(db, 'sample','status');
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? buildStatus(docSnap.data()): undefined;
}