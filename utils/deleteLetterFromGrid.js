const deleteLetterFromGrid = (grid, setGrid, index, setIndex) => {
  if (index === 0) {
    return;
  }
  // Création d'une copie de la gridOne afin de l'update
  const updateGridOne = Array.from(grid);
  // Supprime le dernier élément du tableau donc la dernière lettre du mot
  updateGridOne[index - 1] = { letter: "", status: undefined };
  // console.log(updateGridOne);
  // Update de la gridOne
  setGrid(updateGridOne);
  // Décrémentation de l'index afin de passer à la case précédente lorsqu'on sélectionne une nouvelle lettre
  setIndex(index - 1);
};

export default deleteLetterFromGrid;
