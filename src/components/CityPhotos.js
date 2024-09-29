import React, { useState, useEffect } from "react";
import './Slider.css';

const photos = [
  "/assets/4.jpg",
  "/assets/04.jpg",
  "/assets/88223.jpg",
  "/assets/98144759.jpg",
  "/assets/f.jpg",
  "/assets/Lanzheron-beach.jpg",
  "/assets/Monument-to-Duke-de-Richelieu.jpg",
  "/assets/museum.jpg",
  "/assets/opera.jpg",
  "/assets/operny.jpg",
  "/assets/potem.jpg",
  "/assets/rynok-privoz-odessa.jpg",
  "/assets/vorontsovskiy_dvorets.jpg"
];

function CityPhotos() {
  const [currentIndex, setCurrentIndex] = useState(0);

 
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    );
  };

  
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider-container">
      <h1>Фотографии Одессы</h1>
      <p>Насладитесь видами Одессы через эти фотографии:</p>

      <div className="slider">
        <img src={photos[currentIndex]} alt={`Одесса ${currentIndex + 1}`} />
      </div>

      <button className="nav-button prev" onClick={handlePrev}>
        &lt;
      </button>
      <button className="nav-button next" onClick={handleNext}>
        &gt;
      </button>
    </div>
  );
}

export default CityPhotos;