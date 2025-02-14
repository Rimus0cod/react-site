import React from "react";
import { Link } from "react-router-dom";
import "./css/MangaCard.css"; // Подключаем стили

const MangaCard = ({ title, image, type, link }) => {
  return (
    <article className="card">
      <Link to={link}>
        <img className="card-img" src={image} alt={title} />
      </Link>
      <p className="card-type">{type}</p>
      <h2 className="card-title">{title}</h2>
    </article>
  );
};

export default MangaCard;
