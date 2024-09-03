import React, { useState } from 'react';
import Menu from './components/menu/Menu';
import Settings from './components/settings/Settings';
import './App.css';

const App = () => {
  const [language, setLanguage] = useState('English');

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <div>
      <Settings onLanguageChange={handleLanguageChange} />
      <Menu language={language} />
    </div>
  );
};

export default App;
