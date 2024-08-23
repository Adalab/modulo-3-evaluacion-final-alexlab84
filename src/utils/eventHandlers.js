// Funcion manejadora onkeydowm que hara un prevent default
// cuando se toque la letra intro

export const handleKeyDown = (ev) => {
  if (ev.key === "Enter") {
    ev.preventDefault();
  }
};
