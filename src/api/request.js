/**
 *  二次封装axios
 */
import axios from "axios";
import sign from "@/api/sign";

/**
 * @param { string } url
 * @param { {} } params
 * @param { {} } options
 */
function get ( url, params, options = {} ) {
	return new Promise(( resolve, reject ) => {
		axios({
			method: "get",
			url: `${window.location.origin}/api/${url}`,
			params,
			crossOrigin: true,
		    withCredentials: false
		}).then((response) => {
			console.log(response);
			resolve(response.data);
		}).catch((error) => {
			reject(error);
		});
	});
}

/**
 * @param { string } url
 * @param { {} } body
 * @param { {} } options
 */
function post ( url, params, body, options = {} ) {
	return new Promise(( resolve, reject ) => {
		axios({
			method: "post",
			url: `${window.location.origin}/api/${url}`,
			params,
			data: body,
			crossOrigin: true,
		    withCredentials: false
		}).then(( response ) => {
			console.log(response);
			resolve(response.data);
		}).catch(( error ) => {
			reject(error);
		});
	});
}

export default {
	get,
	post
};
