import '../../styles/layout/CardCharacter.scss'
import {Link} from 'react-router-dom';

function CharacterCard ({eachCharacter}) {
    return (
        <li className="itemList">
            <Link to={`/character/${eachCharacter.id}`}>
                <img className='img' src={eachCharacter.image ? eachCharacter.image : 'https://2.bp.blogspot.com/-37Wnip-7rfs/WENaCVpciSI/AAAAAAAHdHc/QVVEZ_PGZegDHv_Pm8n_EiTKLVPCc-I6wCLcB/s320/harry-potter-free-printable-invitations-050.jpg'}
                alt= {eachCharacter.name}
                title= {eachCharacter.mane} />
                <h2 className="itemList-name">{eachCharacter.name}</h2>
                <p className="itemList-p">Genero: {eachCharacter.gender}</p>
                <p className="itemList-p">Casa: {eachCharacter.house}</p>
                
            </Link>
        </li>
    );
}
export default CharacterCard;