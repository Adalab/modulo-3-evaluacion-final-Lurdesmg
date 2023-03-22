import CharacterCard from './CharacterCard';

function CharacterList ({characterList}) {
    
 const dataHtml = characterList.map((eachCharacter) => {
    return < CharacterCard eachCharacter={eachCharacter} 
    key={eachCharacter.id}
    />;
 });
    return(
        <ul>
            {dataHtml}
        </ul>
    ) 
}
export default CharacterList;