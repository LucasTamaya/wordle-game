import dbConnect from "../../utils/mongodb";

import Wordle from "../../models/wordle";
import { nextCors } from "../../utils/cors";

// Connexion à la base de donnée
dbConnect();

export default async function handler(req, res) {
  // Middleware CORS
  await nextCors(req, res);

  // Récupère tous les wordles de la base de donnée
  const allWordles = await Wordle.find({});
  console.log(allWordles);

  // Génère un index au hazard
  const index = Math.floor(Math.random() * (allWordles.length - 1 + 1));
  console.log(index);

  // Récupère le random secret word
  const { encryptedWord } = allWordles[index];
  console.log(encryptedWord);

  return res.status(200).send({ status: "Success", secretWord: encryptedWord });
}
