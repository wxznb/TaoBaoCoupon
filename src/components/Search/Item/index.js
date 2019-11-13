import React, {
	Component
} from "react";
import {
	Image
} from "@/UI";
import "./index.css";

class SearchItem extends Component {
	constructor ( props ) {
		super ( props );

		this.state = {
			item: props.item
		};
	}
	smallImages ( images ) {
		let SmallImages = [];

		images.forEach( ( image ) => {
			SmallImages.push(<div
				    className = "search-item-small-image"
				    key = { image }>
				    <Image 
				        src = { image }
				        />
				</div>);
		});

		return SmallImages;
	}
	render () {
		let {
			item
		} = this.state;

		let {
			pict_url,
			title,
			small_images,
			coupon_start_time,
			coupon_end_time,
			reserve_price,
			zk_final_price,
			provcity,
			user_type,
			item_url,
			coupon_info,
			shop_title,
			coupon_share_url,
			item_description,
			real_post_fee,
			tmall_play_activity_info
		} = item;

		return <div
		    className = "search-item">
		    <div
		        className = "search-item-images">
		        <div
		            className = "search-item-pict-url">
			        <Image
			            src = { pict_url }
			            />
	            </div>
		        <div
		            className = "search-item-small-images">
		            { this.smallImages(small_images) }
		        </div>
		    </div>
		    <div
		        className = "search-item-coupon-info">
		        <div
		            className = "search-item-title">
		            <a 
		                href = { item_url }
		                target = "_blank">
		                { title }
		            </a>
	            </div>
		        <div>{ item_description }</div>
		        <div
		            className = "search-item-coupon-info-and-time">
			        <div>{ coupon_info } - { tmall_play_activity_info }</div>
		            <div>{ coupon_start_time } ~ { coupon_end_time }</div>
		        </div>
		        <div
		            className = "search-item-price">
			        ¥
			        <div
			            className = "search-item-reserve-price"> 
			            { reserve_price } 
			        </div>
			        <div
			            className = "search-item-zk-final-price"> 
			            { zk_final_price } 
			        </div>
		        </div>
		        <div>
		            { coupon_share_url }
		        </div>
		        <div>邮费：{ real_post_fee }</div>
		        <div
		            className = "search-item-provcity-and-shop-title">
			        <div
			            className = "search-item-provcity">
			            { provcity }
			        </div>
			        <div
			            className = "search-item-shop-title">
			            { user_type === 1 ? "tmall" : "market" } - { shop_title }
			        </div>
		        </div>
		    </div>
		</div>
	}
}

export default SearchItem;
