import CharacterCard from './CharacterCard';

function CharacterList ({characterList , renderCharacter}) {
 const dataHtml = characterList.map((eachCharacter) => {
    return <CharacterCard eachCharacter={eachCharacter} key={eachCharacter.id}/>;
 });
    return(
        <ul>
            {dataHtml}{renderCharacter}
        </ul>
    ) 
}
export default CharacterList;