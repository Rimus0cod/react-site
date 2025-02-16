import React, { useState, useEffect } from "react";
import MangaCard from "../components/MangaCard";
import InfoPanel from "../components/InfoPanel";
import GenreList from "../components/GenreList";
import DescriptionSlider from "../components/DescriptionSlider";
import solo from "../image/resoi.jpg";

function App() {
  const [mangaData, setMangaData] = useState(null);

  useEffect(() => {
    // Имитируем загрузку данных из API
    setTimeout(() => {
      setMangaData({
        title: "Tokyo Ghoul:re",
        image: solo,
        readLink: "./chapters/tokyo-ghoul-re/1/index.html",
        bookmarkId: "3",
        chapters: 180,
        status: "Закончен",
        translation: "Закончен",
        ageRating: "18",
        mangaSlug: "tokyo-ghoul:re",
        genres: [
          "Боевик",
          "Приключения",
          "Психология",
          "Сверхъестественное",
          "Сэйнэн",
          "Трагедия",
          "Ужасы",
          "Триллер",
          "Фантастика",
          "Фэнтези",
        ],
        description: ` Прошло два года с момента набега CCG на Антейку. Хотя атмосфера в Токио резко изменилась из-за возросшего влияния CCG, упыри по-прежнему представляют собой проблему, поскольку они начали проявлять осторожность, особенно террористическая организация Aogiri Tree, которая признает растущую угрозу существования CCG. История начинается с Канэки Кэна, скромного студента из
            Создание специальной команды, известной как Quinx Squad, может дать CCG толчок, необходимый для истребления нежелательных жителей Токио. Будучи людьми, перенесшими операцию, чтобы использовать особые способности упырей, они участвуют в операциях по уничтожению опасных существ. Лидер этой группы, Хайсэ Сасаки, - полуупырь, получеловек, прошедший обучение у знаменитого следователя особого класса Кишу Аримы. Однако в этом молодом человеке есть нечто большее, чем кажется на первый взгляд, поскольку неизвестные воспоминания когтями впиваются в его разум, постепенно напоминая ему о том, кем он был раньше.`,
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
        mangaSlug={mangaData.mangaSlug}
      />
    </div>
  );
}

export default App;
