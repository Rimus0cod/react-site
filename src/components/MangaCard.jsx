import React from "react";
import "./css/MangaCard.css";

const MangaCard = ({ title, image, readLink, bookmarkId }) => {
  return (
    <section className="name">
      <article className="card">
        <img className="card-img" src={image} alt={title} />
        <a className="read" href={readLink}>
          <span>Читать</span>
        </a>
        <button id="addBookmark" data-work-id={bookmarkId}>
          Добавить в закладки
        </button>
      </article>
    </section>
  );
};

export default MangaCard;
