import React from "react";
import { Link } from "react-scroll";
import "./Footer.scss";

import icon from "../../External/icons/facebook.svg";
import icon2 from "../../External/icons/instagram.svg";
import icon3 from "../../External/icons/pinterest.svg";
import icon4 from "../../External/icons/reddit.svg";

const Footer = () => {
  return (
    <div className="footer-whole-container">
      <div className="footer-container">
        <div className="footer-main-content">
          <div className="footer-main-link">
            <h2>realHousey</h2>
          </div>
          <div className="footer-side-links">
            <div className="footer-location">
              <h4>Real Estate Markets</h4>
              <hr />
              <div className="fooder-link">
                <Link className="fooder-links" to="/houses">
                  Alabama Real Estate
                </Link>
                <Link className="fooder-links" to="/houses">
                  Estate Hawaii Real Estate
                </Link>
                <Link className="fooder-links" to="/houses">
                  District Of Columbia Real
                </Link>
                <Link className="fooder-links" to="/houses">
                  New York Real Estate
                </Link>
                <Link className="fooder-links" to="/houses">
                  North Carolina Real Estate
                </Link>
                <Link className="fooder-links" to="/houses">
                  South Carolina Real Estate
                </Link>
                <Link className="fooder-links" to="/houses">
                  Texas Real Estate
                </Link>
                <Link className="fooder-links" to="/houses">
                  Utah Real Estate
                </Link>
                <Link className="fooder-links" to="/houses">
                  Washington Real Estate
                </Link>
                <Link className="fooder-links" to="/houses">
                  Florida Real Estate
                </Link>
                <Link className="fooder-links" to="/houses">
                  Connecticut Real Estate
                </Link>
                <Link className="fooder-links" to="/houses">
                  Colorado Real Estate
                </Link>
                <Link className="fooder-links" to="/houses">
                  California Real Estate
                </Link>
                <Link className="fooder-links" to="/houses">
                  Arkansas Real Estate
                </Link>
                <Link className="fooder-links" to="/houses">
                  Arizona Real Estate
                </Link>
                <Link className="fooder-links" to="/houses">
                  Alaska Real Estate
                </Link>
              </div>
            </div>
            <div className="footer-explore">
              <h4>Explore Trulia</h4>
              <hr />
              <div className="fooder-link">
                <div className="link-pointer fooder-links">
                  <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-110}
                    duration={2000}
                  >
                    About
                  </Link>
                </div>
                <Link className="fooder-links link-pointer" to="/houses">
                  TermsPrivacyTerms of Use
                </Link>
                <Link className="fooder-links link-pointer" to="/houses">
                  Listings Quality
                </Link>
                <Link className="fooder-links link-pointer" to="/houses">
                  Policy Subscription
                </Link>
                <Link className="fooder-links link-pointer" to="/houses">
                  Terms Help Privacy
                </Link>
                <Link className="fooder-links link-pointer" to="/houses">
                  Portal Cookie
                </Link>
              </div>
            </div>

            <div className="fooder-professionals">
              <h4>For Professionals</h4>
              <hr />
              <div className="fooder-link">
                <Link className="fooder-links link-pointer" to="/houses">
                  U.S. Property Records
                </Link>
                <Link className="fooder-links link-pointer" to="/houses">
                  Popular Counties
                </Link>
              </div>
            </div>

            <div className="fooder-address">
              <h4 className="fooder-address-title">Contact</h4>
              <hr />
              <div className="fooder-address-deatials" id="hash">
                <h3>(415) 653-7869</h3>
                <h3>realhousey@gmail.com</h3>
              </div>
              <div className="fooder-madia-links">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={icon} alt="social link" />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={icon2} alt="social link" />
                </a>
                <a
                  href="https://www.pinterest.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={icon3} alt="social link" />
                </a>
                <a
                  href="https://www.reddit.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={icon4} alt="social link" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright">© 2020 realHousey, Inc.</div>
      </div>
    </div>
  );
};

export default Footer;
