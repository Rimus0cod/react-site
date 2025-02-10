import React, { useState, useEffect } from "react";
import "./css/DescriptionSlider.css";

const DescriptionSlider = ({ description, totalChapters, fetchChapters }) => {
  const [activeTab, setActiveTab] = useState("description");
  const [showMore, setShowMore] = useState(false);
  const [chapters, setChapters] = useState([]);
  const [isReversed, setIsReversed] = useState(false);

  const chaptersPerLoad = 10; // Сколько загружаем за раз

  useEffect(() => {
    loadChapters(true); // Загружаем главы при монтировании или изменении порядка
  }, [isReversed, totalChapters]);

  const loadChapters = async (reset = false) => {
    if (!fetchChapters) return; // Если нет функции для загрузки, выходим

    const loadedCount = reset ? 0 : chapters.length;
    const start = isReversed ? totalChapters - loadedCount : loadedCount + 1;
    const end = Math.min(
      isReversed
        ? Math.max(start - chaptersPerLoad + 1, 1)
        : loadedCount + chaptersPerLoad,
      totalChapters
    );

    try {
      const newChapters = await fetchChapters(start, end, isReversed);
      setChapters(reset ? newChapters : [...chapters, ...newChapters]);
    } catch (error) {
      console.error("Ошибка загрузки глав:", error);
    }
  };

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
          <p className="normis-text">
            {showMore ? description : `${description.substring(0, 100)}...`}
          </p>
          <button className="more" onClick={() => setShowMore(!showMore)}>
            {showMore ? "Меньше" : "Больше"}
          </button>
        </div>
      )}

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
                loadChapters();
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
