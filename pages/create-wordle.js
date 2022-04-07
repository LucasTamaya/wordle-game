import { useState } from "react";
import axios from "axios";
import CloseIcon from "@mui/icons-material/Close";

export default function CreateWordle() {
  const [wordle, setWordle] = useState("");

  const handleCreateWordle = (e) => {
    e.preventDefault();
    alert(wordle);
  };

  return (
    <div className="absolute top-0 left-0 w-screen h-screen bg-gray-500/80 p-7 flex justify-center items-center">
      <div className="relative w-[350px] bg-stone-800 p-5 rounded-xl flex flex-col items-center gap-y-3">
        <div className="absolute top-0 right-0 m-2 border border-white flex justify-center items-center p-1 rounded-3xl">
          <CloseIcon
            sx={{ fontSize: 10 }}
            className="text-white cursor-pointer"
          />
        </div>
        <h1 className="text-center text-white font-bold">Make Custom Wordle</h1>
        <p className="text-center text-white">The word length must be 6</p>
        <form onSubmit={handleCreateWordle}>
          <input
            type="text"
            placeholder="Enter custom word"
            minLength={6}
            maxLength={6}
            onChange={(e) => setWordle(e.target.value)}
            className="text-center text-white p-2 rounded-xl bg-transparent border-2 border-white placeholder:text-white"
          />
        </form>
      </div>
    </div>
  );
}
