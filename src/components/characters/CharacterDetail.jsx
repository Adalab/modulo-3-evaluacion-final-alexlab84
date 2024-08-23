import PropTypes from 'prop-types';
import { useParams, Link } from "react-router-dom";
import corazon from '../../../public/corazon.ico';
import espinaDePescado from '../../../public/espina-de-pescado.ico';
import { getHouseIcon } from '../../utils/iconUtils';
import { getHouseImage } from '../../utils/imageUtils';



function CharacterDetail({ findCharacter }) {
    // Obtiene los parámetros de la URL
    const params = useParams();
    // Usa la función findCharacter para buscar el personaje por su id
    const characterShare = findCharacter(params.id);


    // Si no se encuentra el personaje (es undefined), 
    // muestra un mensaje de error, si la api no devolviese datos

    if (characterShare === undefined) {
        return (
            <div>
                <h2>
                    Personaje no encontrado  
                </h2>
            </div>
        )
    }

    const houseImageDetail = getHouseImage(characterShare.house);

    return (
        
        <>
        <h2 className='detailTextTitle'>Detalle del personaje</h2>
        <div className='containerDetail'>
            
        <div className="cardItemDetail">
            <div className='backToBtn'>
                <Link className='backToBtn' to="/"> Volver </Link>
            </div>
            
            <img src={characterShare.image ? characterShare.image : houseImageDetail} alt="" className='cardImg'/>
            
                <p className='detailTextTitle'>
                    {characterShare.name}
                </p>
                
                {/* Mostrar el ícono de estado basado en si el personaje está vivo o no */}
                <p className='detailText'>
                Estatus: 
                {characterShare.alive ? 
                    <>
                        <img src={corazon} alt="Está vivo" className='statusIcon' /> 
                        <span className='detailText'>Vive</span>
                    </> : 
                    <>
                        <img src={espinaDePescado} alt="No está vivo" className='statusIcon' />
                        <span className='detailText'>Ha fallecido</span>
                    </>}
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
                
                {characterShare.house} 
            </p>
                {/* Muestra los nombres alternativos del personaje, si los tiene */}
                <p className='detailText'>Nombres alternativos: {characterShare.alternate_names.join(', ') || 'Ninguno'}</p>
                
                
        </div>
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