import React, { useContext, useState } from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { Context } from "../../Store/Store";

function Subtotal() {
	const { basket } = useContext(Context);

	function getTotal() {
		let totalSum = 0;
		for (let i = 0; i < basket.length; i++) {
			totalSum += basket[i].price;
		}
		return totalSum;
	}

	return (
		<div className='subtotal'>
			<CurrencyFormat
				renderText={(value) => (
					<>
						<p>
							Subtotal ({basket.length} items): <strong>{value}</strong>
						</p>
						<small className='subtotal__gift'>
							<input type='checkbox' /> This order contains a gift
						</small>
					</>
				)}
				decimalScale={2}
				value={getTotal()}
				displayType={"text"}
				thousandSeparator={true}
				prefix={"$"}
			/>

			<button>Proceed to Checkout</button>
		</div>
	);
}

export default Subtotal;
