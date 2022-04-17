import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home.js";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/Login/Login";
import { auth } from "./firebaseSetting";
import { useEffect, useContext } from "react";
import { Context } from "./Store/Store";

function App() {
	const { setLoginData } = useContext(Context);

	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				setLoginData(authUser);
			} else {
				console.log("logged out");
				setLoginData("Guest");
			}
		});
	}, []);

	return (
		<div className='App'>
			<Switch>
				<Route exact path='/'>
					<Header />
					<Home />
				</Route>
				<Route exact path='/checkout'>
					<Header />
					<Checkout />
				</Route>
				<Route exact path='/login'>
					<Login />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
