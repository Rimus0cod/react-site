import React from "react";
import "./css/GenreList.css";

const GenreList = ({ genres }) => {
  return (
    <div className="genre-list">
      {genres.map((genre, index) => (
        <div key={index} className="genre">
          {genre}
        </div>
      ))}
    </div>
  );
};

export default GenreList;
