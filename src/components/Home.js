import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './styles.css';

function Home() {
 
  useEffect(() => {
    AOS.init({
      duration: 1200, 
      once: true,     
    });
  }, []);

  return (
    <div
      className="home-container"
      style={{
        backgroundImage: `url('/assets/f.jpg')`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',  
        position: 'relative',  
      }}
    >
      <div className="overlay"></div>
      {}
      <h1 data-aos="fade-up">Добро пожаловать в Одессу!</h1>

      {}
      <p data-aos="fade-up" data-aos-delay="300">
        Исследуйте город через разделы меню выше.
      </p>
    </div>
  );
}

export default Home;