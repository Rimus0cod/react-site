import React, { useState, useEffect, useCallback } from "react";
import "./css/DescriptionSlider.css";

const DescriptionSlider = ({ description, totalChapters }) => {
  const [activeTab, setActiveTab] = useState("description"); // Табы
  const [showMore, setShowMore] = useState(false); // Описание (скрыто/показано)
  const [chapters, setChapters] = useState([]); // Загруженные главы
  const [isReversed, setIsReversed] = useState(false); // Направление загрузки
  const [loadedChapters, setLoadedChapters] = useState(0); // Кол-во загруженных глав

  const chaptersPerLoad = 10; // Количество глав за раз

  // Функция загрузки глав
  const loadChapters = useCallback(
    (reset = false) => {
      let start, end;
      if (reset) {
        setChapters([]); // Очистка перед полной перезагрузкой
        setLoadedChapters(0);
        start = isReversed ? totalChapters : 1;
      } else {
        start = isReversed
          ? totalChapters - loadedChapters
          : loadedChapters + 1;
      }

      end = Math.min(
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
          link: `./chapters/${i}/index.html`, // Универсальный путь
        });
      }

      setChapters((prev) => (reset ? newChapters : [...prev, ...newChapters]));
      setLoadedChapters((prev) => prev + chaptersPerLoad);
    },
    [isReversed, loadedChapters, totalChapters]
  );

  // Загрузка при первом рендере
  useEffect(() => {
    loadChapters(true);
  }, [isReversed, totalChapters, loadChapters]);

  return (
    <div className="slider-container">
      {/* Табы */}
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

      {/* Описание */}
      {activeTab === "description" && (
        <div className="slider-content">
          <h2 className="disc">Описание</h2>
          <p className="normis-text">
            {showMore ? description : `${description.substring(0, 100)}...`}
          </p>
          {description.length > 100 && (
            <button className="more" onClick={() => setShowMore(!showMore)}>
              {showMore ? "Меньше" : "Больше"}
            </button>
          )}
        </div>
      )}

      {/* Главы */}
      {activeTab === "chapters" && (
        <div className="slider-content">
          <h1>Список глав</h1>
          <button onClick={() => setIsReversed(!isReversed)}>
            {isReversed ? "Показать с начала" : "Показать с конца"}
          </button>
          <div
            className="chapter-list"
            onScroll={(e) => {
              if (
                e.target.scrollHeight - e.target.scrollTop <=
                e.target.clientHeight + 10
              ) {
                if (loadedChapters < totalChapters) {
                  loadChapters();
                }
              }
            }}
          >
            {chapters.map((chapter) => (
              <div key={chapter.id} className="chapter">
                <a href={chapter.link}>Глава {chapter.id}</a>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DescriptionSlider;
