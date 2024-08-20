
export function getCharacters() {
   return fetch('https://hp-api.onrender.com/api/characters')
    .then(response => response.json())
    
}