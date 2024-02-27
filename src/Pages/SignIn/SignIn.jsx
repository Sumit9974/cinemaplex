import React from "react";
import "./SignIn.css";
import { Link } from "react-router-dom";
const SignIn = ({ userLogin }) => {
  return (
    <div className="signin">
      <div className="container">
        <div className="main row">
          <div className="main-left">
            <img
              src="https://davur.dexignzone.com/frontend/images/login.jpg"
              alt="login"
            />
          </div>
          <div className="main-right">
            <div className="main-right-title">Sign In</div>
            <div className="main-right-body">
              <div className="form-control">
                <span>Phone Number</span>
                <input type="number" placeholder="Enter Phone No." required />
              </div>
              <div className="form-control">
                <span>OTP send on above number</span>
                <input type="number" placeholder="Enter OTP" required/>
              </div>
            </div>

            <div className="main-right-footer">
              <Link to="/">
                <button
                  onClick={() => {
                    userLogin(true);
                  }}
                >
                  Sign In
                </button>
              </Link>

              <p>
                Don't have an account? <span>Sign Up</span>
              </p>
            </div>
          </div>
        </div>
      </div>
   
    </div>
  );
};

export default SignIn;
