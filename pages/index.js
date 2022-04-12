import axios from "axios";
import { useRouter } from "next/router";

import template from "../utils/template";

export default function Home() {
  const router = useRouter();

  const startGame = async () => {
    // On récupère le mot secret tiré au hazard dans la base de donnée
    const req = await axios.get(`${template}api/start-game`);
    if (req.data.status === "Success") {
      const { secretWord } = req.data;

      // On redirige l'utilisateur vers le jeu avec le mot secret à trouver
      router.push(`${template}wordle/${secretWord}`);
    }
  };

  return (
    <main className="bg-stone-900 w-screen h-screen p-7 flex flex-col items-center gap-y-10">
      <h1 className="text-3xl font-bold text-center text-white">
        Welcome to the Wordle Game
      </h1>
      <button
        className="text-white font-bold px-6 py-2 rounded-xl border border-white transition ease-out hover:bg-white hover:text-stone-900 hover:font-bold"
        onClick={startGame}
      >
        Start
      </button>
    </main>
  );
}
