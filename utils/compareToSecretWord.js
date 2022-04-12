// let secretWord = ["N", "A", "T", "A", "L"];

const compareToSecretWord = (
  grid,
  setGrid,
  tabIndex,
  setGameResult,
  secretWord,
) => {
  // Copie de la grille
  const updateArray = Array.from(grid);

  let finalResult = 0;

  grid.map((x, index) => {
    // si non présent, bg gris
    if (!secretWord.includes(x.letter)) {
      if (tabIndex === 5) {
        // Si on est arrivé au dernier mot, on indique une partie perdu
        setGameResult("Lost");
      }
      // Update du status: 0 signifiant que la lettre n'est pas présente dans le mot
      updateArray[index] = { letter: x.letter, status: 0 };

      // Update de la grid one
      setGrid(updateArray);
      finalResult--;
    }

    // Si présent
    if (secretWord.includes(x.letter)) {
      // Si présent mais pas au niveau du même index, bg yellow
      if (x.letter !== secretWord[index]) {
        // Si on est arrivé au dernier mot, on indique une partie perdue
        if (tabIndex === 5) {
          setGameResult("Lost");
        }
        // Update du status: 1 signifiant que la lettre est présente, mais pas au même index
        updateArray[index] = { letter: x.letter, status: 1 };

        // Update de la grid one
        setGrid(updateArray);

        finalResult--;
      }

      // Si présent et en plus au niveau du même index, bg green
      if (x.letter === secretWord[index]) {
        // Update du status: 2 signifiant que la lettre est présente en plus au niveau du même index
        updateArray[index] = { letter: x.letter, status: 2 };

        // Update de la grid one
        setGrid(updateArray);

        finalResult++;
      }
    }
  });

  // Si on trouve le bon mot secret, on indique une partie gagnée
  if (finalResult === 5) {
    setGameResult("Won");
  }
};

export default compareToSecretWord;
