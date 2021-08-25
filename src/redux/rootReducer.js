//  name    :  redux-rootreducer   //
//  author  :  suman              //
//  Date    :  21/08/2021        //

import { combineReducers } from "redux";

import usersReducer from "./reducer";

const rootReducer = combineReducers({
  data: usersReducer,
});

export default rootReducer;
