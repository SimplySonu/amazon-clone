import React, { useContext } from "react";

import "./Product.css";

import { Context } from "../../Store/Store";

export default function Product({ id, title, image, price, rating }) {
	const { setData } = useContext(Context);

	let arr = [];
	for (let i = 0; i < rating; i++) {
		arr.push(<p key={i}>🌟</p>);
	}

	function addToCart() {
		setData({
			type: "ADD_ITEM",
			item: {
				id,
				title,
				price,
				rating,
				image,
			},
		});
	}

	return (
		<div className='product'>
			<div className='product__info'>
				<p>{title}</p>
				<p className='product__price'>
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className='product__rating'>
					{/* {Array(rating)
						.fill()
						.map((_, i) => (
							<p>🌟</p>
						))} */}
					{arr}
				</div>
			</div>

			<img src={image} alt='' />

			<button onClick={addToCart}>Add to Basket</button>
		</div>
	);
}
