import React from "react";
import MangaCard from "../components/MangaCard";
import InfoPanel from "../components/InfoPanel";
import GenreList from "../components/GenreList";
import DescriptionSlider from "../components/DescriptionSlider";

const mangaData = {
  title: "Solo Leveling",
  image: "../image/solo.png",
  readLink: "./chapters/1/index.html",
  bookmarkId: "1",
  chapters: "205",
  status: "Закончен",
  translation: "Закончен",
  ageRating: "18",
  genres: ["Боевик", "Драма", "Игра", "Магия", "Монстры", "Приключения"],
  description:
    "Центральный персонаж манхвы, Сун Джин-Ву, является Охотником E-ранга...",
};

function App() {
  return (
    <div>
      <MangaCard
        title={mangaData.title}
        image={mangaData.image}
        readLink={mangaData.readLink}
        bookmarkId={mangaData.bookmarkId}
      />
      <InfoPanel
        chapters={mangaData.chapters}
        status={mangaData.status}
        translation={mangaData.translation}
        ageRating={mangaData.ageRating}
      />
      <GenreList genres={mangaData.genres} />
      <DescriptionSlider description={mangaData.description} />
    </div>
  );
}

export default App;
