import React from "react";
import icon from "/public/fisherman.svg";

function Footer() {
  function scrollUp() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer>
      <div className="footer-content">
        <p>&copy; 2023 Angler's Catch Diary. Alle Rechte vorbehalten.</p>
        <img className="footer-icon" src={icon} />
      </div>
      <span
        onClick={scrollUp}
        className="material-symbols-outlined footer-arrow-up"
      >
        arrow_upward
      </span>
    </footer>
  );
}

export default Footer;
