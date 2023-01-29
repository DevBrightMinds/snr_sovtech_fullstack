import { combineReducers } from "redux";

import {
    Characters,
    SelectedCharacter,
    SelectedPagePosition
} from "./Reducers";

const allReducers = combineReducers({
    Characters,
    SelectedCharacter,
    SelectedPagePosition
});

export default allReducers;