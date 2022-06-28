import { combineReducers } from "redux";
// Import all reducers
import gamesReducer from "./gamesReducer";


const rootReducer = combineReducers({
    games: gamesReducer,
});

export default rootReducer;