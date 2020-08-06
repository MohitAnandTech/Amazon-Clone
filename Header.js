import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvidor';
import { auth } from './firebase';
function Header() {
	const [ { basket, user} ] = useStateValue();

	const login = () => {
		if (user) {
			auth.signOut();
		}
	}
	return (
		<nav className="header">
			{/*logo on the left -> img*/}
			<Link to="/">
				<img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
			</Link>
			{/*Creating "div" to as we need to keep search bar and icon together and makes easy editing*/}
			<div className="header__search">
				{/*Creating Search box*/}
				<input type="text" className="header__searchInput" />
				{/*used material UI for search icon.*/}
				<SearchIcon className="header__searchIcon" />
			</div>
			{/* 3 links */}
			<div className="header__Nav">
				{/* 1st link */}
				<Link to= {!user && "/login"} className="header__Link">
					<div onClick={login} className="header__Option">
						<span className="header__optionLineOne"> Hello {user?.email}</span>
						<span className="header__optionLineTwo">{user ? 'Sign out' : 'Sign in' }</span>
					</div>
				</Link>
				{/* 2nd link */}
				<Link to="/" className="header__Link">
					<div className="header__Option">
						<span className="header__optionLineOne">Returns</span>
						<span className="header__optionLineTwo">& Orders</span>
					</div>
				</Link>
				{/* 3rd link */}
				<Link to="/" className="header__Link">
					<div className="header__Option">
						<span className="header__optionLineOne">Your</span>
						<span className="header__optionLineTwo">Prime</span>
					</div>
				</Link>
				{/* 4th link */}
				<Link to="/checkout" className="header__Link">
					<div className="header__optionBasket">
						{/* Shopping basket icon */}
						<ShoppingBasketIcon />
						{/* Number of items in the basket */}
						<span className="header__optionLineTwo header__basketCount">{basket.length}</span>
					</div>
				</Link>
			</div>
		</nav>
	);
}

export default Header;
