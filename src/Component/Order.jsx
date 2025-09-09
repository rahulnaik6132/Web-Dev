import React from "react";
import Navbar from "./navbar";

const Order = ({ name, onLogout }) => {
	return (
		<div className="main">
			<Navbar name={name} onClick={onLogout} />
			<h2>Order Placed 🎉</h2>
			<p>Thank you for booking! Your bike will be ready soon.</p>
		</div>
	);
};

export default Order;
