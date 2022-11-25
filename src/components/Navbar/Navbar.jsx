import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/" data-testid="main-link">
        Main Page
      </Link>
      <Link to="/about" data-testid="about-link">
        About Page
      </Link>
      <Link to="/users" data-testid="users-link">
        Users Page
      </Link>
    </div>
  );
};

export default Navbar;
