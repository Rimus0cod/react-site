import React from "react";
import "./css/InfoPanel.css";

const InfoPanel = ({ chapters, status, translation, ageRating }) => {
  return (
    <div className="info-panel">
      <div className="info-block">
        <h2 className="value">{chapters}</h2>
        <p>Глав</p>
      </div>
      <div className="info-block">
        <h2 className="value">{status}</h2>
        <p>Выпуск</p>
      </div>
      <div className="info-block">
        <h2 className="value">{translation}</h2>
        <p>Перевод</p>
      </div>
      <div className="info-block">
        <h2 className="value">{ageRating}+</h2>
        <p>PG</p>
      </div>
    </div>
  );
};

export default InfoPanel;
