import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "./navbar";
import "./Duration.css";

// images
import access125 from "../Images/access125.webp";
import pleasure from "../Images/pleasure.webp";
import classic from "../Images/classic.webp";
import activa from "../Images/activa.webp";
import ns125 from "../Images/ns125.webp";
import platina from "../Images/Platina.webp";
import passionpro from "../Images/passionpro.jpg";
import ola from "../Images/ola.jpg";
import vespa1 from "../Images/vespa1.jpeg";

// Bike data
const bikeData = {
  access125: {
    name: "Access 125",
    price: "₹24.00 /hr",
    image: access125,
    hourly: [
      { label: "2 Hours", cost: "₹48" },
      { label: "5 Hours", cost: "₹120" },
    ],
    daily: [
      { label: "1 Day", cost: "₹576" },
      { label: "3 Days", cost: "₹1728" },
    ],
    weekly: [{ label: "1 Week", cost: "₹4032" }],
    monthly: [{ label: "1 Month", cost: "₹17280" }],
  },
  pleasure: {
    name: "Pleasure",
    price: "₹16.00 /hr",
    image: pleasure,
    hourly: [
      { label: "2 Hours", cost: "₹32" },
      { label: "5 Hours", cost: "₹80" },
    ],
    daily: [
      { label: "1 Day", cost: "₹384" },
      { label: "3 Days", cost: "₹1152" },
    ],
    weekly: [{ label: "1 Week", cost: "₹2688" }],
    monthly: [{ label: "1 Month", cost: "₹11520" }],
  },
  classic: {
    name: "Classic",
    price: "₹48.00 /hr",
    image: classic,
    hourly: [
      { label: "2 Hours", cost: "₹96" },
      { label: "5 Hours", cost: "₹240" },
    ],
    daily: [
      { label: "1 Day", cost: "₹1152" },
      { label: "3 Days", cost: "₹3456" },
    ],
    weekly: [{ label: "1 Week", cost: "₹8064" }],
    monthly: [{ label: "1 Month", cost: "₹34560" }],
  },
  activa: {
    name: "Activa",
    price: "₹22.00 /hr",
    image: activa,
    hourly: [
      { label: "2 Hours", cost: "₹44" },
      { label: "5 Hours", cost: "₹110" },
    ],
    daily: [
      { label: "1 Day", cost: "₹528" },
      { label: "3 Days", cost: "₹1,584" },
    ],
    weekly: [{ label: "1 Week", cost: "₹3,696" }],
    monthly: [{ label: "1 Month", cost: "₹15,840" }],
  },
  ns125: {
    name: "NS 125",
    price: "₹44.00 /hr",
    image: ns125,
    hourly: [
      { label: "2 Hours", cost: "₹88" },
      { label: "5 Hours", cost: "₹220" },
    ],
    daily: [
      { label: "1 Day", cost: "₹1,056" },
      { label: "3 Days", cost: "₹3,168" },
    ],
    weekly: [{ label: "1 Week", cost: "₹7,392" }],
    monthly: [{ label: "1 Month", cost: "₹31,680" }],
  },
  platina: {
    name: "Platina",
    price: "₹38.00 /hr",
    image: platina,
    hourly: [
      { label: "2 Hours", cost: "₹76" },
      { label: "5 Hours", cost: "₹190" },
    ],
    daily: [
      { label: "1 Day", cost: "₹912" },
      { label: "3 Days", cost: "₹2,736" },
    ],
    weekly: [{ label: "1 Week", cost: "₹6,384" }],
    monthly: [{ label: "1 Month", cost: "₹27,360" }],
  },
  passionpro: {
    name: "Passion Pro",
    price: "₹32.00 /hr",
    image: passionpro,
    hourly: [
      { label: "2 Hours", cost: "₹64" },
      { label: "5 Hours", cost: "₹160" },
    ],
    daily: [
      { label: "1 Day", cost: "₹768" },
      { label: "3 Days", cost: "₹2,304" },
    ],
    weekly: [{ label: "1 Week", cost: "₹5,376" }],
    monthly: [{ label: "1 Month", cost: "₹25,200" }],
  },
  ola: {
    name: "Ola-Electric",
    price: "₹29.00 /hr",
    image: ola,
    hourly: [
      { label: "2 Hours", cost: "₹58" },
      { label: "5 Hours", cost: "₹145" },
    ],
    daily: [
      { label: "1 Day", cost: "₹696" },
      { label: "3 Days", cost: "₹2,736" },
    ],
    weekly: [{ label: "1 Week", cost: "₹4,872" }],
    monthly: [{ label: "1 Month", cost: "₹20,880" }],
  },
  vespa: {
    name: "Vespa",
    price: "₹32.00 /hr",
    image: vespa1,
    hourly: [
      { label: "2 Hours", cost: "₹64" },
      { label: "5 Hours", cost: "₹160" },
    ],
    daily: [
      { label: "1 Day", cost: "₹768" },
      { label: "3 Days", cost: "₹2,304" },
    ],
    weekly: [{ label: "1 Week", cost: "₹5,376" }],
    monthly: [{ label: "1 Month", cost: "₹23,040" }],
  },
};

const Duration = ({ name, onLogout }) => {
  const navigate = useNavigate();
  const { bike } = useParams();

  const currentBike = bikeData[bike] || bikeData.access125;

  const bikeKeys = Object.keys(bikeData);
  const currentIndex =
    bikeKeys.indexOf(bike) !== -1 ? bikeKeys.indexOf(bike) : 0;
  const nextBike = bikeKeys[(currentIndex + 1) % bikeKeys.length];
  const prevBike =
    bikeKeys[(currentIndex - 1 + bikeKeys.length) % bikeKeys.length];

  const [selectedPlan, setSelectedPlan] = useState(null);

  const renderOptions = (title, plans) => (
    <div className="duration-section">
      <h3>{title}</h3>
      <div className="options">
        {plans.map((plan, idx) => (
          <button
            key={idx}
            className={`duration-btn ${
              selectedPlan?.label === plan.label ? "active" : ""
            }`}
            onClick={() => setSelectedPlan(plan)}
          >
            {plan.label} - {plan.cost}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="main">
      <Navbar name={name} onClick={onLogout} />

      <div className="duration-layout">
        <div className="duration-info">
          <h2 id="h2" className="bike-title">
            {currentBike.name}
          </h2>
          <p id="price" className="bike-price">
            {currentBike.price}
          </p>

          <p className="choose-text">Select the duration for your bike rental:</p>

          <div className="duration-grid">
            {renderOptions("⏳ Hourly", currentBike.hourly)}
            {renderOptions("📅 Daily", currentBike.daily)}
            {renderOptions("🗓 Weekly", currentBike.weekly)}
            {renderOptions("📆 Monthly", currentBike.monthly)}
          </div>

          {/* Add to cart with Rupees */}
          {selectedPlan && (
            <div className="cart-section">
              <button
                className="cart-btn"
                onClick={() =>
                  navigate(`/cart/${bike}/${selectedPlan.label}`)
                }
              >
                🛒 Add {currentBike.name} ({selectedPlan.label}) - ₹
                {selectedPlan.cost.replace("₹", "")} to Cart
              </button>
            </div>
          )}
        </div>

        <div className="duration-image">
          <img src={currentBike.image} alt={currentBike.name} />
        </div>
      </div>

      <div className="duration-footer-buttons">
        <button
          className="nav-btn"
          onClick={() => {
            setSelectedPlan(null);
            navigate(`/duration/${prevBike}`);
          }}
        >
          ⬅ {bikeData[prevBike].name}
        </button>

        <button
          className="nav-btn"
          onClick={() => {
            setSelectedPlan(null);
            navigate(`/duration/${nextBike}`);
          }}
        >
          {bikeData[nextBike].name} ➡
        </button>

        <button className="home-btn" onClick={() => navigate("/welcome")}>
          🏠 Return to Home
        </button>
      </div>
    </div>
  );
};

export default Duration;
