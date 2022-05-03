import firebase from "firebase/compat";
import {SettingType} from "../redux/management/management.type";

export const buildSetting = (data: firebase.firestore.DocumentData) => {
  const setting: SettingType = {
    startTime: data.startTime,
    endTime: data.endTime,
    holiday: data.holiday,
    url: data.url,
    isDisplay: data.isDisplay
  }
  return setting;
}