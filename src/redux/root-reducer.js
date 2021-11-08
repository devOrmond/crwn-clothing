//Root reducer is the code that combines all of 
//the other states together

import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";

export default combineReducers({
    user: userReducer
})