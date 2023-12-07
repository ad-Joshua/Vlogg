import React from "react";
import { Nav, NavLink, Bars, NavMenu } from "../Components/NavbarElements";
import { useState } from "react";

function Navbar() {
  const [activeLink, setActiveLink] = useState("");

  function handleClickedLink(link) {
    setActiveLink(link);
  }

  return (
    <div>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink
            to="/staff/home"
            className={activeLink === "home" ? "active" : ""}
            onClick={() => handleClickedLink("home")}
          >
            Home
          </NavLink>
          <NavLink
            to="/staff/about"
            className={activeLink === "about" ? "active" : ""}
            onClick={() => handleClickedLink("about")}
          >
            About
          </NavLink>
          <NavLink
            to="/staff/contact"
            className={activeLink === "contact" ? "active" : ""}
            onClick={() => handleClickedLink("contact")}
          >
            Contact
          </NavLink>
          <NavLink
            to="/staff/companyprofile"
            className={activeLink === "companyprofile" ? "active" : ""}
            onClick={() => handleClickedLink("companyprofile")}
          >
            Company Profile Information
          </NavLink>
        </NavMenu>
      </Nav>
    </div>
  );
}

export default Navbar;
