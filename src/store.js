import { createStore, combineReducers } from "redux";

import HomePage from "./Containers/HomePage/reducers";

const reducers = combineReducers({ HomePage });

export default createStore(reducers);
