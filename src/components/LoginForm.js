
import React, { useState } from "react"
import "./login.css"
import Api from "../api/userApi"
import { useDispatch } from "react-redux";
import { setAccessTokenLogin } from "../actions/courseAction";
import { message } from "antd";

export default function (props) {
  const dispatch = useDispatch();
  let [authMode, setAuthMode] = useState("signin");
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const changeAuthMode = (status) => {
    setAuthMode(status);
  }

  const createUser = async () => {
    const result = await Api.CreateAccount(name, email, password);
    console.log(result);
    message.success("Create Account successful");
  };

  const handleLogin = async () =>{
      const dataInfo = await Api.login( email, password );
      dispatch(setAccessTokenLogin(dataInfo));
      message.success("Login successful")
  }

  const handleForgotPassword = async ()=>{
    console.log(email);
    await Api.forgotPassword(email);
    message.success("Check your email")
  }
  

  const handleInputFullname = e  => setName(e.target.value);
  const handleInputEmail = e => setEmail(e.target.value);
  const handleInputPassword = e => setPassword(e.target.value);

  if (authMode === "signin") {
    return (
      <form>
      <div className="Auth-form-container">
        <div className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary" onClick={()=>{changeAuthMode("signup")}}>
                Sign Up
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                required
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
                onChange={handleInputEmail}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                required
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                onChange={handleInputPassword}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary" onClick={handleLogin}>
                Submit
              </button>
            </div>
            <div className="text-center mt-2">
              Forgot{" "}
              <span className="link-primary" onClick={()=>{changeAuthMode("forgotPassword")}}>
                password?
              </span>
            </div>
          </div>
        </div>
      </div>
      </form>
    )
  }

  if (authMode === "forgotPassword") {
    return (
      <form>
      <div className="Auth-form-container">
        <div className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Forgot Password</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary" onClick={()=>{changeAuthMode("signup")}}>
                Sign Up
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
                onChange={handleInputEmail}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary" onClick={handleForgotPassword}>
                Submit
              </button>
            </div>
            <p className="text-center mt-2">
              <span className="link-primary" onClick={()=>{changeAuthMode("signin")}}>
                Sign In
              </span>
            </p>
          </div>
        </div>
      </div>
      </form>
    )
  }

  return (
    <form>
     <div className="Auth-form-container">
      <div className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={()=>{changeAuthMode("signin")}}>
              Sign In
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
              onChange={handleInputFullname}
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
              onChange={handleInputEmail}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
              onChange={handleInputPassword}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary" onClick={createUser}>
              Submit
            </button>
          </div>
          <p className="text-center mt-2">
            Forgot <a onClick={()=>{changeAuthMode("forgotPassword")}}>password?</a>
          </p>
        </div>
      </div>
    </div>
    </form>
  )
}