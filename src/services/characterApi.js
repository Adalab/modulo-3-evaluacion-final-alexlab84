// Funcion que pide a la api personajes o personajes filtrados por casa 

export function getCharacters(house = '') {
    const url = house 
      ? `https://hp-api.onrender.com/api/characters/house/${house}` 
      : 'https://hp-api.onrender.com/api/characters';
    
    return fetch(url)
      .then(response => response.json())
      .catch((error) => console.error('Error fetching characters:', error));
  }
  