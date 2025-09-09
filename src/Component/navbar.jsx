import React from "react";
import bikey from "../Images/bikey.png"; // make sure path is correct
import "./navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Navbar = ({ name, onClick }) => {
	return (
		<nav className="navbar navbar-expand-lg px-3 custom-navbar">
			<div className="container-fluid">
				<div className="d-flex align-items-center">
					<img
						src={bikey}
						alt="logo"
						id="logo"
						style={{ height: "40px", marginRight: "10px" }}
					/>
					<span
						style={{
							fontFamily: "Helvetica",
							fontSize: "20px",
							fontWeight: "bold",
						}}
					>
						Bikey
					</span>
				</div>

				{/* Navbar toggle for mobile */}
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				{/* Navbar links */}
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav ms-auto">
						<li className="nav-item">
							<li className="nav-item">
								<Link className="nav-link active" to="/welcome">
									Home
								</Link>
							</li>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Pricing
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link disabled" aria-disabled="true">
								Disabled
							</a>
						</li>
					</ul>

					{/* User Greeting + Logout button */}
					<span className="ms-3">Hello, {name}!</span>
					<button
						type="button"
						onClick={onClick}
						className="btn btn-danger ms-3"
					>
						Logout
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
