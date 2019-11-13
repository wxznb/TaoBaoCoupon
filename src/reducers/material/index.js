import {
	GET_MATERIAL
} from "@/actions/types";

const GetMaterial = ( state = {}, action ) => {
	switch( action.type ) {
		case GET_MATERIAL:
		    return action.data;
		default: 
		    return state;
	}
};

export {
	GetMaterial
};
