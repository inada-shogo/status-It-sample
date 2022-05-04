import {reducerWithInitialState} from "typescript-fsa-reducers";
import {UserState} from "./user.type";
import {UserActions} from "./user.action";

const initialState: UserState = {
  isLogin: false
};

export const UserReducer = reducerWithInitialState<UserState>(
  initialState
)
  .case(UserActions.setIsLogin, (state, payload) => ({
    ...state,
    isLogin: payload
  }))
