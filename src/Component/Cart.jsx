import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "./navbar";

// Import all bike images
import access125 from "../Images/access125.webp";
import pleasure from "../Images/pleasure.webp";
import classic from "../Images/classic.webp";
import activa from "../Images/activa.webp";
import ns125 from "../Images/ns125.webp";
import platina from "../Images/Platina.webp";
import passionpro from "../Images/passionpro.jpg";
import ola from "../Images/ola.jpg";
import vespa1 from "../Images/vespa1.jpeg";

import "./Cart.css";

// ✅ Centralized bike data for Cart
const bikeData = {
	access: { name: "Access 125", image: access125 },
	access125: { name: "Access 125", image: access125 },
	pleasure: { name: "Pleasure", image: pleasure },
	classic: { name: "Classic", image: classic },
	activa: { name: "Activa", image: activa },
	ns125: { name: "NS125", image: ns125 },
	platina: { name: "Platina", image: platina },
	passionpro: { name: "Passion Pro", image: passionpro },
	ola: { name: "Ola-Electric", image: ola },
	vespa: { name: "Vespa", image: vespa1 },
};

const Cart = ({ name, onLogout }) => {
	const { bike, plan } = useParams();
	const navigate = useNavigate();

	const currentBike = bikeData[bike];

	// React state for controlled inputs
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");

	if (!currentBike) {
		return (
			<div className="cart-container">
				<Navbar name={name} onClick={onLogout} />
				<h2 className="cart-title">🛒 Bike Not Found</h2>
				<button className="back-btn" onClick={() => navigate(-1)}>
					⬅ Go Back
				</button>
			</div>
		);
	}

	// Function to handle order submission
	const handleOrder = async () => {
		if (!phone || !address) {
			alert("Please enter phone and address");
			return;
		}

		const orderData = {
			bike: currentBike.name,
			plan,
			phone,
			address,
			user: name,
		};

		try {
			const response = await fetch("http://localhost:5000/api/orders", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(orderData),
			});

			const result = await response.json();
			if (response.ok) {
				alert("Order placed successfully!");
				navigate("/order"); // navigate to order confirmation page
			} else {
				alert(result.error || "Something went wrong");
			}
		} catch (err) {
			alert("Server error: " + err.message);
		}
	};

	return (
		<div className="cart-container">
			<Navbar name={name} onClick={onLogout} />

			<h2 className="cart-title">🛒 Your Cart</h2>

			<div className="cart-content">
				{/* Bike Image */}
				<div className="cart-image">
					<img src={currentBike.image} alt={currentBike.name} />
				</div>

				{/* Bike Details */}
				<div className="cart-details">
					<p>
						<b>Bike:</b> <span>{currentBike.name}</span>
					</p>
					<p>
						<b>Plan:</b> <span>{plan}</span>
					</p>

					{/* Controlled Inputs */}
					<input
						type="tel"
						placeholder="+91 Phone Number"
						className="cart-input"
						value={phone}
						onChange={(e) => setPhone(e.target.value)}
					/>

					<textarea
						placeholder="Address"
						className="cart-input cart-textarea"
						value={address}
						onChange={(e) => setAddress(e.target.value)}
					></textarea>
				</div>
			</div>

			{/* Buttons Section */}
			<div className="cart-buttons">
				<button className="back-btn" onClick={() => navigate(-1)}>
					⬅ Go Back
				</button>

				<button className="proceed-btn" onClick={handleOrder}>
					Proceed to Order ✅
				</button>
			</div>
		</div>
	);
};

export default Cart;
