function CharacterCard ({eachCharacter}) {
    return (
        <li className="itemList">
                <img src={eachCharacter.image} alt={eachCharacter.name} />
                <h2 className="itemList-name">{eachCharacter.name}</h2>
                <p className="itemList-gender">{eachCharacter.gender}</p>
                <p className="itemList-house">{eachCharacter.house}</p>
                <p className="itemList-specie">{eachCharacter.specie}</p>
                <p className="itemList-status">{eachCharacter.status}</p>
            </li>
    );
}
export default CharacterCard;