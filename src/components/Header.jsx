import React from "react";
import { Link } from "react-router-dom";
import "./navigation.css";

export default function Header() {
  return (
    <nav className="navbar navbar-expand navbar-light bg-dark fixed-top">
      {/* left side links */}
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/">
              Piano
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/quiz">
              Quiz
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/create-scales">
              Create Scales
            </Link>
          </li>
        </ul>
      </div>
      {/* right side links */}
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/profile">
              Profile
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
