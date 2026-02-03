 import React, { useState } from "react";
import "./PopUpForm.css";
import { assets } from "../../assets/assets";

const PopUpForm = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Login");

  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt="Close"
          />
        </div>

        <div className="login-popup-inputs">
          {currentState === "Sign Up" && (
            <input type="text" placeholder="Your Name" required />
          )}

          <input type="email" placeholder="Enter Email" required />
          <input type="password" placeholder="Password" required />
        </div>

        <button type="submit">
          {currentState === "Sign Up" ? "Create Account" : "Login"}
        </button>

        {currentState === "Sign Up" && (
          <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>
              By continuing, I agree to the Terms of Use & Privacy Policy.
            </p>
          </div>
        )}

        {currentState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setCurrentState("Sign Up")}>
              Click here
            </span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrentState("Login")}>
              Login here
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default PopUpForm;
