import React, {
    Component
} from "react";
import "./index.css";
import SkeletonLoading from "../Loading";

class SkeletonSearchItem extends Component {
    constructor ( props ) {
        super(props);
    }
    render () {
        return <div
            className = "skeleton-search-item">
            <div>
                <SkeletonLoading
                    />
            </div>
            <div
                className = "skeleton-search-item-small-images">
                <div
                    className = "skeleton-search-item-small-image">
                    <SkeletonLoading
                        />
                </div>
                <div
                    className = "skeleton-search-item-small-image">
                    <SkeletonLoading
                        />
                </div>
                <div
                    className = "skeleton-search-item-small-image">
                    <SkeletonLoading
                        />
                </div>
                <div
                    className = "skeleton-search-item-small-image">
                    <SkeletonLoading
                        />
                </div>
            </div>
            <div>
                <div
                    className = "skeleton-search-item-text1">
                    <SkeletonLoading
                        />
                </div>
                <div
                    className = "skeleton-search-item-text2">
                    <SkeletonLoading
                        />
                </div>
                <div
                    className = "skeleton-search-item-text3">
                    <SkeletonLoading
                        />
                </div>
                <div
                    className = "skeleton-search-item-text4">
                    <SkeletonLoading
                        />
                </div>
            </div>
        </div>;
    }
}

export default SkeletonSearchItem;
