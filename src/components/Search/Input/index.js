"use strict";
import React, {
	Component
} from "react";
import {
    Input
} from "@/UI";
import "./index.css";

class SearchInput extends Component {
	constructor ( props ) {
		super ( props );
		this.state = {};
		this.onInput = this.onInput.bind(this);
		this.onChange = this.onChange.bind(this);
	}
	onInput ( event ) {
		console.log("event: ", event);
		this.props.onInput( event );
	}
	onChange ( event ) {
		this.props.onChange( event );
	}
	render () {
		return <Input
		    type = "search"
		    placeholder = "搜索"
		    onInput = { this.onInput }
		    onChange = { this.onChange }
		    />
	}
}

export default SearchInput;
