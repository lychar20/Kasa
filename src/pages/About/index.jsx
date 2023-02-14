import * as React from "react";
import Collapse from 'components/collapse/index'
import aboutArray from 'assets/data/aboutArray.json'
//import { Link, Outlet } from "react-router-dom";

function About() {
    return (
      //<div>
      <>
        <h1>A propos de 👩‍💻👨‍💻👩‍💻</h1>

        {aboutArray.map((rule, id) => (
          <Collapse
          key={id} 
          aboutTitle={rule.aboutTitle}
          aboutText={rule.aboutText}
          />
        )
        )}
        

      </>
      //</div>

    )
  }
  
  export default About