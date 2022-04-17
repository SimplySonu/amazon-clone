import React, { createContext, useReducer, useState } from "react";

export const Context = createContext();

function reducer(state, action) {
	switch (action.type) {
		case "ADD_ITEM":
			return [...state, action.item];
		case "REMOVE_FROM_BASKET":
			//don't directly update the state, make a copy of it
			let newBasket = [...state];
			for (let i = 0; i < newBasket.length; i++) {
				if (newBasket[i].id === action.id) {
					newBasket.splice(i, 1);
					break;
				}
			}
			return newBasket;
		// this will remove all the duplicates too
		// return state.filter((obj) => obj.id != action.id);
		default:
			return state;
	}
}

export default function Provider(props) {
	const [data, dispatch] = useReducer(reducer, []);
	const [loginData, setLoginData] = useState("Guest");
	return (
		<Context.Provider
			value={{
				basket: data,
				setData: dispatch,
				loginData,
				setLoginData,
			}}>
			{props.children}
		</Context.Provider>
	);
}
