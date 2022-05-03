import {reducerWithInitialState} from "typescript-fsa-reducers";
import {MaActions} from "./management.action";
import {ManageState} from "./management.type";
import {ManagementCollection} from "../../components/pages/Management/management.collection";

const initialState: ManageState = {
  status: ManagementCollection.INIT_STATUS,
  setting: ManagementCollection.INIT_SETTING
};

export const ManagementReducer = reducerWithInitialState<ManageState>(
  initialState
)
  .case(MaActions.setSetting, (state, payload) => ({
    ...state,
    setting: payload
  }))
  .case(MaActions.setStatus, (state, payload) => ({
    ...state,
    status: payload
  }));
