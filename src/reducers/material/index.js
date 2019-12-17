import {
	GET_MATERIAL,
	GET_TOTAL_RESULTS
} from "@/actions/types";

const initMaterialState = {
	material: [
		// {
		// 	pict_url: "https://img.alicdn.com/bao/uploaded/i4/745957850/TB1WzSRmV9gSKJjSspbXXbeNXXa_!!0-item_pic.jpg",
		// 	title: "毛呢阔腿裤港味复古女裤子秋冬九分裤萝卜裤显瘦高腰韩版2017新款",
		// 	small_images: {
		// 		string: [
		// 			"https://img.alicdn.com/i4/3077291146/TB2NA3poDnI8KJjSszgXXc8ApXa_!!3077291146.jpg",
		// 			"https://img.alicdn.com/i4/3077291146/TB2NA3poDnI8KJjSszgXXc8ApXa_!!3077291146.jpg",
		// 			"https://img.alicdn.com/i4/3077291146/TB2NA3poDnI8KJjSszgXXc8ApXa_!!3077291146.jpg"
		// 		]
		// 	},
		// 	coupon_start_time: "2017-10-29",
		// 	coupon_end_time: "2017-10-29",
		// 	reserve_price: "102.00",
		// 	zk_final_price: "88.00",
		// 	provcity: "杭州",
		// 	user_type: 1,
		// 	item_url: "https://item.taobao.com/item.htm?id=564591813536",
		// 	coupon_info: "满299元减20元",
		// 	shop_title: "xx旗舰店",
		// 	coupon_share_url: "uland.xxx",
		// 	item_description: "季凉被 全棉亲肤",
		// 	real_post_fee: "0.00",
		// 	tmall_play_activity_info: "前n件x折",
		// 	coupon_start_fee: "29",
		// 	coupon_amount: "10"
		// }
	],
	total_results: 1000
};

const GetMaterial = ( state = initMaterialState.material, action ) => {
	switch( action.type ) {
		case GET_MATERIAL:
		    return action.data.slice(0);
		default: 
		    return state;
	}
};

const GetTotalResults = ( state = initMaterialState.total_results, action ) => {
	switch( action.type ) {
		case GET_TOTAL_RESULTS:
		    return action.data;
		default: 
		    return state;
	}
}

export {
	GetMaterial,
	GetTotalResults
};
