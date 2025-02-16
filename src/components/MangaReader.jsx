import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import mangaData from "../data/mangaData";
import "./css/MangaReader.css";

const MangaReader = () => {
  const { mangaId, chapterNumber } = useParams();
  const navigate = useNavigate();
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const manga = mangaData.find((m) => m.id === mangaId);

  useEffect(() => {
    if (!manga) return;

    setLoading(true);
    const chapterPath = `https://storage.googleapis.com/chapters-for-manga/${manga.storagePath}/chapters/${chapterNumber}/images/`;

    const foundImages = [];
    for (let page = 1; page <= 50; page++) {
      const formattedNumber = String(page).padStart(3, "0"); // Форматируем в 001, 002 и т.д.
      foundImages.push(`${chapterPath}${formattedNumber}.jpg`);
    }

    setImages(foundImages);
    setLoading(false);
  }, [mangaId, chapterNumber, manga]);

  if (!manga) {
    return <div>Манга не найдена</div>;
  }

  const prevChapter = chapterNumber > 1 ? Number(chapterNumber) - 1 : null;
  const nextChapter =
    chapterNumber < manga.totalChapters ? Number(chapterNumber) + 1 : null;

  return (
    <div className="manga-reader">
      <h1>
        {manga.title} - Глава {chapterNumber}
      </h1>

      <div className="navigation">
        {prevChapter && (
          <button onClick={() => navigate(`/manga/${mangaId}/${prevChapter}`)}>
            Предыдущая
          </button>
        )}
        {nextChapter && (
          <button onClick={() => navigate(`/manga/${mangaId}/${nextChapter}`)}>
            Следующая
          </button>
        )}
      </div>

      {loading ? (
        <p>Загрузка...</p>
      ) : (
        <div className="manga-pages">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Страница ${index + 1}`}
              loading="lazy"
              onError={(e) => (e.target.style.display = "none")} // Если нет картинки, скрываем
            />
          ))}
        </div>
      )}
      <div className="navigation">
        {prevChapter && (
          <button onClick={() => navigate(`/manga/${mangaId}/${prevChapter}`)}>
            Предыдущая
          </button>
        )}
        {nextChapter && (
          <button onClick={() => navigate(`/manga/${mangaId}/${nextChapter}`)}>
            Следующая
          </button>
        )}
      </div>
    </div>
  );
};

export default MangaReader;
