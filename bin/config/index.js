"use strict"
const path = require("path");

const resolve = ( PATH ) => {
    return path.resolve( __dirname, "../..", PATH );
};

module.exports = {
    dev: {
        assetsPublicPath: "/",
        host: "0.0.0.0",
        port: 2663,
        autoOpenBrowser: false,
        assetsRoot: resolve("public"),
        htmlPath: "public/index.html"
    },
    build: {
        index: resolve("dist/index.html"),
        assetsRoot: resolve("dist"),
        assetsPublicPath: "/",
        productionSourceMap: true,
        devtool: "#source-map"
    }
}
