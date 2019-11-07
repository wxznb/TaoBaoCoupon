"use strict"
const merge = require("webpack-merge");
const config = require("../config");
const baseConfig = require("./webpack.base.conf");

module.exports = merge(baseConfig, {
    mode: "development",
    devServer: {
        host: config.dev.host,
        port: config.dev.port
    }
});
