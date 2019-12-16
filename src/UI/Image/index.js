import React, {
	Component
} from "react";
import "./index.css";

class Image extends Component {
	constructor ( props ) {
		super ( props );

		this.state = {
			src: props.src
		};

		this.onLoad = this.onLoad.bind(this);
		this.onError = this.onError.bind(this);
	}
	onLoad ( event ) {
		console.log("loaded");
		if ( !!this.props.onLoad ) {
			this.props.onLoad();
		} else {}
	}
	onError ( event ) {
		console.log("error");
		if ( !!this.props.onError ) {
			this.props.onError();
		} else {}
	}
	render () {
		let {
			src
		} = this.state;

		return <img
		    onLoad = { this.onLoad }
		    onError = { this.onError }
		    src = { src }
		    className = { `UI-image ${!!this.props.className ? this.props.className : ""}` }
			/>;
	}
}

export default Image;
