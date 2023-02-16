import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    //className="sticky top-0 z-30" -add this to make nav fixed
    <header className="main_nav sticky top-0 z-30 shadow-xl">
      <div className="nav">
        <Link to={"/"}>
          <h1 className="nav__logo">TOTAL_FITNESS</h1>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
