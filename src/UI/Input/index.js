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
		this.click = this.click.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		// this.touchstart = this.touchstart.bind(this);
		// this.touchmove = this.touchmove.bind(this);
		// this.touchend = this.touchend.bind(this);
		// this.touchcancel = this.touchcancel.bind(this);
	}
	blur ( event ) {
		if ( !!this.props.onBlur ) {
			this.props.onBlur( event );
		}
	}
	focus ( event ) {
		if ( !!this.props.onFocus ) {
			this.props.onFocus( event );
		}
	}
	input ( event ) {
		if ( !!this.props.onInput ) {
			this.props.onInput( event );
		}
	}
	change ( event ) {
		if ( !!this.props.onChange ) {
			this.props.onChange( event );
		}
	}
	click ( event ) {
		if ( !!this.props.onClick ) {
			this.props.onClick( event );
		}
	}
	handleSubmit ( event ) {
		event.preventDefault();
		if ( !!this.props.onSubmit ) {
			console.log("submit");
			this.props.onSubmit();
		}
	}
	// touchstart () {}
	// touchmove () {}
	// touchend () {}
	// touchcancel () {}
	render () {
		let {
			type,
			maxLength,
			placeholder
		} = this.states;

		return <form 
		    onSubmit = { this.handleSubmit }
		    className = { `UI-input-form ${this.props.className}` }>
		    <input
		        type = { type }
		        maxLength = { maxLength }
		        placeholder = { placeholder }
		        onBlur = { this.blur }
		        onFocus = { this.focus }
		        onInput = { this.input }
		        onClick = { this.click }
		        onChange = { this.change }
		        />
		</form>;
	}
}

export default Input;
