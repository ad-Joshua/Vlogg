import React from "react";
import "./Header.css";
import { useState } from "react";

function Header() {
  const [activeLink, setActiveLink] = useState("");

  function handleClickedLink(link) {
    setActiveLink(link);
  }
  return (
   <div>
     <div>
      <header >Header
        <a href="/logout" id="logout" className={activeLink === "/logout" ? "active" : ""}
        onClick={()=>handleClickedLink("logout")}>Link</a>
      </header>
    </div>
   </div>
  );
}

export default Header;
