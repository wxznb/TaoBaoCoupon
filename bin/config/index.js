"use strict"

const path = require("path");

module.exports = {
    dev: {
        publicPath: "/",
        host: "0.0.0.0",
        port: 2663,
        autoOpenBrowser: false
    },
    build: {
        publicPath: "/",
        index: ""
    }
}
