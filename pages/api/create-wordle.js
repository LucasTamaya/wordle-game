import dbConnect from "../../utils/mongodb";
import Cryptr from "cryptr";
import axios from "axios";

import Wordle from "../../models/wordle";
import { nextCors } from "../../utils/cors";

// Connexion à la base de donnée
dbConnect();

export default async function handler(req, res) {
  // Middleware CORS
  await nextCors(req, res);

  // Récupération du mot d'origine
  const originalWord = req.body.wordle;

  // Requête vers l'api de dictionnaire afin de voir si le mot existe
  axios
    .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${originalWord}`)
    // Si le mot existe
    .then(async (data) => {
      // Récupération de la secret key
      const cryptr = new Cryptr(process.env.SECRET_KEY);

      try {
        // Encryption du mot avec crypto-js
        const encryptedWord = cryptr.encrypt(originalWord);

        console.log(encryptedWord);

        // Enregistrement du wordle dans la base de donnée
        const newWordle = await new Wordle({
          originalWord,
          encryptedWord,
        });
        newWordle.save();
        console.log("nouveau wordle crée");
        return res
          .status(200)
          .send({ status: "Success", urlParam: newWordle.encryptedWord });
        // Si erreur
      } catch (err) {
        console.log(err);
        res.send({ status: "Error", message: "Internal server error" });
      }
    })
    // Si le mot n'existe pas
    .catch((err) => {
      console.log(err);
      res.send({ status: "Error", message: "Please enter a valid word" });
    });
}
