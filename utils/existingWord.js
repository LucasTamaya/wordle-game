import axios from "axios";

const existingWord = async (grid, setIndex, tabIndex, setTabIndex) => {
  // Concaténation des éléments du tableau afin de récupérer un joli mot
  let word = "";
  grid.map((x) => {
    word += x;
  });

  console.log(word);

  // Requête vers l'api de dictionnaire afin de voir si le mot existe
  let data;
  let req = await axios
    .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    // Si le mot existe
    .then((res) => {
      alert("Mot existant");
      setTabIndex(tabIndex + 1);
      // On réinitialise l'index des cases
      setIndex(0); 
    })
    // Si le mot n'existe pas
    .catch((err) => {
      alert("Mot non existant, reéessayer");
    });
};

export default existingWord;

/*
 let data;
  let req = await axios
    .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    // Si le mot existe
    .then((res) => {
      data = { status: "Success" };
    })
    // Si le mot n'existe pas
    .catch((err) => {
      data = { status: "Error" };
    });

  return data;
*/
