import actionCreatorFactory from "typescript-fsa";

const ActionCreator = actionCreatorFactory("user");

export const UserActions = {
  setIsLogin: ActionCreator<boolean>("setIsLogin")
};
