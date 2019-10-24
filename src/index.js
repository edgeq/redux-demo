import C from "./constants";
import appReducer from "./store/reducers";
import initialState from "./initialState.json";
import { createStore } from "redux";

const store = createStore(appReducer, initialState); // holds state-friendly methods & initial state

console.log("initial state", store.getState()); // looks at current state

// mutates state
store.dispatch({
  type: C.ADD_DAY,
  payload: {
    resort: "Mt. Shasta",
    date: "2016-10-28",
    powder: false,
    backcountry: true
  }
});

console.log("next state", store.getState());
