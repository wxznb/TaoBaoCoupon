/**
 * 签名鉴权
 * 1. 将所有参数进行排序
 * 2. 把所有参数名和参数值串在一起
 * 3. 使用MD5或者是HMAC加密
 * 4. 把二进制转化为大写的十六进制(正确签名应该为32大写字符串，此方法需要时使用)
 */
import md5 from "@/static/md5.min.js";

const sign = ( options = {}, secret = "" ) => {
	// 1. 将所有参数进行排序
	let optionsName = [];

	for ( let name in options ) {
		optionsName.push(name);
	}

	optionsName.sort();

	// 2. 把所有参数名和参数值串在一起
	let optionString = "";

	optionsName.forEach(function ( name ) {
		optionString = `${optionString}${name}${options[name]}`;
	});

	// 3. 使用MD5或者是HMAC加密

	let optionStringMd5 = md5(`${secret}${optionString}${secret}`);

	optionStringMd5 = optionStringMd5.toString(16).toUpperCase();

	// console.log("optionStringMd5: ", optionStringMd5);

	return optionStringMd5;
}

export default sign;
