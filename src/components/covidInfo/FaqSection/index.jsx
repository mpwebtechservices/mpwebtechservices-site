import React from "react";
import { FcCollapse, FcExpand } from "react-icons/fc";

export const FaqSection = ({
  covidData,
  index,
  expandedIndex,
  setExpandedIndex,
}) => {
  const isExpanded = expandedIndex === index ? true : false;
  return (
    <div key={covidData.heading + index}>
      <h3
        onClick={() => {
          if (expandedIndex !== index) {
            setExpandedIndex(index);
          } else {
            setExpandedIndex(-1);
          }
        }}
        className={"heading"}
      >
        {covidData.heading}
        {isExpanded ? <FcCollapse /> : <FcExpand />}
      </h3>
      {expandedIndex === index && (
        <div className="content-body">
          {covidData.faqs.map((faq, index) => {
            return (
              <div key={"faq" + index}>
                <div className="faq-question">{`${index + 1}. ${
                  faq.question
                }`}</div>
                <div className="faq-answer">{faq.answer}</div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
