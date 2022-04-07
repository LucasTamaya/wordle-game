import axios from "axios";

import compareToSecretWord from "./compareToSecretWord";

const existingWord = async (
  grid,
  setGridOne,
  setIndex,
  tabIndex,
  setTabIndex,
  setGameResult
) => {
  // Concaténation des éléments du tableau afin de récupérer un joli mot
  let word = "";
  grid.map((x) => {
    word += x.letter;
  });

  console.log(word);

  // Requête vers l'api de dictionnaire afin de voir si le mot existe
  let req = await axios
    .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    // Si le mot existe
    .then((res) => {
      // On passe au mot suivant
      setTabIndex(tabIndex + 1);

      // On réinitialise l'index des cases
      setIndex(0);

      // On compare le mot saisie avec le mot secret
      compareToSecretWord(grid, setGridOne, tabIndex, setGameResult);
    })
    // Si le mot n'existe pas
    .catch((err) => {
      console.log(err);
      alert("Mot non existant, reéessayer");
    });
};

export default existingWord;
