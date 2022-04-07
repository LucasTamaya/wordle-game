import { v4 } from "uuid";
import { useState, useEffect } from "react";
import Link from "next/link";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";

import Keyboard from "./Keyboard";
import LostGame from "./LostGame";
import GameWon from "./GameWon";

export default function Grid() {
  let emptyGrid = new Array(5);
  // emptyGrid.fill(""); MARCHE !!
  emptyGrid.fill({ letter: "", status: undefined });

  const [gridOne, setGridOne] = useState(emptyGrid);
  const [gridTwo, setGridTwo] = useState(emptyGrid);
  const [gridThree, setGridThree] = useState(emptyGrid);
  const [gridFour, setGridFour] = useState(emptyGrid);
  const [gridFive, setGridFive] = useState(emptyGrid);
  const [gridSix, setGridSix] = useState(emptyGrid);

  const [gameResult, setGameResult] = useState("");

  return (
    <div className="p-5">
      <h1 className="text-center text-white text-2xl sm:text-3xl font-bold mb-3">
        Custom Wordle Game
      </h1>
      <div className="mx-auto flex justify-center items-center gap-x-3">
        <InfoOutlinedIcon className="text-white cursor-pointer" />
        <Link href="/create-wordle">
          <p className="text-sky-700 font-bold bg-gray-800 rounded p-2 cursor-pointer hover:text-sky-500">
            Make your own wordle
          </p>
        </Link>
        <SignalCellularAltIcon className="text-white cursor-pointer" />
      </div>
      <div className="mx-auto w-fit grid grid-rows-5 grid-cols-5 gap-1 p-2">
        {gridOne.map((x) => (
          <div
            key={v4()}
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

        {gridTwo.map((x) => (
          <div
            key={v4()}
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

        {gridThree.map((x) => (
          <div
            key={v4()}
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

        {gridFour.map((x) => (
          <div
            key={v4()}
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

        {gridFive.map((x) => (
          <div
            key={v4()}
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

        {gridSix.map((x) => (
          <div
            key={v4()}
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
      {!gameResult && (
        <Keyboard
          gridOne={gridOne}
          setGridOne={setGridOne}
          gridTwo={gridTwo}
          setGridTwo={setGridTwo}
          gridThree={gridThree}
          setGridThree={setGridThree}
          gridFour={gridFour}
          setGridFour={setGridFour}
          gridFive={gridFive}
          setGridFive={setGridFive}
          gridSix={gridSix}
          setGridSix={setGridSix}
          setGameResult={setGameResult}
        />
      )}

      {gameResult === "Lost" && <LostGame />}
      {gameResult === "Won" && <GameWon />}
    </div>
  );
}
