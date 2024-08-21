// Función que solicita personajes de la API, con opción de filtrar por casa

export function getCharacters(house = '') {
    // Construye la URL basada en si se proporciona o no una casa para filtrar
    const url = house 
      ? `https://hp-api.onrender.com/api/characters/house/${house}` // Si se especifica una casa, agrega el filtro a la URL
      : 'https://hp-api.onrender.com/api/characters'; // Si no se especifica casa, obtiene todos los personajes
    
    // Realiza la petición a la URL construida y devuelve los datos en formato JSON
    return fetch(url)
      .then(response => response.json());
}

  