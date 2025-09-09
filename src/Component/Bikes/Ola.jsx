import React, { act } from "react";
import Navbar from "../navbar";
import { useNavigate } from "react-router-dom";
import ola from "../../Images/ola.jpg";

import "./Uni.css";
	
const Ola = ({ name, onLogout }) => {
	const navigate = useNavigate();

	return (
		<div className="main">
			<Navbar name={name} onClick={onLogout} />

			<h1>
				<b>Ola Electric Scooty</b>
			</h1>

			<div className="content">
				<aside>
					<img src={ola} id="vehicle" alt="ola scooty" />
				</aside>

				<aside className="right">
					<h2 style={{ fontFamily: "Comic Sans MS" }}>Premium Scooter </h2>
					<div className="details">
						<p>
							Pleasure - Stylish Scooter 🛵 110cc <br />
							Smooth engine{" "}
							<span style={{ color: "blue", fontWeight: "bold" }}>
								Lightweight{" "}
							</span>
							and easy to handle <br />
							Attractive design Comfortable ride Great mileage
						</p>

						<h3 style={{ fontFamily: "Comic Sans MS" }}>Price: ₹29.00 /hr</h3>
					</div>

					{/* ✅ Return button */}
					<button className="return-btn" onClick={() => navigate("/duration/ola")}>
						+ Buy Bike
					</button>
					<button
						className="btn btn-danger ms-2"
						onClick={() => navigate("/welcome")}
					>
						⬅ Return to Bikes
					</button>
				</aside>
			</div>
		</div>
	);
};

export default Ola;
