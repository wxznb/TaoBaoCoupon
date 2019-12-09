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
			searchText: "",
			searchState: false
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

		if ( searchText.length > 0 ) {
			this.setState({
				searchState: true
			});
			dispatch(GetMaterial(searchText)).then( () => {
				this.setState({
					searchState: false
				});
				console.log("resolve");
			}, () => {
				this.setState({
					searchState: false
				});
				console.log("reject");
			});
		}
	}
	SearchItems ( results ) {
		let items = [];

		results.forEach( ( result, index ) => {
			items.push(<div
				className = "search-result"
				key = { `search-item-${index}` } >
				<SearchItem 
					item = { result }
					/>
			</div>);
		});

		return items;
	}
	render () {
		let {
			GetMaterial
		} = this.props;
		let {
			searchState
		} = this.state;

		return <div
		    className = "search-page">
		    <div
		        className = "search-input">
				<SearchInput
					onChange = { this.onChange }
					onSubmit = { this.onSearch }
					/>
				<div
				    className = "search-input-button"
				    onClick = { this.onSearch }>
				    搜索
				</div>
			</div>
			<div
			    className = "search-results">
			    { searchState ? <div className = "loading">Loading</div> : GetMaterial.length > 0 ? this.SearchItems(GetMaterial) : <div className = "error">没有结果，请稍候再试，谢谢</div> }
			</div>
		</div>;
	}
}

const mapStatesToProps = ( state ) => {
	const {
		GetMaterial
	} = state;

	return {
		GetMaterial
	};
};

export default connect(mapStatesToProps)(PageSearch);
