import React, { useState, useRef } from "react";

import { useDispatch, useSelector } from "react-redux";

import { login } from "../redux/actions/authActions";

const AdminLoginPage = () => {
  const { auth_loading, auth_error } = useSelector((state) => state.auth);
  console.log("Auth Error", auth_error);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "admin1@gmail.com",
    password: "1234",
  });

  const handleLogin = (e) => {
    e.preventDefault();

    const errors = [];

    if (formData.email === "") {
      errors.push(1);
      emailRef.current.classList.add("form-input-alert");
      emailAlertRef.current.innerText = "Email is required.";
    }

    if (formData.password === "") {
      errors.push(1);
      passwordRef.current.classList.add("form-input-alert");
      passwordAlertRef.current.innerText = "Password is required.";
    }

    if (errors.length === 0) {
      dispatch(login(formData));
    }
  };

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const emailAlertRef = useRef(null);
  const passwordAlertRef = useRef(null);

  return (
    <>
      <div className="form-container">
        <form>
          <h1>Admin Login</h1>
          <div>
            <input
              type="text"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => {
                emailRef.current.classList.remove("form-input-alert");
                emailAlertRef.current.innerText = "";
                setFormData({ ...formData, email: e.target.value });
              }}
              ref={emailRef}
            />
            <p className="form-alert" ref={emailAlertRef}></p>
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) => {
                passwordRef.current.classList.remove("form-input-alert");
                passwordAlertRef.current.innerText = "";
                setFormData({ ...formData, password: e.target.value });
              }}
              ref={passwordRef}
            />
            <p className="form-alert" ref={passwordAlertRef}></p>
          </div>
          <div>
            <p className="form-alert">{auth_error}</p>
            <button className="btn-login" onClick={handleLogin}>
              {auth_loading ? "loading" : "Login"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AdminLoginPage;
