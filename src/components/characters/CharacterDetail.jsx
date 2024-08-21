import PropTypes from 'prop-types';
import { useParams, Link } from "react-router-dom";

function CharacterDetail({ findCharacter }) {
    // Obtiene los parámetros de la URL
    const params = useParams();
    // Usa la función findCharacter para buscar el personaje por su id
    const characterShare = findCharacter(params.id);


    // Si no se encuentra el personaje (es undefined), muestra un mensaje de error

    if (characterShare === undefined) {
        return (
            <div>
                <h2>
                    Personaje no encontrado
                </h2>
            </div>
        )
    }

    // Si el personaje se encuentra, muestra sus detalles
    return (
        <div className="col2">
            <img src={characterShare.image} alt="" />
            <div>

                <p>
                    {characterShare.name}
                </p>
                {/* Muestra el estado del personaje (si está vivo o no) */}
                <p>Estatus:{characterShare.alive ? 'Está vivo' : 'No está vivo'}</p>
                <p>Especie:{characterShare.species}</p>
                <p>Genero:{characterShare.gender}</p>
                <p>Casa:{characterShare.house}</p>
                {/* Muestra los nombres alternativos del personaje, si los tiene */}
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