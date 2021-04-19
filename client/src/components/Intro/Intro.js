import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./styles.scss";

export default function Intro() {
  const [slideUpclass, setSlideUpClass] = useState(false);

  const history = useHistory();

  const clickButton = () => {
    setTimeout(() => {
      history.push(`/about`);
    }, 300);
    setSlideUpClass(true);
  };

  return (
    <div className={slideUpclass ? "intro slideUp" : "intro"}>
      <div className={slideUpclass ? "introduction slideUp" : "introduction"}>
        <h1 className="firstTitle">Hi</h1>
        <h1 className="secondTitle">I'm Ori</h1>
        <h1 className="thirdTitle">A full-stack developer</h1>
        <h1 className="fourthTitle">This is my portfolio</h1>
        <h3 className="fifthTitle" onClick={() => clickButton()}>
          Enter
        </h3>
      </div>
    </div>
  );
}
