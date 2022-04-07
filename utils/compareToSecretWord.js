let secretWord = ["N", "A", "T", "A", "L"];

const compareToSecretWord = (word, setGridOne) => {
  console.log("this is the word we must compare", word);
  // Copie de la grille
  const updateArray = Array.from(word);

  let finalResult = 0;

  word.map((x, index) => {
    // si non présent, bg gris
    if (!secretWord.includes(x.letter)) {
      // Update du status: 0 signifiant que la lettre n'est pas présente dans le mot
      updateArray[index] = { letter: x.letter, status: 0 };

      // Update de la grid one
      setGridOne(updateArray);
      finalResult--;
    }

    // Si présent
    if (secretWord.includes(x.letter)) {
      // Si présent mais pas au niveau du même index, bg yellow
      if (x.letter !== secretWord[index]) {
        // Update du status: 1 signifiant que la lettre est présente, mais pas au même index
        updateArray[index] = { letter: x.letter, status: 1 };

        // Update de la grid one
        setGridOne(updateArray);

        finalResult--;
      }

      // Si présent et en plus au niveau du même index, bg green
      if (x.letter === secretWord[index]) {
        // Update du status: 2 signifiant que la lettre est présente en plus au niveau du même index
        updateArray[index] = { letter: x.letter, status: 2 };

        // Update de la grid one
        setGridOne(updateArray);

        finalResult++;
      }
    }
  });

  // Pour gagner, il faut que les 5 lettres soient présentes et au bon endroit
  if (finalResult === 5) {
    alert("You win");
  }
};

export default compareToSecretWord;
