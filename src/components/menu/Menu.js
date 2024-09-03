import React from 'react';
import './Menu.css'; // Import the CSS for styling

const languageMap = {
  English: { Home: 'Home', Movies: 'Movies', TVShows: 'TV Shows', Sports: 'Sports', Live: 'Live' },
  French: { Home: 'Accueil', Movies: 'Films', TVShows: 'Séries TV', Sports: 'Sports', Live: 'En direct' },
  German: { Home: 'Zuhause', Movies: 'Filme', TVShows: 'TV-Shows', Sports: 'Sport', Live: 'Live' },
  Russian: { Home: 'Главная', Movies: 'Фильмы', TVShows: 'Телешоу', Sports: 'Спорт', Live: 'Прямой эфир' },
  Spanish: { Home: 'Inicio', Movies: 'Películas', TVShows: 'Programas de TV', Sports: 'Deportes', Live: 'En vivo' },
  Chinese: { Home: '首页', Movies: '电影', TVShows: '电视剧', Sports: '体育', Live: '直播' }
};

const Menu = ({ language }) => {
  const menuItems = languageMap[language];

  return (
    <div className="menu-container">
      {Object.keys(menuItems).map((key) => (
        <div key={key} className="menu-item">
          <div className="menu-item-overlay"></div>
          <img src={`/images/${key.toLowerCase()}.jpg`} alt={menuItems[key]} className="menu-item-image" />
          <div className="menu-item-text">{menuItems[key]}</div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
