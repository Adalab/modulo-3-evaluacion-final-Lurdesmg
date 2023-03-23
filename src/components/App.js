import { useState , useEffect } from 'react';
import 'react-router-dom';
import { Route, Routes , matchPath, useLocation } from 'react-router-dom';

import getApi from '../services/api';
import CharacterList from './main/CharacterList';
import Header from './Header';
import Filters from './main/Filters';
import Footer from './Footer';
import CharacterDetail from './CharacterDetail';
import '../styles/App.scss';


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

  const { pathname } = useLocation();
  const routeData = matchPath('/character/:id', pathname);
  const characterId = routeData === null ? null :routeData.params.id;
  const characterFind = characterList.find(
    (oneCharacter) => oneCharacter.id === characterId
  );

  return <div className="App">
    <Header/>
    <main className='main'>
      <Routes>
        <Route
        path='/' element = {
          <>
            <Filters
            filterCharacter = {filterCharacter}
            handleCharacter = {handleCharacter} 
            handleHouse = {handleHouse}
            filterHouse = {filterHouse} 
            />

            <CharacterList characterList={renderCharacter()}/>
          </>
        }
        ></Route>
        <Route
          path='/character/:id'
          element= { < CharacterDetail
          characterFind = {characterFind}/>}
        />
      </Routes>
    
    </main>
    <Footer/>
    </div>;
}

export default App;
