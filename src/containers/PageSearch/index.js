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
			searchResults: [{
				pict_url: "https://img.alicdn.com/bao/uploaded/i4/745957850/TB1WzSRmV9gSKJjSspbXXbeNXXa_!!0-item_pic.jpg",
				title: "毛呢阔腿裤港味复古女裤子秋冬九分裤萝卜裤显瘦高腰韩版2017新款",
				small_images: [
				    "	https://img.alicdn.com/i4/3077291146/TB2NA3poDnI8KJjSszgXXc8ApXa_!!3077291146.jpg"
				],
				coupon_start_time: "2017-10-29",
				coupon_end_time: "2017-10-29",
				reserve_price: "102.00",
				zk_final_price: "88.00",
				provcity: "杭州",
				user_type: 1,
				item_url: "https://item.taobao.com/item.htm?id=564591813536",
				coupon_info: "满299元减20元",
				shop_title: "xx旗舰店",
				coupon_share_url: "uland.xxx",
				item_description: "季凉被 全棉亲肤",
				real_post_fee: "0.00",
				tmall_play_activity_info: "前n件x折"
			}, {
				pict_url: "https://img.alicdn.com/bao/uploaded/i4/745957850/TB1WzSRmV9gSKJjSspbXXbeNXXa_!!0-item_pic.jpg",
				title: "毛呢阔腿裤港味复古女裤子秋冬九分裤萝卜裤显瘦高腰韩版2017新款",
				small_images: [
				    "	https://img.alicdn.com/i4/3077291146/TB2NA3poDnI8KJjSszgXXc8ApXa_!!3077291146.jpg"
				],
				coupon_start_time: "2017-10-29",
				coupon_end_time: "2017-10-29",
				reserve_price: "102.00",
				zk_final_price: "88.00",
				provcity: "杭州",
				user_type: 1,
				item_url: "https://item.taobao.com/item.htm?id=564591813536",
				coupon_info: "满299元减20元",
				shop_title: "xx旗舰店",
				coupon_share_url: "uland.xxx",
				item_description: "季凉被 全棉亲肤",
				real_post_fee: "0.00",
				tmall_play_activity_info: "前n件x折"
			}, {
				pict_url: "https://img.alicdn.com/bao/uploaded/i4/745957850/TB1WzSRmV9gSKJjSspbXXbeNXXa_!!0-item_pic.jpg",
				title: "毛呢阔腿裤港味复古女裤子秋冬九分裤萝卜裤显瘦高腰韩版2017新款",
				small_images: [
				    "	https://img.alicdn.com/i4/3077291146/TB2NA3poDnI8KJjSszgXXc8ApXa_!!3077291146.jpg"
				],
				coupon_start_time: "2017-10-29",
				coupon_end_time: "2017-10-29",
				reserve_price: "102.00",
				zk_final_price: "88.00",
				provcity: "杭州",
				user_type: 1,
				item_url: "https://item.taobao.com/item.htm?id=564591813536",
				coupon_info: "满299元减20元",
				shop_title: "xx旗舰店",
				coupon_share_url: "uland.xxx",
				item_description: "季凉被 全棉亲肤",
				real_post_fee: "0.00",
				tmall_play_activity_info: "前n件x折"
			}, {
				pict_url: "https://img.alicdn.com/bao/uploaded/i4/745957850/TB1WzSRmV9gSKJjSspbXXbeNXXa_!!0-item_pic.jpg",
				title: "毛呢阔腿裤港味复古女裤子秋冬九分裤萝卜裤显瘦高腰韩版2017新款",
				small_images: [
				    "	https://img.alicdn.com/i4/3077291146/TB2NA3poDnI8KJjSszgXXc8ApXa_!!3077291146.jpg"
				],
				coupon_start_time: "2017-10-29",
				coupon_end_time: "2017-10-29",
				reserve_price: "102.00",
				zk_final_price: "88.00",
				provcity: "杭州",
				user_type: 1,
				item_url: "https://item.taobao.com/item.htm?id=564591813536",
				coupon_info: "满299元减20元",
				shop_title: "xx旗舰店",
				coupon_share_url: "uland.xxx",
				item_description: "季凉被 全棉亲肤",
				real_post_fee: "0.00",
				tmall_play_activity_info: "前n件x折"
			}]
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
			searchResults
		} = this.state;

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
			    className = "search-results">
			    { this.SearchItems(searchResults) }
			</div>
		</div>;
	}
}

const mapStatesToProps = ( state ) => {
	const {} = state;

	return {};
};

export default connect(mapStatesToProps)(PageSearch);
