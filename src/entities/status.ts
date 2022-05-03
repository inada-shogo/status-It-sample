import firebase from "firebase/compat";

export type StatusType = {
  smoking?: string,
  noSmoking?: string,
}

export const buildStatus = (data: firebase.firestore.DocumentData) => {
  const status: StatusType = {
    smoking: data.smoking,
    noSmoking: data.noSmoking
  }
  return status;
}