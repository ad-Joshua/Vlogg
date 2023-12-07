import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
//import Navbar from "./Components/Navbar";
// import Home from "./NavComponents/Home";
// import About from "./NavComponents/About";
// import CompanyProfile from "./NavComponents/CompanyProfile";
// import Contact from "./NavComponents/Contact";
// import Logout from "./Components/Logout";
import Footer from "./Components/Footer";
import Welcome from "./MainComponents/Welcome";
import StaffLogin from "./MainComponents/StaffLogin";
import UserLogin from "./MainComponents/UserLogin";

function App() {
  return (
    <div className="App">
      <Header />
      Hello World
      <BrowserRouter>
        <Routes>
          <Route path="/welcome" Component={Welcome} />
          <Route path="/staff/*" Component={StaffLogin} />
          <Route path="/user" Component={UserLogin} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

// npm i react-icons --save  //this needs to be done.
