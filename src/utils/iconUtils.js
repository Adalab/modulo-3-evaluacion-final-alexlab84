import ravenclaw from '../../public/ravenclaw.ico';
import hufflepuff from '../../public/hufflepuff.ico';
import slytherin from '../../public/slytherin.ico';
import gryffindor from '../../public/gryffindor.ico'
import casaDesconocida from '../../public/casa_desconocida.ico';




// Función para obtener el ícono de la casa
export const getHouseIcon = (house) => {
    if (house === 'Gryffindor') {
        return gryffindor;
    } else if (house === 'Slytherin') {
        return slytherin;
    } else if (house === 'Ravenclaw') {
        return ravenclaw;
    } else if (house === 'Hufflepuff') {
        return hufflepuff;
    } else {
        return casaDesconocida;  
    }
};