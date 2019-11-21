/**
 *  二次封装axios
 */
import axios from "axios";
import sign from "@/api/sign";
import configInfo from "@/static/configurationInfo";

const app_secret = configInfo["app_secret"];

delete configInfo["app_secret"];

/**
 * @param { string } url
 * @param { {} } params
 * @param { {} } options
 */
function get ( url, params, options = {} ) {
	return new Promise(( resolve, reject ) => {
		params = Object.assign(params, {
			timestamp: new Date().toJSON().replace("T", " ").split(".")[0],
			...configInfo
		});

		let signString = sign({
			...params
		}, app_secret);

		params = Object.assign(params, {
			sign: signString
		});

		axios({
			method: "get",
			url,
			params,
			crossOrigin: true,
		    withCredentials: false
		}).then((responce) => {
			resolve(responce);
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
		params = Object.assign(params, {
			timestamp: new Date().toJSON().replace("T", " ").split(".")[0],
			...configInfo
		});

		let signString = sign({
			...params
		}, app_secret);

		params = Object.assign(params, {
			sign: signString
		});

		axios({
			method: "post",
			url,
			params,
			data: body,
			crossOrigin: true,
		    withCredentials: false
		}).then(( responce ) => {
			resolve(responce);
		}).catch(( error ) => {
			reject(error);
		});
	});
}

export default {
	get,
	post
};
