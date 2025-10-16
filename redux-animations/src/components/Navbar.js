import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => (
  <nav className="navbar">
    <ul>
      <li><Link to="/demo1">Demo 1</Link></li>
      <li><Link to="/demo2">Demo 2</Link></li>
      <li><Link to="/demo3">Demo 3</Link></li>
    </ul>
  </nav>
);
export default Navbar;