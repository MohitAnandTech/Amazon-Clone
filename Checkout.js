import React from 'react';
import { useStateValue } from './StateProvidor';
import './Checkout.css';
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
	const [ { basket } ] = useStateValue();
	return (
		<div className="checkout">
		<div className="checkout__left">
			<img
				className="checkout__ad"
				src="https://www.amazon.in/images/G/31/img20/Watches/July/EOSS/Banners/MW-Eng-PC._CB428688022_.jpg"
				alt=""
			/>
			{basket?.length === 0 ?(
				<div>
				<h2>Your Shopping Basket is empty</h2>
				<p>You have no items in the basket. To buy one or more, 
				click on "Add to basket" next to the item.
				</p>
				</div>
			) : (
			<div>
			<h2 className="checkout__title">Your Shopping Basket.</h2>
			{/*List out all of the checkout products*/}
			{basket?.map((item) => (
				<CheckoutProduct
				id= {item.id}
				title={item.title}
				image ={item.image}
				price= {item.price}
				rating= {item.rating}
				/>
			))}
			</div>	
			)}
			</div>
			{basket.length>0 && (
			<div className="checkout__right">
			<h1>Subtotal</h1>
			<Subtotal /> 
			</div>
			)}
		</div>
	);
}

export default Checkout;
