import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { FiLogIn } from "react-icons/fi";

import { logout } from "../redux/actions/authActions";

// import "../styles/Navbar.css";

const Navbar = () => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <nav className="navbar-custom">
        <div className="navbar-container">
          <div>
            <h1>ABC Technologies</h1>
          </div>
          <div>
            <ul>
              {!isAuth ? (
                <li>
                  <Link className="nav-link-custom" to="/login">
                    Admin Login <FiLogIn />
                  </Link>
                </li>
              ) : (
                <li className="nav-link-custom" onClick={handleLogout}>
                  <a>
                    Logout <FiLogIn />
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
