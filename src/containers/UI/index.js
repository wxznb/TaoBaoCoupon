import React, {
    Component
} from "react";
import {
    Image,
    Input,
    Loading
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
            <Loading
                />
        </div>
    }
}

export default UI;
