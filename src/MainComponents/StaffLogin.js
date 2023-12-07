import React from "react";
import Home from "../NavComponents/Home";
import About from "../NavComponents/About";
import CompanyProfile from "../NavComponents/CompanyProfile";
import Contact from "../NavComponents/Contact";
import Logout from "../Components/Logout";
import { Routes, Route} from "react-router-dom";
import Navbar from "../Components/Navbar";

function StaffLogin() {

  return (
    <div>
      Welcome Staff users.
      <Navbar />
      <Routes>
        <Route path="/staff/*" Component={StaffLogin} />
        <Route path="/home/*" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/contact" Component={Contact} />
        <Route path="/companyprofile" Component={CompanyProfile} />
        <Route path="/logout" Component={Logout} />
      </Routes>
    </div>
  );
}

export default StaffLogin;
