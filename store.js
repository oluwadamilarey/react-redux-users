import { createStore, combineReducers } from "redux";

import homepage from "./src/Containers/Homepage/reducers";

const reducers = combineReducers({ homepage });

export default createStore(reducers);
