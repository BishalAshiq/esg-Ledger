import React from "react";
import AboutArticle from "./AboutArticle";

export default function AboutSubHeader({subHeader, changeColor = true}) {
  console.log(subHeader);
  return (
    <div>
      <h4
        className={`${
          changeColor ? "About__SubHeader" : "about__change_subHeader_color"
        }`}
      >
        {subHeader.title}
      </h4>
      <AboutArticle article={subHeader.article} />
    </div>
  );
}
