import PropTypes from 'prop-types';
import { useParams, Link } from "react-router-dom";

function CharacterDetail({findCharacter}) {

    const params = useParams();
    
    const characterShare = findCharacter(params.id);

    
    
    
    if (characterShare === undefined) {
        return (
            <div>
                <h2>
                    Personaje no encontrado
                </h2>
            </div>
        )
    }

    return (
        <div className="col2">
            <img src={characterShare.image} alt="" />
            <div>
                
                <p>
                {characterShare.name}
                </p>
                <p>Estatus:{characterShare.alive ? 'Está vivo' : 'No está vivo'}</p>  
                <p>Especie:{characterShare.species}</p>
                <p>Genero:{characterShare.gender}</p>
                <p>Casa:{characterShare.house}</p>
                <p>Nombres alternativos: {characterShare.alternate_names.join(', ') || 'Ninguno'}</p>
                <Link to="/">Volver</Link>
            </div>
        </div>
    )
}


CharacterDetail.propTypes = {
    characters: PropTypes.array,
    characterNotFound: PropTypes.string,
    findCharacter: PropTypes.func.isRequired
};

export default CharacterDetail;