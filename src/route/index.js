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
    PageSearch
} from "@/containers";
import "./index.css";

const Routes = () => <Router
    history = {
        createHashHistory()
    }>
        <Route 
            path = "/"
            component = { PageSearch }>
        </Route>
    </Router>;

export default Routes;
