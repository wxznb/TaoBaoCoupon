"use strict"
const path = require("path");
const config = require("../config");

var webpack = require("webpack");

const __ENV = process.env.NODE_ENV;
var isProduction = __ENV === "production";
var publicPath = isProduction ?
                    config.pro.publicPath :
                    config.dev.publicPath;

const mainPath = path.resolve(__dirname, "../../src");

let resolve = function (dir) {
    return path.join(__dirname, "../..", dir);
};

module.exports = {
    // content: path.resolve(__dirname, ""),
    entry: {
        app: path.resolve(__dirname, "../../src/index.js")
    },
    output: {
        path: path.resolve(__dirname, "../../dist"),
        filename: "[name].js",
        publicPath
    },
    resolve: {
        alias: {
            "@": resolve("src")
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
        }, {
            test: /\.css$/,
            use: [
                "style-loader",
                "css-loader"
            ],
            include: [
                mainPath
            ]
        }]
    }
};
