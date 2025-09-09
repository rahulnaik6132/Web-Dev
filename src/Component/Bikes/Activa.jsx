import React, { act } from "react";
import Navbar from "../navbar";
import { useNavigate } from "react-router-dom";
import activa from "../../Images/activa.webp";
import "./Uni.css";

const Activa = ({ name, onLogout }) => {
	const navigate = useNavigate();

	return (
		<div className="main">
			<Navbar name={name} onClick={onLogout} />

			<h1>
				<b>Activa</b>
			</h1>

			<div className="content">
				<aside>
					<img src={activa} id="vehicle" alt="activa scooty" />
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

						<h3 style={{ fontFamily: "Comic Sans MS" }}>Price: ₹22.00 /hr</h3>
					</div>

					{/* ✅ Return button */}
					<button className="return-btn" onClick={() => navigate("/duration/activa")}>
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

export default Activa;
