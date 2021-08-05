import React from 'react';
import "../css/regis.css";
import { Link } from 'react-router-dom'; 

const Signup = () =>{
    return(
      <div className="container">
        <div className="title">Registration</div>
        <div className="main-content">
          <form action="#">
            <div className="user-details">
              <div className="input-box">
                <input type="text" required />
                <label className="details">Full Name</label>
              </div>
              <div className="input-box">
                <input type="text" required/>
                <label className="details">Username</label>
              </div>
              <div className="input-box">
                <input type="text" required/>
                <label className="details">Email</label>
              </div>
              <div className="input-box">
                <input type="text" required/>
                <label className="details">Phone Number</label>
              </div>
              <div className="input-box">
                <input type="text" required/>
                <label className="details">Password</label>
              </div>
              <div className="input-box">
                <input type="text" required/>
                <label className="details">Confirm Password</label>
              </div>
            </div>
            <div className="gender-details">
              <input type="radio" name="gender" id="dot-1"/>
              <input type="radio" name="gender" id="dot-2"/>
              <input type="radio" name="gender" id="dot-3"/>
              <label className="gender-title">Select User Type</label>
              <div className="category">
                <label for="dot-1">
                <span className="dot one"></span>
                <span className="gender">Doctor</span>
              </label>
              <label for="dot-2">
                <span className="dot two"></span>
                <span className="gender">Patient</span>
              </label>
              <label for="dot-3">
                <span className="dot three"></span>
                <span className="gender"> Others</span>
                </label>
              </div>
            </div>
            <div className="button">
              <input type="submit" value="Register"/>
            </div>
            <div className="signup_link">
              Already have an account? <Link to="Login">Login here</Link>
            </div>
          </form>
        </div>
    </div>
    );
}

export default Signup;