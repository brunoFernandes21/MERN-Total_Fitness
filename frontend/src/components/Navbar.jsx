import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    //className="sticky top-0 z-30" -add this to make nav fixed
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
