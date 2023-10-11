import React from "react";
import "../Css/SignUp.css";

function SignUp() {
  return (
    <div className="signup_container">
      <div className="signup_header">
        <div className="header_left">
          <h4>startup3</h4>
        </div>
        <div className="header_right">
          <p>Overview</p>
          <p>Price</p>
          <p>Blog</p>
          <p>Feedback</p>
          <p>Purchase</p>
        </div>
      </div>
      <div className="signup_form">
        <div className="signup_form_left">
          <h2>Generate Awesome Web Pages</h2>
          <h5>
            The most important part of the Startup is the samples. The samples
            form a set of 25 usable pages you can use as is or you can add new
            blocks.
          </h5>
          <button>Learn More</button>
        </div>
        <div className="signup_form_right">
          <div className="signup_form_right_content">
            <h3>Sign Up Now</h3>
            <input type="email" placeholder="Your email" />
            <input type="password" placeholder="Your password" />
            <div className="checkbox_container" >
                <input type="checkbox" />
                <p>I agree to the Terms of Service.</p>
            </div>
            <button>Sign In</button>
            <div className="divider" >or</div>
            <button>Login via Twitter</button>
            <p>Do you have an Account?<span>Sign In</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
