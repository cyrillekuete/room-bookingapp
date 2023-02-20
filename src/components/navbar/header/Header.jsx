import {
  faBed,
  faCar,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerList">
        <div className="headerListItems">
          <FontAwesomeIcon icon={faBed} />
          <span>Stays</span>
        </div>
        <div className="headerListItems">
          <FontAwesomeIcon icon={faPlane} />
          <span>Flights</span>
        </div>
        <div className="headerListItems">
          <FontAwesomeIcon icon={faCar} />
          <span>Car Rentals</span>
        </div>
        <div className="headerListItems">
          <FontAwesomeIcon icon={faBed} />
          <span>Attractions</span>
        </div>
        <div className="headerListItems">
          <FontAwesomeIcon icon={faTaxi} />
          <span>Airport Taxis</span>
        </div>
      </div>
    </div>
  );
};

export default Header;