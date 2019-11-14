"use strict";
exports.cssLoaders = function ( options ) {
	options = options || {};

	const cssLoader = {
		loader: "css-loader",
		options: {
			sourceMap: options.sourceMap
		}
	}

	const styleLoader = {
		loader: "style-loader"
	}

	function generateLoaders ( loader, loaderOptions ) {
		let loaders = [ styleLoader, cssLoader ];

		if ( !!loader ) {
			loaders.push({
				loader: `${loader}-loader`,
				options: Object.assign({}, loaderOptions, {
					sourceMap: !!options.sourceMap
				})
			});
		}

		return loaders;
	}

	return {
		css: generateLoaders()
	}
};

exports.styleLoaders = function ( options ) {
	const output = [];
	const loaders = exports.cssLoaders(options);

	for ( const extension in loaders ) {
		const loader = loaders[extension];

		output.push({
			test: new RegExp(`\\.${extension}$`),
			use: loader
		});
	}

	return output;
};
