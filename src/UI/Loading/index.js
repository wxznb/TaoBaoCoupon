import React, {
    Component
} from "react";
import "./index.css";

class Loading extends Component {
    constructor ( props ) {
        super(props);
    }
    render () {
        return <div
            className = "ui-loading">
            <div
                className = "ui-loading-content"></div>
            <div
                className = "ui-loading-content"></div>
            <div
                className = "ui-loading-content"></div>
            <div
                className = "ui-loading-content"></div>
            <div
                className = "ui-loading-content"></div>
        </div>;
    }
}

export default Loading;
