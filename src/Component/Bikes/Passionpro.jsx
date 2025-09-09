import React from "react";
import Navbar from "../navbar";
import { useNavigate } from "react-router-dom";
import passionpro from "../../Images/passionpro.jpg";
import "./Uni.css";

const Passionpro = ({ name, onLogout }) => {
	const navigate = useNavigate();

	return (
		<div className="main">
			<Navbar name={name} onClick={onLogout} />

			<h1>
				<b>Passion Pro</b>
			</h1>

			<div className="content">
				<aside>
					<img src={passionpro} id="vehicle" alt="passionpro" />
				</aside>

				<aside className="right">
					<h2 style={{ fontFamily: "Comic Sans MS" }}>Passion Pro 🏍️</h2>
					<div className="details">
						<p>
							Passion Pro - Sporty Bike 🏍️ 150cc <br />
							Smooth performance{" "}
							<span style={{ color: "blue", fontWeight: "bold" }}>
								High Mileage
							</span>{" "}
							and reliable <br />
							Comfortable seating, Stylish design, Advanced features
						</p>
						<h3 style={{ fontFamily: "Comic Sans MS" }}>Price: ₹32.00 /hr</h3>
					</div>

					{/* ✅ Buttons */}
					<button
						className="return-btn"
						onClick={() => navigate("/duration/passionpro")}
					>
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

export default Passionpro;
