function CharacterCard ({eachCharacter}) {
    return (
        <li className="itemList">
                <img src={eachCharacter.image} alt={eachCharacter.name} />
                <h2 className="itemList-name">{eachCharacter.name}</h2>
                <p className="itemList-gender">Genero: {eachCharacter.gender}</p>
                <p className="itemList-house">Casa: {eachCharacter.house}</p>
                <p className="itemList-specie">Especie: {eachCharacter.specie}</p>
                <p className="itemList-status">Estatus: {eachCharacter.status}</p>
            </li>
    );
}
export default CharacterCard;