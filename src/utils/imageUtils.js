import fotoRavenclaw from '../../public/ravenclawFoto.png';
import fotoHufflepuff from '../../public/hufflepuffFoto.png';
import fotoGryffindor from '../../public/gryffindorFoto.png';
import fotoSlytherin from '../../public/slytherinFoto.png';
import fotoCasaDesconocida from '../../public/casa_desconocidaFoto.png';



// Función para obtener la imagen de la casa si no hay imagen del personaje
export const getHouseImage = (house) => {
    
    if (house.toLowerCase() === 'gryffindor') {
        return fotoGryffindor;
    } else if (house.toLowerCase() === 'slytherin') {
        return fotoSlytherin;
    } else if (house.toLowerCase() === 'ravenclaw') {
        return fotoRavenclaw;
    } else if (house.toLowerCase() === 'hufflepuff') {
        return fotoHufflepuff;
    } else {
        return fotoCasaDesconocida;  
    }
};