import { legacy_createStore,compose ,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { reducer } from "./products/reducer";

const composer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

 const store=legacy_createStore(reducer,composer(applyMiddleware(thunk)))

 export {store}