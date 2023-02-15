import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-30">
      <div className="nav">
        <Link to={"/"}>
          <h1>Workout Buddy</h1>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
