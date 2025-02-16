import React, { useState, useEffect } from "react";
import MangaCard from "../components/MangaCard";
import InfoPanel from "../components/InfoPanel";
import GenreList from "../components/GenreList";
import DescriptionSlider from "../components/DescriptionSlider";
import solo from "../image/orig.jpg";

function App() {
  const [mangaData, setMangaData] = useState(null);

  useEffect(() => {
    // Имитируем загрузку данных из API
    setTimeout(() => {
      setMangaData({
        title: "Tokyo Ghoul",
        image: solo,
        readLink: "./tokyo-ghoul/1",
        bookmarkId: "2",
        chapters: 145,
        status: "Закончен",
        translation: "Закончен",
        ageRating: "18",
        mangaSlug: "tokyo-ghoul",
        genres: [
          "Боевик",
          "Драма",
          "Приключения",
          "Сэёнэн",
          "Триллер",
          "Фантастика",
          "Фэнтези",
        ],
        description: `
        В мире, где смешались грани человечности и жуткой тайны, существует
          древний вид - гули. Они не ищут просто пищу в людях, а питаются их
          плотью и душами. Однако большинство гулей стремятся сохранить искру
          человечности в себе, даже если это означает жить в постоянной
          опасности. История начинается с Канэки Кэна, скромного студента из
            Токио, который влюблен в мирец интеллекта и красоты Ридзэ. Он обитает
            в обыденной реальности, работая официантом в кафе "Место встречи".
            Однако его жизнь кардинально меняется, когда он становится жертвой
            нападения гула и выживает только благодаря пересадке органов гула.
            Канэки теперь стал полу-гулем, живущим между двумя мирами. Он вынужден
            скрывать свою новую природу и искать пути адаптации к своей новой
            реальности. В его сердце теперь бьется и пульсирует две жизни -
            человеческая и гульская. Преследуемый кошмарами и конфликтом внутри
            себя, Канэки попадает в водоворот интриг, борьбы за власть и сложных
            отношений между гулями и людьми. Он начинает осознавать, что
            разделение на "человека" и "гуля" может быть более тонким, чем он
            думал, и понимает, что истинные монстры не всегда те, кто питается
            человеческой плотью. С угасающей надеждой в глазах, Канэки вынужден
            сделать выбор между двумя мирами и принять свою новую сущность. Манга
            "Токийский гуль" - это история о самоидентификации, преодолении
            страхов и борьбе за выживание в мире, где ты не человек и не гуль, а
            что-то большее. Если вы хотите погрузиться в этот мрачный и
            захватывающий мир, вы можете читать мангу "Токийский гуль" бесплатно
            онлайн или скачать ее. Подготовьтесь к захватывающему путешествию
            через тени и собственные страхи вместе с Канэки Кэном.
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
        mangaSlug={mangaData.mangaSlug}
      />
    </div>
  );
}

export default App;
