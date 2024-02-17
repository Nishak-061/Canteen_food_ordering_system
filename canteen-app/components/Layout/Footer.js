import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer bg-dark text-light">
      <h4 className="text-center">All Right Reserved &copy; Canteen</h4>
      <p className="text-center mt-2">
        <Link to="/">Home</Link>
      </p>
    </div>
  );
};

export default Footer;
