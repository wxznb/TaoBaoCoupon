import React, {
    Component
} from "react";
import {
    Image
} from "@/UI";
import "./index.css";

class ImageCube extends Component {
    constructor ( props ) {
        super(props);
        this.state = {
            src: "https://www.baidu.com/img/bd_logo1.png?where=super"
        }
    }
    render () {
        let {
            src
        } = this.state;
        return <div
            className = { `components-imagecube ${this.props.className}` }>
            <Image
                src = { src }
                className = "components-imagecube-main"
                />
        </div>;
    }
}

export default ImageCube;
