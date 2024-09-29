import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import CityInfo from "./components/CityInfo";
import FamousLandmark from "./components/FamousLandmark";
import OtherLandmarks from "./components/OtherLandmarks";
import CityPhotos from "./components/CityPhotos";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Главная</Link>
            </li>
            <li>
              <Link to="/city-info">Информация о городе</Link>
            </li>
            <li>
              <Link to="/famous-landmark">Самая известная достопримечательность</Link>
            </li>
            <li>
              <Link to="/other-landmarks">Другие достопримечательности</Link>
            </li>
            <li>
              <Link to="/city-photos">Фотографии города</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/city-info" element={<CityInfo />} />
          <Route path="/famous-landmark" element={<FamousLandmark />} />
          <Route path="/other-landmarks" element={<OtherLandmarks />} />
          <Route path="/city-photos" element={<CityPhotos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
