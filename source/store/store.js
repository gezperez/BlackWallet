import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import cryptosReducer from "./reducers/crypto";

const rootReducer = combineReducers({
	cryptos: cryptosReducer,
});

const configureStore = createStore(rootReducer, applyMiddleware(thunk));

export default configureStore;
