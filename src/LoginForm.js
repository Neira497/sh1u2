import React from "react";
import "./LoginForm.css";
import "./bootstrap/css/bootstrap.min.css";

function LoginForm() {
  return (
    <div className="wrapper d-flex bg-dark align-items-center justify-content-center w-100">
      <div className="login">
        <form className="needs-validation">
          <h2 className="mb-3">Login Form</h2>
          <div className="form-group mb-2 was-validated">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input type="email" className="form-control" required></input>
            <div className="invalid-feedback">Please enter your email</div>
          </div>
          <div className="form-group mb-2 was-validated">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input type="password" className="form-control" required></input>
            <div className="invalid-feedback">Please enter your password</div>
          </div>
          <div className="form-group mb-2">
            <input type="checkbox" className="form-check-input"></input>
            <label htmlFor="check" className="form-check-label mx-2">
              Remember me
            </label>
          </div>

          <button type="submit" className="btn btn-success w-100 mt-2">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
