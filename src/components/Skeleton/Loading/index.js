import React, {
    Component
} from "react";
import "./index.css";

class SkeletonLoading extends Component {
    constructor ( props ) {
        super ( props );
    }
    render () {
        return <div
            className = "components-skeleton-loading">
        </div>
    }
}

export default SkeletonLoading;
