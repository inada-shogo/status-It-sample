import {combineReducers} from 'redux';
import {ManageState} from "./management/management.type";
import {ManagementReducer} from "./management/management.reducer";
import {UserState} from "./user/user.type";
import {UserReducer} from "./user/user.reducer";

export type State = {
  user: UserState;
  management: ManageState;
};

export const RootReducer = () =>
  combineReducers({
    user: UserReducer,
    management: ManagementReducer
  });
