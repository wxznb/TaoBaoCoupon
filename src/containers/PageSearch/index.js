import React, {
	Component
} from "react";
import {
	SearchInput,
	SearchItem
} from "@/components";
import "./index.css";

class PageSearch extends Component {
	constructor ( props ) {
		super ( props );

		this.state = {};

		this.onInput = this.onInput.bind(this);
		this.onChange = this.onChange.bind(this);
	}
	onInput ( event ) {
		console.log("onInput: ", event);
	}
	onChange ( event ) {
		console.log("onChange: ", event);
	}
	SearchItems () {
		let items = [];

		for ( let i = 0; i < 4; i ++ ) {
			items.push(<SearchItem key = { `search-item-${i}` } />);
		}

		return items;
	}
	render () {
		return <div
		    className = "search-page">
		    <div
		        className = "search-input">
				<SearchInput
				    onChange = { this.onChange }
					/>
				<div
				    className = "search-input-button">
				    搜索
				</div>
			</div>
			<div
			    className = "search-result">
			    { this.SearchItems() }
			</div>
		</div>;
	}
}

export default PageSearch;
