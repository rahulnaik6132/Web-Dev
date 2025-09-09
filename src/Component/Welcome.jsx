import React from "react";
import { Link } from "react-router-dom";

import access125 from "../Images/access125.webp";
import pleasure from "../Images/pleasure.webp";
import classic from "../Images/classic.webp";
import activa from "../Images/activa.webp";
import ns125 from "../Images/ns125.webp";
import platina from "../Images/Platina.webp";
import passionpro from "../Images/passionpro.jpg";
import ola from "../Images/ola.jpg";
import vespa1 from "../Images/vespa1.jpeg";

import "./Welcome.css";
import Navbar from "./navbar";

const bikes = [
	{ name: "Access 125", price: "₹24.00 /hr", img: access125, link: "/access" },
	{ name: "Pleasure", price: "16.00 /hr", img: pleasure, link: "/pleasure" },
	{ name: "Classic", price: "48.00 /hr", img: classic, link: "/classic" },
	{
		name: "Passion Pro",
		price: "32.00 /hr",
		img: passionpro,
		link: "/passionpro",
	},
	{ name: "Activa", price: "22.00 /hr", img: activa, link: "/activa" },
	{ name: "NS125", price: "44.00 /hr", img: ns125, link: "/ns" },
	{ name: "Platina", price: "38.00 /hr", img: platina, link: "/platina" },
	{ name: "Ola-Electric", price: "29.00 /hr", img: ola, link: "/ola" },
	{ name: "Vespa", price: "32.00 /hr", img: vespa1, link: "/vespa" }, // note: lowercase route
];

const Welcome = ({ name, onLogout }) => {
	return (
		<div className="main">
			<Navbar name={name} onClick={onLogout} />

			<div className="bike">
				{bikes.map((bike, index) => (
					<div className="bike-image" key={index}>
						{bike.link ? (
							<Link to={bike.link}>
								<img src={bike.img} alt={bike.name} className="motor" />
							</Link>
						) : (
							<img src={bike.img} alt={bike.name} className="motor" />
						)}
						<figcaption>
							{bike.name} <span className="price">₹ {bike.price}</span>
						</figcaption>
					</div>
				))}
			</div>

			<footer>
				<div></div>
			</footer>
		</div>
	);
};

export default Welcome;
