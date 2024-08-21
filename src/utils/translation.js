// Función para traducir el valor de la especie de un personaje
export const translateSpecies = (species) => {
  // Si la especie es 'human', devuelve 'Humano'
  if (species === "human") {
    return "Humano";
  }
  // Si la especie no es 'human', devuelve 'Otra especie'
  else {
    return "Otra especie";
  }
};
