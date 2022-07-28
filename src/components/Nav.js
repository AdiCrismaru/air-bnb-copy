import React from "react";
import "./Nav.css";
import airbnb from "../images/airbnb-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
export default function Nav() {
  const hamburger = () => {
    document.querySelector(".menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu").classList.toggle("change");
  };

  return (
    <nav>
      <img src={airbnb} alt="airbnb-logo" />
      <a href="">Become a Host</a>
      <a href="">
        <FontAwesomeIcon icon={faGlobe} className="globe-icon" />
      </a>
      <div className="menu-bar" onClick={hamburger}>
        <div className="whole-menu" onClick={hamburger}>
          <div id="menu" onClick={hamburger}>
            <div id="bar1" className="bar"></div>
            <div id="bar2" className="bar"></div>
            <div id="bar3" className="bar"></div>
          </div>

          <FontAwesomeIcon
            icon={faCircleUser}
            size="2x"
            className="user-icon"
            onClick={hamburger}
          />
        </div>
        <ul className="nav" id="nav">
          <li>
            <a href="#">
              <b>Sign up</b>
            </a>
          </li>
          <li>
            <a href="#">Log in</a>
          </li>
          <hr></hr>
          <li>
            <a href="#">Host your home</a>
          </li>
          <li>
            <a href="#">Host an experience</a>
          </li>
          <li>
            <a href="#">Help</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
