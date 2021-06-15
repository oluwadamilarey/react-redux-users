import { createStore, combineReducers } from "redux";

import homepage from "./Containers/Homepage/reducers";

const reducers = combineReducers({ homepage });

export default createStore(reducers);
