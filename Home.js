import React from 'react';
import './Home.css';
import Product from './Product';
function Home() {
	return (
		<div className="home">
			<img
				className="home__image"
				src="https://images.ctfassets.net/ktgg7d3rvrch/6gIe0CpB3OkjrOEJhZAtAY/67f4275634d48b6316cd043948a6fd6f/shops_amazon-japan_.png?q=80&fm=webp&w=1920"
				alt=""
			/>

			{/* Product id, title, price, rating, image*/}
			{/* Product*/}
			<div className="home__row">
				<Product
					id="125484"
					title="Echo Dot (3rd Gen) - Smart speaker with Alexa - Charcoal
                    Style:Echo Dot
                    Color:Charcoal
                    Configuration:Device only"
					price={49.99}
					rating={4}
					image="https://www.amazon.com/images/I/6182S7MYC2L._AC_SL1000_.jpg"
				/>

				<Product
					id="125220"
					title="AmazonBasics Car DC Charger for Nintendo Switch - 6 Foot Cable, Black"
					price={22.63}
					rating={3}
					image="https://www.amazon.com/images/I/615NrJ3dluL._SL1360_.jpg"
				/>
			</div>

			<div className="home__row">
				<Product
					id="5484220"
					title="Apple iPhone 11 Pro Max (64GB, Midnight Green)"
					price={2200}
					rating={4}
					image="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-11-pro-select-2019-family?wid=882&amp;hei=1058&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1586586488946"
				/>

				<Product
					id="12220"
					title="AmazonBasics Laptop Computer Backpack - Fits Up To 17 Inch Laptops"
					price={34.85}
					rating={4}
					image="https://www.amazon.com/images/I/81vfzNUAXEL._AC_SY879_.jpg"
				/>

				<Product
					id="1255500"
					title="GTRACING Gaming Chair with Bluetooth Speakers and Footrest Music Video Game Chair Audio Heavy Duty Computer Desk Chair GT909M Blue"
					price={193.59}
					rating={5}
					image="https://www.amazon.com/images/I/71DE85tspzL._AC_SL1500_.jpg"
				/>
			</div>

			<div className="home__row">
				<Product
					id="125484220"
					title="Sony X950H 49 Inch TV: 4K Ultra HD Smart LED TV with HDR and Alexa Compatibility - 2020 Model"
					price={999.99}
					rating={5}
					image="https://www.amazon.com/images/I/612KFH-Zo4L._AC_SL1001_.jpg"
				/>
			</div>
		</div>
	);
}

export default Home;
