import {
    Route,
    Router
} from "react-router";
import {
    createHashHistory,
    createBrowserHistory
} from "history";
import React from "react";
import "./index.css";

const Routes = () => <Router
    history = {
        createHashHistory()
    }>
        <div>
        </div>
    </Router>;

export default Routes;
