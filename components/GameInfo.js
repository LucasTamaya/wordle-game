import CloseIcon from "@mui/icons-material/Close";

import {
  gameExample1,
  gameExample2,
  gameExample3,
} from "../utils/gameExamples";

export default function GameInfo({ setShowGameInfo }) {
  return (
    <div className="absolute top-0 left-0 w-screen h-screen bg-gray-500/80 p-7 flex justify-center items-center">
      <div className="relative w-[350px] bg-stone-800 p-5 rounded-xl flex flex-col items-center gap-y-3">
        <h3 className="text-center text-white font-bold">How to play</h3>
        <p className="text-center text-gray-400 text-xs">
          Guess the wordle in 6 tries. After each guess, the color of the titles
          will change to show you how close your guess was to the word.
        </p>
        <div className="mx-auto w-fit grid grid-rows-1 grid-cols-5 gap-1 p-2">
          {gameExample1.map((x) => (
            <div
              className={`w-[40px] h-[40px] md:w-[62px] md:h-[62px] text-white text-xl md:text-3xl font-bold border-2 border-gray-700 rounded mx-auto cursor-pointer flex justify-center items-center ${
                x.status === 0
                  ? "bg-gray-600 border-none"
                  : x.status === 1
                  ? "bg-yellow-500 border-none"
                  : x.status === 2
                  ? "bg-green-500 border-none"
                  : "bg-transparent"
              }`}
            >
              {x.letter}
            </div>
          ))}
        </div>
        <p className="text-center text-gray-400 text-xs">
          The letter <span className="font-bold">W</span> is in the word and in
          the correct spot.
        </p>

        <div className="mx-auto w-fit grid grid-rows-1 grid-cols-5 gap-1 p-2">
          {gameExample2.map((x) => (
            <div
              className={`w-[40px] h-[40px] md:w-[62px] md:h-[62px] text-white text-xl md:text-3xl font-bold border-2 border-gray-700 rounded mx-auto cursor-pointer flex justify-center items-center ${
                x.status === 0
                  ? "bg-gray-600 border-none"
                  : x.status === 1
                  ? "bg-yellow-500 border-none"
                  : x.status === 2
                  ? "bg-green-500 border-none"
                  : "bg-transparent"
              }`}
            >
              {x.letter}
            </div>
          ))}
        </div>
        <p className="text-center text-gray-400 text-xs">
          The letter <span className="font-bold">L</span> is in the word but in
          the wrong spot.
        </p>

        <div className="mx-auto w-fit grid grid-rows-1 grid-cols-5 gap-1 p-2">
          {gameExample3.map((x) => (
            <div
              className={`w-[40px] h-[40px] md:w-[62px] md:h-[62px] text-white text-xl md:text-3xl font-bold border-2 border-gray-700 rounded mx-auto cursor-pointer flex justify-center items-center ${
                x.status === 0
                  ? "bg-gray-600 border-none"
                  : x.status === 1
                  ? "bg-yellow-500 border-none"
                  : x.status === 2
                  ? "bg-green-500 border-none"
                  : "bg-transparent"
              }`}
            >
              {x.letter}
            </div>
          ))}
        </div>
        <p className="text-center text-gray-400 text-xs">
          The letter <span className="font-bold">U</span> is not in the word in
          any spot.
        </p>
        <div
          className="absolute top-0 right-0 m-3 text-white border border-white flex justify-center items-center rounded-3xl p-1 cursor-pointer"
          onClick={() => setShowGameInfo(false)}
        >
          <CloseIcon sx={{ fontSize: 10 }} />
        </div>
      </div>
    </div>
  );
}
