import {
    Route,
    Router
} from "react-router";
import {
    createHashHistory,
    createBrowserHistory
} from "history";
import React from "react";
import {
    PageSearch,
    UI,
    Components
} from "@/containers";
import "./index.css";

const Routes = () => <Router
    history = {
        createHashHistory()
    }>
        <Route 
            path = "/"
            exact
            component = { PageSearch }
            />
        <Route
            path = "/UI"
            component = { UI }
            />
        <Route
            path = "/Components"
            component = { Components }
            />
    </Router>;

export default Routes;
