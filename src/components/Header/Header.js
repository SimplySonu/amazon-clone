import React, { useContext } from "react";
import "./Header.css";
import { Context } from "../../Store/Store";

// install @mui/material @emotion/react @emotion/styled and @mui/icons-material
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { auth } from "../../firebaseSetting";

function Header() {
	const { basket, loginData, setLoginData } = useContext(Context);

	function signOut() {
		if (loginData !== "Guest") {
			auth.signOut();
		}
	}
	return (
		<div className='header'>
			<Link to='/'>
				<img
					className='header__logo'
					src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
				/>
			</Link>

			<div className='header__search'>
				<input className='header__searchInput' type='text' />
				<SearchIcon className='header__searchIcon' />
			</div>

			<div className='header__nav'>
				<Link
					to={loginData === "Guest" ? "/login" : ""}
					className='header__nav_signIn'>
					<div className='header__option' onClick={signOut}>
						<span className='header__optionLineOne'>
							Hello {loginData === "Guest" ? loginData : loginData.email}
						</span>

						<span className='header__optionLineTwo'>
							{loginData === "Guest" ? "Sign In" : "Sign Out"}
						</span>
					</div>
				</Link>

				<div className='header__option'>
					<span className='header__optionLineOne'>Returns</span>
					<span className='header__optionLineTwo'>& Orders</span>
				</div>

				<div className='header__option'>
					<span className='header__optionLineOne'>Your</span>
					<span className='header__optionLineTwo'>Prime</span>
				</div>

				<Link to='/checkout'>
					<div className='header__optionBasket'>
						<ShoppingBasketIcon />
						<span className='header__optionLineTwo header__basketCount'>
							{basket?.length}
						</span>
					</div>
				</Link>
			</div>
		</div>
	);
}

export default Header;
