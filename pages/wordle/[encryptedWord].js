import Cryptr from "cryptr";

import Grid from "../../components/Grid";

export default function encryptedWord({ secretWord }) {
  return <Grid secretWord={secretWord} />;
}

export async function getServerSideProps({ query }) {
  // Récupère le mot encrypté depuis l'url
  const { encryptedWord } = query;

  // Récupère la secret key permettant de décrypté les mots
  const secretKey = process.env.SECRET_KEY;

  // Création d'une nouvelle instance "cryptr" afin de décrypter un mot
  const cryptr = new Cryptr(secretKey);

  // Récupère le mot décrypté afin de la passer en paramètre au composant
  const secretWord = cryptr.decrypt(encryptedWord);
  return {
    props: { secretWord },
  };
}
