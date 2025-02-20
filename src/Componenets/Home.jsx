import React, { useState } from 'react';
import Homecent from './Homecotent/Homecent';
import Navbar from './Navbar/Navbar';

function Home() {
  const [language, setLanguage] = useState('en');
  const [mainMenuSelection, setMainMenuSelection] = useState('bhagavad-gita');

  return (
    <div>
      <Navbar 
        language={language} 
        setLanguage={setLanguage} 
        mainMenuSelection={mainMenuSelection} 
        setMainMenuSelection={setMainMenuSelection} 
      />
      <Homecent 
        language={language} 
        mainMenuSelection={mainMenuSelection} 
      />
    </div>
  );
}

export default Home;
