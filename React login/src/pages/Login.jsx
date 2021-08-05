import React from 'react';
import "../css/login.css";
import { Link } from 'react-router-dom';

const Login = () =>{
    return(
    <div className="center">
      <h1>Login</h1>
      <form action="/logind" method="post" className="needs-validation" action="login" novalidate>
        <div className="txt_field has-validation">
          <input type="text" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
          
          <label for="validationCustomUsername">Username</label>
        </div>
        <div className="txt_field has-validation">
          <input type="password" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
          
          <label for="validationCustomUsername">Password</label>
        </div>
        <div className="pass">Forgot Password?</div>
        <input type="submit" value="Login" />
        <div className="signup_link">
          Not a member? <Link to="/">Signup</Link>
        </div>
      </form>
    </div>
    );
}

export default Login;