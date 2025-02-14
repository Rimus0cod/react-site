import React, { useState, useEffect, useCallback } from "react";
import "./css/DescriptionSlider.css";

const DescriptionSlider = ({ description, totalChapters }) => {
  const [activeTab, setActiveTab] = useState("description"); // Табы
  const [showMore, setShowMore] = useState(false); // Описание (скрыто/показано)
  const [chapters, setChapters] = useState([]); // Список глав
  const [isReversed, setIsReversed] = useState(false); // Реверс списка
  const [loadedChapters, setLoadedChapters] = useState(0); // Кол-во загруженных глав

  const chaptersPerLoad = 10; // Сколько глав загружаем за раз

  // Загрузка глав
  const loadChapters = useCallback(
    (reset = false) => {
      if (!totalChapters) return; // Ждём, пока не появится totalChapters

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
          link: `./chapters/${i}/index.html`,
        });
      }

      setChapters(reset ? newChapters : (prev) => [...prev, ...newChapters]);
      setLoadedChapters((prev) =>
        reset ? chaptersPerLoad : prev + chaptersPerLoad
      );
    },
    [isReversed, loadedChapters, totalChapters]
  );

  // Загружаем главы, когда totalChapters изменяется
  useEffect(() => {
    if (totalChapters > 0) {
      loadChapters(true);
    }
  }, [totalChapters, isReversed]);

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

      {/* Главы */}
      {activeTab === "chapters" && (
        <div className="slider-content">
          <h1>Список глав</h1>
          <button id="reverse-list" onClick={() => setIsReversed(!isReversed)}>
            {isReversed ? "Показать с начала" : "Показать с конца"}
          </button>
          <div
            className="chapter-list"
            id="chapter-list"
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
