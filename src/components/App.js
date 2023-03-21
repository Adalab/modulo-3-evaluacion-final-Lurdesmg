/* SECCIÓN DE IMPORT */
import { useState , useEffect } from 'react';
import 'react-router-dom';
//import { Route, Routes , matchPath, useLocation } from 'react-router-dom';

import getApi from '../services/api';
import CharacterList from './CharacterList';
import harry from '../images/harry_potter-logo.jpg'
import '../styles/App.scss';

/* SECCIÓN DEL COMPONENTE */
function App() {
  const [characterList , setCharacterList] = useState ([]);
  const [filterCharacter , setFilterCharacter] = useState ('');
  //const [house , setHouse] = useState ();

  useEffect (() => {
    getApi().then((cleanData) => {
      setCharacterList(cleanData);
    });
  }, []);

  const handleCharacter = (ev) => {
    setFilterCharacter(ev.target.value);
  };

  // const renderCharacter = () => {
  //   return filterCharacter
  //   .filter((eachCharacter) => eachCharacter.characterList.toLowerCase().includes(filterCharacter.toLowerCase()))
  // };

  return <div className="App">
    <header>
        <h1>Harry Potter</h1>
        <img src={harry} alt="" />
        <form>
          <fieldset>
            <label htmlFor="name"> Busca por personaje: 
                <input onInput={handleCharacter} value={filterCharacter} type="text" id="name" placeholder="ej. Luna" />
            </label>
            <label htmlFor="character"> Seleccion la Casa: 
                <select name="house" id="house">
                    <option value="Griffindor">Griffindor</option>
                    <option value="Hufflepuff">Hufflepuff</option>
                    <option value="Ravenclaw">Ravenclaw</option>
                    <option value="Slytherin">Slytherin</option>
                </select>
            </label>
          </fieldset>
        </form>
    </header>
    <main>
        <CharacterList characterList={characterList}
        // } renderCharacter={renderCharacter()}/>
        />
    </main>
    <footer>
        <img src="" alt="" />
    </footer>
    </div>;
}

/* PROP-TYPES */

/* EXPORT DEL COMPONENTE */
export default App;
