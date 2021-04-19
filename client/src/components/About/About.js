import React, { useState } from "react";
import Nav from "../Nav/Nav";
import "./styles.scss";
import { useHistory } from "react-router-dom";

export default function About() {
  const history = useHistory();
  const [slideUpclass, setSlideUpClass] = useState(false);

  const clickToProjects = () => {
    setSlideUpClass(true);
    setTimeout(() => {
      history.push(`/projects`);
    }, 300);
  };

  return (
    <div className={slideUpclass ? "page slideUp" : "page"}>
      <div className="nav">
        <Nav setSlideUpClass={setSlideUpClass} />
      </div>
      <div className="content">
        <div className="headline">
          <h1>ABOUT</h1>
          <h3>
            SERIOUSLY PASSIONATE ABOUT BUILDING & PROGRAMMING<br></br> ENGAGING,
            INTERACTIVE APPS
          </h3>
          <h3 className="continue" onClick={() => clickToProjects()}>
            VIEW PROJECTS<i className="fas fa-chevron-right"></i>
          </h3>
        </div>

        <div className="skills">
          <div className="expertise">
            <div>
              <div className="percentageLine">
                <h3>HTML</h3>
                <p>90%</p>
              </div>
            </div>

            <div>
              <div className="percentageLine">
                <h3>CSS & SASS</h3>
                <p>90%</p>
              </div>
            </div>

            <div>
              <div className="percentageLine">
                <h3>JavaScript</h3>
                <p>70%</p>
              </div>
            </div>

            <div>
              <div className="percentageLine">
                <h3>TypeScript</h3>
                <p>60%</p>
              </div>
            </div>
            <div>
              <div className="percentageLine">
                <h3>Node.js & Express</h3>
                <p>60%</p>
              </div>
            </div>
            <div>
              <div className="percentageLine">
                <h3>React.js, Hooks, Redux</h3>
                <p>70%</p>
              </div>
            </div>
            <div>
              <div className="percentageLine">
                <h3>Angular</h3>
                <p>80%</p>
              </div>
            </div>
            <div>
              <div className="percentageLine">
                <h3>MongoDB</h3>
                <p>70%</p>
              </div>
            </div>
            <div>
              <div className="percentageLine">
                <h3>MySQL</h3>
                <p>70%</p>
              </div>
            </div>
            <div>
              <div className="percentageLine">
                <h3>Adobe Photoshop</h3>
                <p>60%</p>
              </div>
            </div>
          </div>

          <div className="buildingSkills">
            <div className="firstSell">
              <h3>Responsive Design</h3>
              <p>I BUILD LAYOUTS FOR ANY DEVICE, BIG OR SMALL</p>
            </div>
            <div className="secondSell">
              <h3>Fast & Dynamic</h3>
              <p>
                I'M ORGANIZED, EFFICIENT & PRACTICAL, AND MY CODE SHOWS IT :)
              </p>
            </div>
            <div className="thirdSell">
              <h3>Intuitive UX/UI</h3>
              <p>
                WITH MY UX/UI BACKGROUND, I BUILD USER FRIENDLY, ANIMATED
                INTERFACES
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
