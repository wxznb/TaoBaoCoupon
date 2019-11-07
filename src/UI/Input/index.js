"use strict"
import React, {
	Component
} from "react";
import "./index.css";

class Input extends Component {
	constructor ( props ) {
		super(props);

		this.states = {
			type: props.type || "text",
			maxLength: props.maxLength || -1,
			placeholder: props.placeholder || ""
		};

		this.blur = this.blur.bind(this);
		this.focus = this.focus.bind(this);
		this.input = this.input.bind(this);
		this.change = this.change.bind(this);
		this.touchstart = this.touchstart.bind(this);
		this.touchmove = this.touchmove.bind(this);
		this.touchend = this.touchend.bind(this);
		this.touchcancel = this.touchcancel.bind(this);
	}
	render () {
		let {
			type,
			maxLength,
			placeholder
		} = this.states;

		return <form 
		    action = "javascript: return false;"
		    className = "ui-input-form">
		    <input
		        type = { type }
		        maxLength = { maxLength }
		        placeholder = { placeholder }
		        />
		</form>;
	}
}

export default Input;
