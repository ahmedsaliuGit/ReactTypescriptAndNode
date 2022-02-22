import { combineReducers } from "redux";
import { PostReducer } from "./PostReduce";
import { UserReducer } from "./UserReducer";

export const rootReducer = combineReducers({
  user: UserReducer,
  post: PostReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
