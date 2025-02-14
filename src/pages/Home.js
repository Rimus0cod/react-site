import React from "react";
import MangaCard from "../components/HomeManga"; // Импортируем компонент
import "./css/Home.css"; // Подключаем стили
import Ghoul from "../image/orig.jpg";
import Solo from "../image/solo.png";
import Ghoul2 from "../image/resoi.jpg";

const mangaList = [
  {
    title: "Tokyo Ghoul",
    image: Ghoul,
    type: "Manga",
    link: "/manga/ghoul",
  },
  {
    title: "Tokyo Ghoul:re",
    image: Ghoul2,
    type: "Manga",
    link: "/manga/ghoul-re",
  },
  {
    title: "Solo Leveling",
    image: Solo,
    type: "Manhwa",
    link: "/manga/sololeveling",
  },
];

const Home = () => {
  return (
    <div>
      <section className="list">
        {mangaList.map((manga, index) => (
          <MangaCard key={index} {...manga} />
        ))}
      </section>

      <div>
        <h1 className="title-hot">Горячие Новинки</h1>
      </div>

      <section className="hot">
        {mangaList.map((manga, index) => (
          <MangaCard key={`hot-${index}`} {...manga} />
        ))}
      </section>
    </div>
  );
};

export default Home;
