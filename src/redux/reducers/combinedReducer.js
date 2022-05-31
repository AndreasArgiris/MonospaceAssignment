//reducers combiner
//combine
import { combineReducers } from "redux";
//reducers
import selectedUsersReducer from "./selectedUsersReducer";
import usersReducer from "./usersReducer";

const combinedReducer=combineReducers({
    users:usersReducer,
    selectedUsers:selectedUsersReducer
})

export default combinedReducer;