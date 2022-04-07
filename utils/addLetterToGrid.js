const addLetterToGrid = (letter, grid, setGrid, index, setIndex) => {
  if (index > 4) {
    return;
  }
  // Création d'une copie de la gridOne afin de l'update
  const updateGridOne = Array.from(grid);
  // Ajout de la lettre
  updateGridOne[index] = letter;
  // Update de la gridOne
  setGrid(updateGridOne);
  // Incrémentation de l'index afin de passer à la case suivante lorsqu'on sélectionne une nouvelle lettre
  setIndex(index + 1);
};

export default addLetterToGrid;
