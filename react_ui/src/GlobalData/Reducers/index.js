import idValue from "./IdReducer";
import NameReducer from "./nameReducer";

import { combineReducers } from "redux";

const allReducers = combineReducers({
  id: idValue,
  name: NameReducer
});

export default allReducers;
