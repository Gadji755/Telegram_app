import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Videos from './pages/Videos';
import About from './pages/About';

function App() {
  useEffect(() => {
    // Initialize Telegram Web App
    if (window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp;
      tg.ready();
      tg.expand();

      // Optional: Set theme colors based on Telegram theme
      // These are usually handled by CSS variables if we map them correctly, 
      // but we can also force header color.
      tg.setHeaderColor('#0f0f0f'); // Match our background
      tg.setBackgroundColor('#0f0f0f');
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
