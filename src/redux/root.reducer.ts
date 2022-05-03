import {combineReducers} from 'redux';
import {ManageState} from "./management/management.type";
import {ManagementReducer} from "./management/management.reducer";

export type State = {
  management: ManageState;
};

export const RootReducer = () =>
  combineReducers({
    management: ManagementReducer
  });
