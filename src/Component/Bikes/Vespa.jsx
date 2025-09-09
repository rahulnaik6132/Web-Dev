import React, { useState, useEffect } from "react";
import Navbar from "../navbar";
import { useNavigate } from "react-router-dom";
import "./Uni.css";

// Import all 6 images
import vespa1 from "../../Images/vespa1.jpeg";
import vespa2 from "../../Images/vespa2.jpeg";
import vespa3 from "../../Images/vespa3.jpeg";
import vespa4 from "../../Images/vespa4.jpeg";
import vespa5 from "../../Images/vespa5.jpeg";

const Vespa = ({ name, onLogout }) => {
	const navigate = useNavigate();

	// Array of images
	const images = [
		vespa1,
		vespa2,
		vespa3,
		vespa4,
		vespa5,
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
						alt={`Vespa ${currentImage + 1}`}
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
						onClick={() => navigate("/duration/vespa")}
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

export default Vespa;
