import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
export default function Footer() {
  return (
    <footer>
      <div className="copyrights">
        <span> © 2022 Airbnb, Inc. · </span>
        <a href=""> Privacy · </a>
        <a href=""> Terms · </a>
        <a href=""> Sitemap · </a>
        <a href=""> Destinations </a>
      </div>
      <div className="options bold">
        <a href="">
          <FontAwesomeIcon icon={faGlobe} size="xl" />
        </a>
        <a href="">English (US)</a>
        <a href="">lei RON</a>
        <a href="">
          Support & resources <i className="arrow up"></i>
        </a>
      </div>
    </footer>
  );
}
