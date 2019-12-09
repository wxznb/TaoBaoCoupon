import {
	GET_MATERIAL
} from "../types";
import http from "@/api/request";

const getMaterial = data => ({
	type: GET_MATERIAL,
	data
});

const GetMaterial = ( queryValue ) => dispatch => {
	return new Promise(( resolve, reject ) => {
		http.get(`http://ovoloop.xyz/api/tbk/DgOptimusMaterial`, {
			q: queryValue
		}).then( (data) => {
			console.log("resolve");
			if ( !!data.data ) {
				dispatch(getMaterial(data.data));
				resolve();
			} else {
				reject();
			}
		}, () => {
			console.log("reject");
			reject();
		});
	});
}

export {
	GetMaterial
}
