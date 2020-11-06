import React from "react";
import Card from "./Card";

function Cards({ global }) {
  const g = global ? global : {};
  return (
    <div className="container">
      <div className="row">
        {Object.entries(g).map(([keyName, value], index) => (
          <Card key={index} keyName={keyName} value={value} index={index} />
        ))}
      </div>
    </div>
  );
}

export default Cards;
