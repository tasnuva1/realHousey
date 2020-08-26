import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./NavBar.scss";
import Button from "../Button/Button";

export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      scrolled: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY < 100;
      if (isTop !== true) {
        this.setState({ scrolled: true });
      } else {
        this.setState({ scrolled: false });
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll");
  }

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <div className={this.state.scrolled ? "navbarq scrolled" : "navbarq"}>
        <header className="nav-container">
          <div className="logo-container">
            <h2 className="logo-text">
              <Link to="/">realHousey</Link>
            </h2>
          </div>

          <div className="nav-container">
            <nav className={this.state.isOpen ? "nav-links open" : "nav-links"}>
              <li className={this.state.isOpen ? "fade fade1" : "nav-li"}>
                <Link className="link" to="/houses">
                  Buy
                </Link>
              </li>
              <li className={this.state.isOpen ? "fade" : "nav-li"}>
                <Link className="link" to="/sell">
                  Sell
                </Link>
              </li>
              <li className={this.state.isOpen ? "fade" : "nav-li"}>
                <Link className="link" to="/homeloans">
                  Home Loans
                </Link>
              </li>
              <li className={this.state.isOpen ? "fade" : "nav-li"}>
                <Link className="link" to="/agentfinder">
                  Agents
                </Link>
              </li>
            </nav>

            <div
              className={this.state.isOpen ? "burger open-burger" : "burger"}
              onClick={this.handleToggle}
            >
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
            <div className="button">
              <Link to="/sell">
                <Button btn="btn2">Get Started</Button>
              </Link>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
