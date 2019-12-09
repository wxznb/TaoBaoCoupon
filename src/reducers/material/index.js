import {
	GET_MATERIAL
} from "@/actions/types";

const intiMaterialState = {
	material: []
};

const GetMaterial = ( state = intiMaterialState.material, action ) => {
	switch( action.type ) {
		case GET_MATERIAL:
		    return action.data.slice(0);
		default: 
		    return state;
	}
};

export {
	GetMaterial
};
