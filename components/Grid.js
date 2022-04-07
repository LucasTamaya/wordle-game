import { v4 } from "uuid";
import { useState } from "react";

import Keyboard from "./Keyboard";

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

  return (
    <div className="p-7">
      <div className="mx-auto w-fit grid grid-rows-5 grid-cols-5 gap-2 bg-blue-500 p-2">
        {gridOne.map((x) => (
          <div
            key={v4()}
            className={`w-[40px] h-[40px] md:w-[62px] md:h-[62px] border-2 border-red-500 mx-auto cursor-pointer flex justify-center items-center ${
              x.status === 0
                ? "bg-gray-500"
                : x.status === 1
                ? "bg-yellow-500"
                : x.status === 2
                ? "bg-green-500"
                : "bg-white"
            }`}
          >
            {x.letter}
          </div>
        ))}

        {gridTwo.map((x) => (
          <div
            key={v4()}
            className={`w-[40px] h-[40px] md:w-[62px] md:h-[62px] border-2 border-red-500 mx-auto cursor-pointer flex justify-center items-center ${
              x.status === 0
                ? "bg-gray-500"
                : x.status === 1
                ? "bg-yellow-500"
                : x.status === 2
                ? "bg-green-500"
                : "bg-white"
            }`}
          >
            {x.letter}
          </div>
        ))}

        {gridThree.map((x) => (
          <div
            key={v4()}
            className={`w-[40px] h-[40px] md:w-[62px] md:h-[62px] border-2 border-red-500 mx-auto cursor-pointer flex justify-center items-center ${
              x.status === 0
                ? "bg-gray-500"
                : x.status === 1
                ? "bg-yellow-500"
                : x.status === 2
                ? "bg-green-500"
                : "bg-white"
            }`}
          >
            {x.letter}
          </div>
        ))}

        {gridFour.map((x) => (
          <div
            key={v4()}
            className={`w-[40px] h-[40px] md:w-[62px] md:h-[62px] border-2 border-red-500 mx-auto cursor-pointer flex justify-center items-center ${
              x.status === 0
                ? "bg-gray-500"
                : x.status === 1
                ? "bg-yellow-500"
                : x.status === 2
                ? "bg-green-500"
                : "bg-white"
            }`}
          >
            {x.letter}
          </div>
        ))}

        {gridFive.map((x) => (
          <div
            key={v4()}
            className={`w-[40px] h-[40px] md:w-[62px] md:h-[62px] border-2 border-red-500 mx-auto cursor-pointer flex justify-center items-center ${
              x.status === 0
                ? "bg-gray-500"
                : x.status === 1
                ? "bg-yellow-500"
                : x.status === 2
                ? "bg-green-500"
                : "bg-white"
            }`}
          >
            {x.letter}
          </div>
        ))}

        {gridSix.map((x) => (
          <div
            key={v4()}
            className={`w-[40px] h-[40px] md:w-[62px] md:h-[62px] border-2 border-red-500 mx-auto cursor-pointer flex justify-center items-center ${
              x.status === 0
                ? "bg-gray-500"
                : x.status === 1
                ? "bg-yellow-500"
                : x.status === 2
                ? "bg-green-500"
                : "bg-white"
            }`}
          >
            {x.letter}
          </div>
        ))}
      </div>
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
      />
    </div>
  );
}
