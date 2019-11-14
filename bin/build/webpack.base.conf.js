"use strict"
const path = require("path");
const config = require("../config");
const utils = require("./utils");
const webpack = require("webpack");

let join = function ( dir ) {
    return path.join( __dirname, "../..", dir );
};

let resolve = function ( dir ) {
    return path.resolve( __dirname, "../..", dir );
}

const mainPath = resolve("src");

module.exports = {
    entry: {
        app: resolve("src/index.js")
    },
    resolve: {
        alias: {
            "@": join("src")
        }
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: [
                        "@babel/preset-env",
                        "@babel/preset-react"
                    ]
                }
            },
            exclude: /node_modules/
        }, ...utils.styleLoaders({
            sourceMap: config.build.productionSourceMap,
            include: [
                resolve("src")
            ]
        })]
    }
};
