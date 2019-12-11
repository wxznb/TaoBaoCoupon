import React, {
    Component
} from "react";
import {
    Pagination,
    ImageCube
} from "@/components";
import "./index.css";

class Components extends Component {
    constructor ( props ) {
        super(props);
    }
    render () {
        return <div
            className = "page-Components">
            <Pagination
                />
            <ImageCube
                />
        </div>
    }
}

export default Components;
