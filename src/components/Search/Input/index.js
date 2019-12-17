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
		this.onSubmit = this.onSubmit.bind(this);
	}
	onInput ( event ) {
		if ( !!this.props.onInput ) {
			this.props.onInput( event );
		}
	}
	onChange ( event ) {
		if ( !!this.props.onChange ) {
			this.props.onChange( event );
		}
	}
	onSubmit () {
		if ( !!this.props.onSubmit ) {
			this.props.onSubmit();
		}
	}
	render () {
		return <Input
		    type = "search"
		    placeholder = { this.props.placeholder || "搜索" }
		    onInput = { this.onInput }
			onChange = { this.onChange }
			onSubmit = { this.onSubmit }
		    />
	}
}

export default SearchInput;
