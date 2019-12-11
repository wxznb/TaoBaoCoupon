import { 
    combineReducers 
} from "redux";
import {
	GetMaterial,
	GetTotalResults
} from "./material";

export default combineReducers({
	GetMaterial,
	GetTotalResults
});
