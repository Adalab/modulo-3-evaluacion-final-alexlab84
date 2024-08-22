import PropTypes from 'prop-types';
import { useParams, Link } from "react-router-dom";
import harryRelleno from '../../../public/harryRelleno.png';
import corazon from '../../../public/corazon.ico';
import espinaDePescado from '../../../public/espina-de-pescado.ico';
import ravenclaw from '../../../public/ravenclaw.ico';
import hufflepuff from '../../../public/hufflepuff.ico';
import slytherin from '../../../public/slytherin.ico';
import gryffindor from '../../../public/gryffindor.ico'
import casaDesconocida from '../../../public/casa_desconocida.ico';

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

    // Función auxiliar para obtener el ícono de la casa
    const getHouseIcon = (house) => {
        if (house === 'Gryffindor') {
            return gryffindor;
        } else if (house === 'Slytherin') {
            return slytherin;
        } else if (house === 'Ravenclaw') {
            return ravenclaw;
        } else if (house === 'Hufflepuff') {
            return hufflepuff;
        } else {
            return casaDesconocida;  // Casas desconocidas
        }
    };


    // Si el personaje se encuentra, muestra sus detalles
    return (
        
        <>
        

        <div className="cardItemDetail">
            <div className='backToBtn'>
                <Link className='backToBtn' to="/"> Volver </Link>
            </div>
            
            <img src={characterShare.image ? characterShare.image : harryRelleno} alt="" className='cardImg'/>
            
                <p className='detailTextTitle'>
                    {characterShare.name}
                </p>
                
                {/* Mostrar el ícono de estado basado en si el personaje está vivo o no */}
                <p className='detailText'>
                Estatus: 
                {characterShare.alive ? 
                    <img src={corazon} alt="Está vivo" className='statusIcon' /> : 
                    <img src={espinaDePescado} alt="No está vivo" className='statusIcon' />}
            </p>
                <p className='detailText'>Especie: {characterShare.species}</p>
                <p className='detailText'>Genero: {characterShare.gender}</p>
                {/* Mostrar el ícono de la casa junto con el nombre */}

                <p className='detailText'>
                Casa: 
                
                {getHouseIcon(characterShare.house) && (
                    <img 
                        src={getHouseIcon(characterShare.house)} 
                        alt={`Escudo de ${characterShare.house}`} 
                        className='houseIcon' 
                    />
                )}
                
             {/*    {characterShare.house} */}
            </p>
                {/* Muestra los nombres alternativos del personaje, si los tiene */}
                <p className='detailText'>Nombres alternativos: {characterShare.alternate_names.join(', ') || 'Ninguno'}</p>
                
                
        </div>
        
        </>
    )
}


CharacterDetail.propTypes = {
    characters: PropTypes.array,
    characterNotFound: PropTypes.string,
    findCharacter: PropTypes.func.isRequired
};

export default CharacterDetail;