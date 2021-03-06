import React from "react";

export default function Project({ site }) {
  return (
    <div className="projectThumb">
      <div className="projectThumbInner">
        <div className="front">
          <img src={site.imageURL} alt={site.title}></img>
        </div>
        <div className="back">
          <div className="siteInfo">
            <div className="name">
              <h1>{site.title}</h1>
              <h2>{site.description}</h2>
            </div>
            <div className="lang">
              <h3>{site.languages}</h3>
              <h4>{site.details}</h4>
            </div>
          </div>
          <h3
            className="click"
            onClick={() => window.open(site.websiteURL, "_blank")}
          >
            Visit Site
          </h3>
        </div>
      </div>
    </div>
  );
}
