import React, { useState, useEffect, useCallback } from "react";
import "./css/DescriptionSlider.css";

const DescriptionSlider = ({ description, totalChapters, mangaSlug }) => {
  const [activeTab, setActiveTab] = useState("description");
  const [showMore, setShowMore] = useState(false);
  const [chapters, setChapters] = useState([]);
  const [isReversed, setIsReversed] = useState(false);
  const [loadedChapters, setLoadedChapters] = useState(0);

  const chaptersPerLoad = 10;

  // Загружаем главы
  const loadChapters = useCallback(
    (reset = false) => {
      if (!totalChapters || !mangaSlug) return; // Проверяем, что есть данные

      let start = reset ? (isReversed ? totalChapters : 1) : loadedChapters + 1;
      let end = Math.min(
        isReversed
          ? Math.max(start - chaptersPerLoad + 1, 1)
          : loadedChapters + chaptersPerLoad,
        totalChapters
      );

      const newChapters = [];
      for (
        let i = start;
        isReversed ? i >= end : i <= end;
        i += isReversed ? -1 : 1
      ) {
        newChapters.push({
          id: i,
          link: `/manga/${mangaSlug}/${i}`, // Генерируем правильную ссылку
        });
      }

      setChapters(reset ? newChapters : (prev) => [...prev, ...newChapters]);
      setLoadedChapters((prev) =>
        reset ? chaptersPerLoad : prev + chaptersPerLoad
      );
    },
    [isReversed, loadedChapters, totalChapters, mangaSlug]
  );

  useEffect(() => {
    if (totalChapters > 0) {
      loadChapters(true);
    }
  }, [totalChapters, isReversed, mangaSlug]);

  return (
    <div className="slider-container">
      <div className="slider-tabs">
        <div
          className={`slider-tab ${
            activeTab === "description" ? "active" : ""
          }`}
          onClick={() => setActiveTab("description")}
        >
          Описание
        </div>
        <div
          className={`slider-tab ${activeTab === "chapters" ? "active" : ""}`}
          onClick={() => setActiveTab("chapters")}
        >
          Главы
        </div>
      </div>

      {activeTab === "description" && (
        <div className="slider-content">
          <h2 className="disc">Описание</h2>
          <div className="discrip">
            <p className="normis-text">
              {showMore ? description : `${description.substring(0, 100)}...`}
            </p>
            {description.length > 100 && (
              <button className="more" onClick={() => setShowMore(!showMore)}>
                {showMore ? "Меньше" : "Больше"}
              </button>
            )}
          </div>
        </div>
      )}

      {activeTab === "chapters" && (
        <div className="slider-content">
          <h1>Список глав</h1>
          <button id="reverse-list" onClick={() => setIsReversed(!isReversed)}>
            {isReversed ? "Показать с начала" : "Показать с конца"}
          </button>
          <div className="chapter-list" id="chapter-list">
            {chapters.length > 0 ? (
              chapters.map((chapter) => (
                <div key={chapter.id} className="chapter">
                  <a href={chapter.link}>Глава {chapter.id}</a>
                </div>
              ))
            ) : (
              <p>Загрузка глав...</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DescriptionSlider;
