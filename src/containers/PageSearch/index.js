import React, {
	Component
} from "react";
import {
	SearchInput,
	SearchItem
} from "@/components";
import {
	connect
} from "react-redux";
import {
	GetMaterial
} from "@/actions";
import "./index.css";

class PageSearch extends Component {
	constructor ( props ) {
		super ( props );

		this.state = {
			searchText: ""
		};

		this.onInput = this.onInput.bind(this);
		this.onChange = this.onChange.bind(this);
		this.onSearch = this.onSearch.bind(this);
	}
	onInput ( event ) {
		// console.log("onInput: ", event);
	}
	onChange ( event ) {
		// console.log("onChange: ", event);
		this.setState({
			searchText: event.target.value
		});
	}
	onSearch () {
		const {
			dispatch
		} = this.props;
		let {
			searchText
		} = this.state;

		dispatch(GetMaterial(searchText));
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
				    className = "search-input-button"
				    onClick = { this.onSearch }>
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

const mapStatesToProps = ( state ) => {
	const {} = state;

	return {};
};

export default connect(mapStatesToProps)(PageSearch);
