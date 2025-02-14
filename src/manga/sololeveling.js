import React, { useState, useEffect } from "react";
import MangaCard from "../components/MangaCard";
import InfoPanel from "../components/InfoPanel";
import GenreList from "../components/GenreList";
import DescriptionSlider from "../components/DescriptionSlider";
import solo from "../image/solo.png";

function App() {
  const [mangaData, setMangaData] = useState(null);

  useEffect(() => {
    // Имитируем загрузку данных из API
    setTimeout(() => {
      setMangaData({
        title: "Solo Leveling",
        image: solo,
        readLink: "./chapters/sololeveling/1/index.html",
        bookmarkId: "1",
        chapters: 205,
        status: "Закончен",
        translation: "Закончен",
        ageRating: "18",
        genres: ["Боевик", "Драма", "Игра", "Магия", "Монстры", "Приключения"],
        description: `
        Центральный персонаж манхвы, Сун Джин-Ву, является Охотником E-ранга, что делает его одним из самых слабых охотников. 
        Его жизнь наполнена риском, так как он вынужден бороться с монстрами в низкоуровневых подземельях, чтобы зарабатывать на жизнь. 
        Но всё меняется, когда Джин-Ву случайно находит секретное подземелье D-ранга. 
        Это открытие и его последствия приводят к тому, что он получает уникальную способность, известную как "Система", 
        которая позволяет ему видеть скрытые секреты и особенности поднятия своего уровня.
        
        Этот поворот событий начинает его трансформацию из слабейшего охотника в сильнейшего охотника S-ранга. 
        Сюжет манхвы завораживает своей глубиной и динамикой, предлагая читателям погрузиться в мир, 
        где пределы человеческих возможностей постоянно расширяются, 
        а каждое новое испытание превращается в шанс для роста и самосовершенствования.

        Выпущенная в 2018 году, манхва "Поднятие уровня в одиночку" постоянно расширяет свою аудиторию 
        и завоевывает сердца любителей жанра фэнтези и приключений. 
        Сюжет, персонажи и увлекательный мир, созданный авторами, делают эту манхву обязательной к прочтению 
        для всех, кто ищет увлекательное чтение и новые эмоции.
    `,
      });
    }, 1000); // Задержка 1 сек для имитации загрузки
  }, []);

  if (!mangaData) {
    return <p>Загрузка...</p>;
  }

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
      {/* Теперь totalChapters будет загружаться динамически */}
      <DescriptionSlider
        description={mangaData.description}
        totalChapters={mangaData.chapters}
      />
    </div>
  );
}

export default App;
