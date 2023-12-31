import React from "react";
import AboutHeader from "./AboutHeader";
import AboutSubHeader from "./AboutSubHeader";
import AboutArticle from "./AboutArticle";
import {aboutData} from "../data";

export default function AboutContent() {
  return (
    <div className="about__content__wrapper">
      {aboutData.map((each, index) => (
        <>
          <AboutHeader key={index} header={each.title} />
          {each.sub_title.length > 0 &&
            each.sub_title.map((each, index) => (
              <AboutSubHeader
                changeColor={each.color}
                key={index}
                subHeader={each}
              />
            ))}
          <AboutArticle article={each.main_article} />
        </>
      ))}
    </div>
  );
}
