import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./Component/Login";
import Welcome from "./Component/Welcome";
import Access from "./Component/Bikes/Access";
import Pleasure from "./Component/Bikes/Pleasure";
import Activa from "./Component/Bikes/Activa";
import Classic from "./Component/Bikes/Classic";
import NS from "./Component/Bikes/NS";
import Passionpro from "./Component/Bikes/Passionpro";
import Platina from "./Component/Bikes/Platina";
import Vespa from "./Component/Bikes/Vespa";
import Ola from "./Component/Bikes/Ola";


import Cart from "./Component/Cart";
import Order from "./Component/Order";
import Duration from "./Component/Duration";
import "./App.css";

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [name, setName] = useState("");
	const navigate = useNavigate();

	const handleLogin = () => {
		if (!name.trim()) return;
		setIsLoggedIn(true);
		navigate("/welcome");
	};

	const handleLogout = () => {
		setIsLoggedIn(false);
		setName("");
		navigate("/");
	};

	return (	
		<div className="App">
			{!isLoggedIn ? (
				<Login name={name} setName={setName} handleLogin={handleLogin} />
			) : (
				<Routes>
					<Route
						path="/welcome"
						element={<Welcome name={name} onLogout={handleLogout} />}
					/>
					<Route
						path="/access"
						element={<Access name={name} onLogout={handleLogout} />}
					/>
					<Route
						path="/pleasure"
						element={<Pleasure name={name} onLogout={handleLogout} />}
					/>
					<Route
						path="/activa"
						element={<Activa name={name} onLogout={handleLogout} />}
					/>
					<Route
						path="/classic"
						element={<Classic name={name} onLogout={handleLogout} />}
					/>
					<Route
						path="/ns"
						element={<NS name={name} onLogout={handleLogout} />}
					/>
					<Route
						path="/ola"
						element={<Ola name={name} onLogout={handleLogout} />}
					/>
					<Route
						path="/passionpro"
						element={<Passionpro name={name} onLogout={handleLogout} />}
					/>
					<Route
						path="/platina"
						element={<Platina name={name} onLogout={handleLogout} />}
					/>
					<Route
						path="/vespa"
						element={<Vespa name={name} onLogout={handleLogout} />}
					/>

					{/* Bike Details Page */}
					<Route
						path="/bike/:bike"
						element={<Welcome name={name} onLogout={handleLogout} />}
					/>

					{/* Duration Page */}
					<Route
						path="/duration/:bike"
						element={<Duration name={name} onLogout={handleLogout} />}
					/>

					{/* Cart Page */}
					<Route
						path="/cart/:bike/:plan"
						element={<Cart name={name} onLogout={handleLogout} />}
					/>

					{/* Order Page */}
					<Route
						path="/order"
						element={<Order name={name} onLogout={handleLogout} />}
					/>
					
				</Routes>
			)}
		</div>
	);
}

export default App;
