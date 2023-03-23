import '../../src/styles/layout/CharacterDetail.scss';
import {Link} from 'react-router-dom';


function CharacterDetail ({characterFind}) {
    return characterFind ? (
        <>
            <h2 className='phrase'>Caracteristicas del Personaje</h2>
            <Link to="/"> 
                <div className="card-detail">
                <div className='card_img'>
                    <img
                    className="card__img"
                    src= {characterFind.image ? characterFind.image : 'https://2.bp.blogspot.com/-37Wnip-7rfs/WENaCVpciSI/AAAAAAAHdHc/QVVEZ_PGZegDHv_Pm8n_EiTKLVPCc-I6wCLcB/s320/harry-potter-free-printable-invitations-050.jpg'}
                    alt= {characterFind.name}
                    title= {characterFind.mane}
                    ></img>
                </div>
                <section className='card-context'>
                    <h3 className="card_itemList-name">{characterFind.name}</h3>
                    <p className="card_itemList-p">Casa: {characterFind.house}</p>
                    <p className="card_itemList-p">Especie: {characterFind.specie}</p>
                    <p className="card_itemList-p">Genero: {characterFind.gender}</p>                
                    <p className="card_itemList-p status">Estatus: {characterFind.status ? <i className="fa-solid fa-heart"></i> : 
                    <i className="fa-solid fa-skull"></i>}
                    </p>
                    
                </section>
                </div>
            </Link>
        </>
    ) : (
        <p>No se ha encontardo este personaje</p>
    );
};

export default CharacterDetail; 