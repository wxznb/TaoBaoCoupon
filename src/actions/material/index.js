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
		http.get(`http://gw.api.taobao.com/router/rest`, {
			method: "taobao.tbk.dg.material.optional",
			q: queryValue
		})
	});
}

export {
	GetMaterial
}
