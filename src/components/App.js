/* SECCIÓN DE IMPORT */
import { useState , useEffect } from 'react';
import 'react-router-dom';
//import { Route, Routes , matchPath, useLocation } from 'react-router-dom';

import getApi from '../services/api';
import CharacterList from './CharacterList';
import Filters from './Filters';
import harry from '../images/harry_potter-logo.jpg'
import '../styles/App.scss';

/* SECCIÓN DEL COMPONENTE */
function App() {
  const [characterList , setCharacterList] = useState ([]);
  const [filterCharacter , setFilterCharacter] = useState ('');
  const [filterHouse , setFilterHouse] = useState ('Gryffindor');

  useEffect (() => {
    getApi(filterHouse).then((cleanData) => {
      setCharacterList(cleanData);
    });
  }, [filterHouse]);

  const handleCharacter = (value) => {
    setFilterCharacter(value);
  };

   const handleHouse = (value) => {
    setFilterHouse(value);
  }

  const renderCharacter = () => {
    return characterList
    .filter((oneCharacter) => {
       return oneCharacter.name.toLowerCase().includes(filterCharacter.toLowerCase());
      })
  
       };

  return <div className="App">
    <header>
        <h1>Harry Potter</h1>
        <img src={harry} alt="" />

        <Filters
          filterCharacter = {filterCharacter}
          handleCharacter = {handleCharacter} 
          handleHouse = {handleHouse}
          filterHouse = {filterHouse} 
          />
        
    </header>
    <main>
        <CharacterList characterList={renderCharacter()}  
        />
    </main>
    <footer>
        <img src="" alt="" />
    </footer>
    </div>;
}

export default App;
