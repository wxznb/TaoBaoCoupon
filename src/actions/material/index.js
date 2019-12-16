import {
	GET_MATERIAL,
	GET_TOTAL_RESULTS
} from "../types";
import http from "@/api/request";

const getMaterial = data => ({
	type: GET_MATERIAL,
	data
});

const getTotalResults = data => ({
	type: GET_TOTAL_RESULTS,
	data
});

const GetMaterial = ( {
	searchText,
	page
} ) => dispatch => {
	return new Promise(( resolve, reject ) => {
		http.get(`tbk/DgOptimusMaterial`, {
			q: searchText,
			page_no: page
		}).then( (data) => {
			console.log("resolve");
			if ( !!data.data ) {
				dispatch(getMaterial(data.data.data));
				dispatch(getTotalResults(data.data.total_results));
				resolve();
			} else {
				dispatch(GetMaterial({
					searchText,
					page
				})).then(() => {
					resolve()
				}, () => {
					reject();
				});
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
