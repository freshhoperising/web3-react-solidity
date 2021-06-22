import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import { useHistory } from "react-router-dom";
import FeelingProud from "./FeelingProud";
import Button from "../../components/button/Button";
import { style } from "glamor";

export default function Greeting(props) {
  const theme = props.theme;
  const history = useHistory();

  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });

  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1>Hello World </h1>
              <p className="greeting-text-p">I am Alan Binu</p>
              <h4 class="i1">
                  {" "}
                  <b>CEO & Founder of Web Tech Solutions</b>
                </h4>
              <p className="greeting-text-p">Full Stack Engineer</p>
              <SocialMedia />
              <div className="portfolio-repo-btn-div">
                <a href="https://web-tech-solutions.web.app/" target="_blank">
                  <button className="button1">Web Tech Solutions</button>
                </a>
                <button
                  {...styles}
                  className="button"
                  onClick={() => {
                    history.push("/contact");
                  }}
                >
                  Hire Me
                </button>
              </div>

              <div className="resume-btn-div"></div>
            </div>
          </div>
          <div className="greeting-image-div">
            
            <FeelingProud theme={theme} />
          </div>
        </div>
      </div>
    </Fade>
  );
}
