import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import mangaData from "../data/mangaData";
import "./css/MangaReader.css";

const MangaReader = () => {
  const { mangaId, chapterNumber } = useParams();
  const navigate = useNavigate();
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasScrolledToBottom, setHasScrolledToBottom] = useState(false);

  const manga = mangaData.find((m) => m.id === mangaId);

  useEffect(() => {
    setLoading(true);
    const chapterPath = `https://storage.googleapis.com/chapters-for-manga/${manga.storagePath}/${chapterNumber}/images/`;

    const foundImages = [];
    for (let page = 1; page <= 50; page++) {
      const formattedNumber = String(page).padStart(3, "0");
      foundImages.push(`${chapterPath}${formattedNumber}.jpg`);
    }

    setImages(foundImages);
    setLoading(false);
    setHasScrolledToBottom(false); // Сбрасываем состояние прокрутки
  }, [mangaId, chapterNumber, manga]);

  const prevChapter = chapterNumber > 1 ? Number(chapterNumber) - 1 : null;
  const nextChapter =
    chapterNumber < manga.totalChapters ? Number(chapterNumber) + 1 : null;

  useEffect(() => {
    window.scrollTo(0, 0); // Сброс прокрутки при смене главы
  }, [chapterNumber]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        !hasScrolledToBottom &&
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 10
      ) {
        setHasScrolledToBottom(true);
        if (nextChapter) {
          setTimeout(() => navigate(`/manga/${mangaId}/${nextChapter}`), 500); // Задержка перед переходом
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [nextChapter, mangaId, navigate, hasScrolledToBottom]);

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
              onError={(e) => (e.target.style.display = "none")}
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
