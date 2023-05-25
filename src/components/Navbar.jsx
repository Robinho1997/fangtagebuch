import React from "react";
import { signOut } from "firebase/auth";
import { authentication } from "../Firebase";

function Navbar(props) {

    function handleSignOut() {
      
        signOut(authentication).then(() => {
            console.log("Sign-out successful.");

        }).catch((error) => {
            console.log(error)
        });
    }


    return (
        <nav className="navbar">
            <button onClick={() => { props.setDisplayLoginForm(prev => !prev) }}>Login
                <span className="material-symbols-outlined">
                    login
                </span>
            </button>
            <button onClick={handleSignOut}>Logout
                <span className="material-symbols-outlined">
                    logout
                </span>
            </button>
            <button onClick={() => { props.setDisplayRegisterForm(prev => !prev) }}>Register
                <span className="material-symbols-outlined">
                    person_add
                </span>
            </button>
        </nav>
    );
}

export default Navbar;