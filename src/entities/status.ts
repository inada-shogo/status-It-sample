import firebase from "firebase/compat";
import {StatusType} from "../redux/management/management.type";

export const buildStatus = (data: firebase.firestore.DocumentData) => {
  const status: StatusType = {
    smoking: data.smoking,
    noSmoking: data.noSmoking
  }
  return status;
}