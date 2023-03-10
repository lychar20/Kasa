import * as React from "react";
import Banner from "components/banner/index";
import IMG2 from "assets/image/IMG2.png";
import Collapse from "components/collapse/index";
import aboutArray from "assets/data/aboutArray.json";
import "./about.scss";

function About() {
  return (
    <div className="about">
    <>
      <Banner img={IMG2} />

      <div className="Global_collapse">
        {aboutArray.map((rule, id) => (
          <Collapse
            key={id}
            aboutTitle={rule.aboutTitle}
            aboutText={rule.aboutText}
          />
        ))}
      </div>
    </>
    </div>
  );
}

export default About;



