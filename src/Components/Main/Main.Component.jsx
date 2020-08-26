import React from "react";
import "./Main.Component.style.scss";
import { Link } from "react-router-dom";

import mySvg from "../../External/img/Cover.svg";

import mySvg3 from "../../External/img/big-ellipse.svg";
import mySvg4 from "../../External/img/mid-ellipse2.svg";
import mySvg5 from "../../External/img/small-ellipse.svg";

import Heading from "../Heading/Heading";
import Button from "../Button/Button";

export const Main = () => {
  return (
    <div>
      <main>
        <section className="main-presentation">
          <div className="intro">
            <div className="intro-content">
              <h1>
                <Heading>
                  Home Has Never <span></span> Been More <span></span>{" "}
                  Important.
                </Heading>
              </h1>
              <p>
                The ultimate luxury is being able to relax and <span></span>{" "}
                enjoy your home. RealHousey has over one <span></span> million
                homes for sale and to rent.
              </p>
            </div>

            <div className="cta">
              <Link to="/agentfinder">
                <Button>Learn More</Button>
              </Link>
            </div>
          </div>

          <div className="cover">
            <img className="main-img" src={mySvg} alt="Home-Search" />
          </div>
        </section>

        <img className="big-ellipse" src={mySvg3} alt="design" />
        <img className="mid-ellipse" src={mySvg4} alt="design" />
        <img className="small-ellipse" src={mySvg5} alt="design" />
      </main>
    </div>
  );
};

export default Main;
