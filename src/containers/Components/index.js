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

        this.paginationOnChange = this.paginationOnChange.bind(this);
    }
    paginationOnChange ( i ) {
        console.log("paginationOnChange: ", i);
    }
    render () {
        return <div
            className = "page-Components">
            <ImageCube
                src = "https://images3.alphacoders.com/825/825213.png"
                />
            <Pagination
                onChange = { this.paginationOnChange }
                maxPage = { 50 }
                />
        </div>
    }
}

export default Components;
