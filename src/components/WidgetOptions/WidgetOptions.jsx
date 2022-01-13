import React from "react";

import "./WidgetOptions.css";

const WidgetOptions = (props) => {
  const options = [
    {
      text: "Front End",
      handler: props.actionProvider.handleFrontEnd,
      id: 1,
    },
    {
      text: "Back End",
      handler: props.actionProvider.handleBackEnd,
      id: 2,
    },
    { text: "Database", handler: props.actionProvider.handleDatabase, id: 3 },
    {
      text: "Deployment",
      handler: props.actionProvider.handleDeployment,
      id: 4,
    },
    {
      text: "Continuos Integration",
      handler: props.actionProvider.handleContinuosIntegration,
      id: 5,
    },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="widget-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="widget-options-container">{optionsMarkup}</div>;
};

export default WidgetOptions;
