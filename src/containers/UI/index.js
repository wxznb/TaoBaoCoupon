import React, {
    Component
} from "react";
import {
    Image,
    Input
} from "@/UI";
import "./index.css";

class UI extends Component {
    constructor ( props ) {
        super(props);
    }
    render () {
        return <div
            className = "page-UI">
            <Image
                />
            <Input
                />
        </div>
    }
}

export default UI;
