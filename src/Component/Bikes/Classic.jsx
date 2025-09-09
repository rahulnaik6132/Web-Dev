import React from "react";
import Navbar from "../navbar";
import { useNavigate } from "react-router-dom";
import classic from "../../Images/classic.webp";
import "./Uni.css";

const Classic = ({ name, onLogout }) => {
	const navigate = useNavigate();

	return (
		<div className="main">
			<Navbar name={name} onClick={onLogout} />

			<h1>
				<b>Classic 350</b>
			</h1>

			<div className="content">
				<aside>
					<img src={classic} id="vehicle" alt="Access125" />
				</aside>

				<aside className="right">
					<h2 style={{ fontFamily: "Comic Sans MS" }}>Premium Scooter 🚴</h2>
					<div className="details">
						<p>
							Access 125 - Premium Scooter 🚴 125cc <br />
							Powerful engine{" "}
							<span style={{ color: "blue", fontWeight: "bold" }}>
								Lightweight
							</span>{" "}
							and easy to ride <br />
							Stylish design, Comfortable seating, Good mileage
						</p>
						<h3 style={{ fontFamily: "Comic Sans MS" }}>Price: ₹48.00 /hr</h3>
					</div>

					{/* ✅ Buttons */}
					<button
						className="return-btn"
						onClick={() => navigate("/duration/classic")}
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

export default Classic;
