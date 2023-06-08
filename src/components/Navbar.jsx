import React, { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { authentication } from "../Firebase";
import icon from "/public/fisherman.svg";
import "../styles/navbar.css";
import { Link, useLocation } from "react-router-dom";

function Navbar(props) {
 

  function handleSignOut() {
    signOut(authentication)
      .then(() => {
        console.log("Sign-out successful.");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <nav className="navbar">
      <div className="lexikon-link-container">
        <img className="fisherman-icon" src={icon} />
        <Link
          className="lexikon-link"
          to={useLocation().pathname === "/lexikon" ? "/" : "/lexikon"}
        >
          {useLocation().pathname === "/lexikon" ? "Home" : "Lexikon"}
        </Link>
      </div>
      {!props.user ? (
        <div className="navbar-buttons-div">
          <button
            onClick={() => {
              props.setDisplayLoginForm((prev) => !prev);
            }}
          >
            Login
            <span className="material-symbols-outlined">login</span>
          </button>
          <button onClick={handleSignOut}>
            Logout
            <span className="material-symbols-outlined">logout</span>
          </button>
          <button
            className="register-btn"
            onClick={() => {
              props.setDisplayRegisterForm((prev) => !prev);
            }}
          >
            Register
            <span className="material-symbols-outlined">person_add</span>
          </button>
        </div>
      ) : (
        <div className="logout-div">
          <button onClick={handleSignOut}>
            Logout
            <span className="material-symbols-outlined">logout</span>
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
