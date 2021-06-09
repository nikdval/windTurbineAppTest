import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import turbineReducer from "./turbineReducer";

export const composeEnhancers =
  (window && (window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const rootReducer = combineReducers({
  turbine: turbineReducer,
});

const store = createStore(rootReducer, enhancer);

export default store;