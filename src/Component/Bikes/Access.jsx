import React, { useState, useEffect } from "react";
import Navbar from "../navbar";
import { useNavigate } from "react-router-dom";
import "./Uni.css";

// Import all 6 images
import access125 from "../../Images/access125.webp";
import pleasure from "../../Images/pleasure.webp";
import ns125 from "../../Images/ns125.webp";
import platina from "../../Images/Platina.webp";
import ola from "../../Images/ola.jpg";
import vespa1 from "../../Images/vespa1.jpeg";

const Access = ({ name, onLogout }) => {
	const navigate = useNavigate();

	// Array of images
	const images = [
		access125,
		platina,
		pleasure,
		ns125,
		vespa1,
		ola,
	];

	const [currentImage, setCurrentImage] = useState(0);

	// Change image every 3 seconds
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImage((prev) => (prev + 1) % images.length);
		}, 1000); // 3000ms = 3 seconds

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="main">
			<Navbar name={name} onClick={onLogout} />

			<h1>
				<b>Access125</b>
			</h1>

			<div className="content">
				<aside>
					<img
						src={images[currentImage]}
						id="vehicle"
						alt={`Access125 ${currentImage + 1}`}
					/>
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
						<h3 style={{ fontFamily: "Comic Sans MS" }}>Price: ₹24.00/hr</h3>
					</div>

					<button
						className="return-btn"
						onClick={() => navigate("/duration/access125")}
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

export default Access;
