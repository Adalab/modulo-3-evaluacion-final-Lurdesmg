import '../../styles/layout/CardCharacter.scss'

function CharacterCard ({eachCharacter}) {
    return (
        <li className="itemList">
                <img className='img' src={eachCharacter.image ? eachCharacter.image : 'https://2.bp.blogspot.com/-37Wnip-7rfs/WENaCVpciSI/AAAAAAAHdHc/QVVEZ_PGZegDHv_Pm8n_EiTKLVPCc-I6wCLcB/s320/harry-potter-free-printable-invitations-050.jpg'}
                alt= {eachCharacter.name}
                title= {eachCharacter.mane} />
                <h2 className="itemList-name">{eachCharacter.name}</h2>
                <p className="itemList-p">Genero: {eachCharacter.gender}</p>
                <p className="itemList-p">Casa: {eachCharacter.house}</p>
                <p className="itemList-p">Especie: {eachCharacter.specie}</p>
                <p className="card_itemList-p status">Estatus: {eachCharacter.status ? <i className="fa-solid fa-heart"></i> : 
                 <i className="fa-solid fa-skull"></i>}
                 </p>
            </li>
    );
}
export default CharacterCard;