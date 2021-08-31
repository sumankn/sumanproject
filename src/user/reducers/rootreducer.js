//  name    :  redux-rootreducer   //
//  author  :  suman              //
//  Date    :  21/08/2021        //

import { combineReducers } from "redux";

import reducer from "../reducers/reducer";

const rootreducer = combineReducers({
  data: reducer,
});

export default rootreducer;
