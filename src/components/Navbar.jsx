import React, { Component } from "react";
// import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

const Navbar = () => {
  //   static propTypes = {}

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3">
        <div className="container-fluid px-4">
          <img
            src="../public/icons8-news.svg"
            className="navbar-brand small"
            alt=""
            width="30rem"
          />
          <Link className="navbar-brand " to="/general">
            News Monkey
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav nav-underline me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/business">
                  business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">
                  entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/general">
                  general
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/health">
                  health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/science">
                  science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">
                  sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology">
                  technology
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
