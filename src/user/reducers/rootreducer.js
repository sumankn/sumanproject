//  name    :  redux-rootreducer   //
//  author  :  suman              //
//  Date    :  21/08/2021        //

import { combineReducers } from "redux";

import usersreducer from "./reducer";

const rootreducer = combineReducers({
  data: usersreducer,
});

export default rootreducer;
