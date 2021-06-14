import React, { useState } from "react";

import { covidInfo } from "../../services/mock-data/covid-data/covid";
import { FaqSection } from "./FaqSection";

const CovidInfo = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);
  return (
    <div className="covid">
      <h2 className="main-heading">
        કોવિડ-19 રસી વિશે ના અગત્યના પ્રશ્નો અને તેના જવાબો
      </h2>
      <hr />
      {covidInfo.data.map((covidData, index) => {
        return (
          <FaqSection
            key={"faqSection" + index}
            covidData={covidData}
            index={index}
            expandedIndex={expandedIndex}
            setExpandedIndex={setExpandedIndex}
          />
        );
      })}
    </div>
  );
};

export default CovidInfo;
