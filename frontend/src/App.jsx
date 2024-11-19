import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Start_Drive from "./pages/Start_Drive";
import About_Us from "./pages/About_Us";
import Traffic_Rule from "./pages/Traffic Signlas/Traffic_Rule";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/footer";

function AboutUs() {
  return <h2>About Us Page</h2>;
}

function StartDrive() {
  return <h2>Start Drive Page</h2>;
}

function TrafficRules() {
  return <h2>Traffic Rules Page</h2>;
}

function Login() {
  return <h2>Login Page</h2>;
}

function Signup() {
  return <h2>Signup Page</h2>;
}

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about-us" element={<About_Us />} />
        <Route path="/start-drive" element={<Start_Drive />} />
        <Route path="/traffic-rules" element={<Traffic_Rule />} />
       
      </Routes>
      <Footer/>
    </Router>
  );
}