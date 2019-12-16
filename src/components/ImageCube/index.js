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
            loading: true,
            src: props.src,
            dataUrl: ""
        };

        this.onLoad = this.onLoad.bind(this);
        this.onError = this.onError.bind(this);
        this.imagecubeClass = this.imagecubeClass.bind(this);
    }
    onLoad () {
        this.setState({
            loading: false
        });
    }
    onError () {
        this.setState({
            loading: false,
            src: ""
        });
    }
    imagecubeClass () {
        let {
            className
        } = this.props;
        let {
            loading
        } = this.state;
        let imagecubeClass = "components-imagecube";

        if ( !!className ) {
            imagecubeClass = `${imagecubeClass} ${className}`;
        }
        if ( loading ) {
            imagecubeClass = `${imagecubeClass} components-imagecube-loading`;
        }

        return imagecubeClass;
    }
    render () {
        let {
            src
        } = this.state;

        return <div
            className = { this.imagecubeClass() }>
            <Image
                src = { src }
                className = "components-imagecube-main"
                onLoad = { this.onLoad }
                onError = { this.onError }
                />
        </div>;
    }
}

export default ImageCube;
