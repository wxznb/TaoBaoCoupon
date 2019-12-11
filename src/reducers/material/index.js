import {
	GET_MATERIAL,
	GET_TOTAL_RESULTS
} from "@/actions/types";

const initMaterialState = {
	material: [],
	total_results: 0
};

const GetMaterial = ( state = initMaterialState.material, action ) => {
	switch( action.type ) {
		case GET_MATERIAL:
		    return action.data.slice(0);
		default: 
		    return state;
	}
};

const GetTotalResults = ( state = initMaterialState.total_results, action ) => {
	switch( action.type ) {
		case GET_TOTAL_RESULTS:
		    return action.data;
		default: 
		    return state;
	}
}

export {
	GetMaterial,
	GetTotalResults
};
