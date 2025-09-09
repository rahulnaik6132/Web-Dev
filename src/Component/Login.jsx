import React from "react";
import instagram from "../Images/insta.avif";
import linkedin from "../Images/linkedin.jpg";
import facebook from "../Images/facebook.webp";

const Login = ({ name, setName, handleLogin }) => {
	return (
		<div className="login">
			<h2>Login</h2>
			<input
				type="text"
				placeholder="Enter your name"
				value={name}
				onChange={(e) => setName(e.target.value)}
				required
			/>
			<input type="password" placeholder="Enter your password" required />
			<br />
			<div className="image-row">
				<img src={facebook} alt="Facebook" />
				<img
					src={linkedin}
					alt="LinkedIn"
					onClick={() =>
						window.open(
							"https://www.linkedin.com/in/rahul-r-naik-435614287/",
							"_blank"
						)
					}
					style={{ cursor: "pointer" }}
				/>
				<img
					src={instagram}
					alt="Instagram"
					onClick={() =>
						window.open(
							"https://www.instagram.com/code_innovator16/",
							"_blank"
						)
					}
					style={{ cursor: "pointer" }}
				/>
			</div>
			<button id="login" onClick={handleLogin}>
				Login
			</button>
		</div>
	);
};

export default Login;
