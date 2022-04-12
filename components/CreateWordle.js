import { useState } from "react";
import axios from "axios";
import CloseIcon from "@mui/icons-material/Close";
import { CopyToClipboard } from "react-copy-to-clipboard";

import template from "../utils/template";
import Loader from "./Loader";

export default function CreateWordle({ setShowCreateModal }) {
  const [wordle, setWordle] = useState("");
  const [link, setLink] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleCreateWordle = async (e) => {
    e.preventDefault();

    setErrorMessage("");
    setLoading(true);

    // Requête vers l'api afin de créer le wordle
    const req = await axios.post(`${template}api/create-wordle`, {
      wordle: wordle.toUpperCase(),
    });

    // Si wordle correctement crée, on fournit un lien correspondant à celui-ci, afin d'essayer de le deviner
    if (req.data.status === "Success") {
      setLoading(false);
      const { urlParam } = req.data;
      console.log(urlParam);
      setLink(urlParam);
    }

    if (req.data.status === "Error") {
      setLoading(false);
      setErrorMessage(req.data.message);
    }
  };

  return (
    <div className="absolute top-0 left-0 w-screen h-screen bg-gray-500/80 p-7 flex justify-center items-center">
      <div className="relative w-[350px] bg-stone-800 p-5 rounded-xl flex flex-col items-center gap-y-3">
        <button
          className="absolute top-0 right-0 m-2 border border-white flex justify-center items-center p-1 rounded-3xl"
          onClick={() => setShowCreateModal(false)}
        >
          <CloseIcon
            sx={{ fontSize: 10 }}
            className="text-white cursor-pointer"
          />
        </button>
        <h1 className="text-center text-white font-bold">Make Custom Wordle</h1>
        <p className="text-center text-white">The word length must be 5</p>
        <form onSubmit={handleCreateWordle}>
          <input
            type="text"
            placeholder="Enter custom word"
            minLength={5}
            maxLength={5}
            onChange={(e) => setWordle(e.target.value)}
            className="text-center text-white p-2 rounded-xl bg-transparent border-2 border-white outline-none uppercase placeholder:text-white placeholder:normal-case"
          />
        </form>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        {loading && <Loader />}
        {link && (
          <CopyToClipboard
            text={`${template}wordle/${link}`}
            className="text-sky-700 font-bold hover:text-sky-500 active:text-sky-600 cursor-pointer"
            onClick={() => {}}
          >
            <button>Generate Link</button>
          </CopyToClipboard>
        )}
      </div>
    </div>
  );
}
