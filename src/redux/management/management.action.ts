import actionCreatorFactory from "typescript-fsa";
import * as Type from './management.type';

const ActionCreator = actionCreatorFactory("management");

export const MaActions = {
  api: {
    get: {
      status: ActionCreator("api/get/status"),
      setting: ActionCreator("api/get/setting"),
    }
  },
  setSetting: ActionCreator<Type.SettingType>("setSetting"),
  setStatus: ActionCreator<Type.StatusType>("setStatus")
};
