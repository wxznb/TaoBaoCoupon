import React from "react";
import {
    render
} from "react-dom";
import {
    Provider
} from "react-redux";
import Route from "./route";
import store from "./store";

const rootElement = document.getElementById("root");

render(
    <Provider
        store = {
            store
        }>
        <Route />
    </Provider>,
    rootElement
);
