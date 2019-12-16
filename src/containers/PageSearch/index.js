import React, {
	Component
} from "react";
import {
	SearchInput,
	SearchItem,
	Pagination
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
			searchState: false,
			defaultState: true,
			pageLength: 20
		};

		this.onInput = this.onInput.bind(this);
		this.onChange = this.onChange.bind(this);
		this.onSearch = this.onSearch.bind(this);
		this.searchContent = this.searchContent.bind(this);
		this.onPaginationChange = this.onPaginationChange.bind(this);
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
	onSearch (page = 1) {
		const {
			dispatch
		} = this.props;
		let {
			searchText,
			searchState
		} = this.state;

		if ( !searchState && searchText.length > 0 ) {
			this.setState({
				searchState: true,
				defaultState: false
			});
			dispatch(GetMaterial({
				searchText,
				page
			})).then( () => {
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
	SearchItems ( results, totalResults ) {
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

		return <div
		    className = "page-search-items-and-pagination">
			<div
			    className = "page-search-items">
			    {items}
			</div>
			<div
			    className = "page-search-pagination">
				<Pagination
					onChange = { this.onPaginationChange }
					maxPage = { Math.ceil(totalResults / 20) }
					/>
			</div>
		</div>;
	}
	onPaginationChange ( page ) {
		this.onSearch(page);
	}
	searchContent () {
		let {
			GetMaterial,
			GetTotalResults
		} = this.props;
		let {
			searchState,
			defaultState
		} = this.state;
		let searchContent = "";

		if ( !defaultState || GetMaterial.length > 0 ) {
			if ( searchState ) {
				searchContent = <div className = "loading">Loading</div>;
			} else {
				if ( GetMaterial.length > 0 ) {
					searchContent = this.SearchItems(GetMaterial, GetTotalResults);
				} else {
					searchContent = <div className = "error">没有结果，请稍候再试，谢谢</div>;
				}
			}
		}

		return searchContent;
	}
	render () {
		return <div
		    className = "search-page">
		    <div
		        className = "search-input">
				<SearchInput
					onChange = { this.onChange }
					onSubmit = { this.onSearch }
					placeholder = "搜索 物品名称"
					/>
				<div
				    className = "search-input-button"
				    onClick = { this.onSearch }>
				    搜索
				</div>
			</div>
			<div
			    className = "search-results">
			    { this.searchContent() }
			</div>
		</div>;
	}
}

const mapStatesToProps = ( state ) => {
	const {
		GetMaterial,
		GetTotalResults
	} = state;

	return {
		GetMaterial,
		GetTotalResults
	};
};

export default connect(mapStatesToProps)(PageSearch);
