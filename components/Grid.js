import { v4 } from "uuid";
import { useState } from "react";

import Keyboard from "./Keyboard";

export default function Grid() {
  // let emptyGrid = new Array(30);
  // emptyGrid.fill("");
  // //   // Création de la grid vide
  // const [grid, setGrid] = useState(emptyGrid);

  let emptyGrid = new Array(5);
  emptyGrid.fill("");

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
            className="w-[40px] h-[40px] md:w-[62px] md:h-[62px] border-2 border-red-500 mx-auto cursor-pointer flex justify-center items-center"
          >
            {x}
          </div>
        ))}

        {gridTwo.map((x) => (
          <div
            key={v4()}
            className="w-[40px] h-[40px] md:w-[62px] md:h-[62px] border-2 border-red-500 mx-auto cursor-pointer flex justify-center items-center"
          >
            {x}
          </div>
        ))}

        {gridThree.map((x) => (
          <div
            key={v4()}
            className="w-[40px] h-[40px] md:w-[62px] md:h-[62px] border-2 border-red-500 mx-auto cursor-pointer flex justify-center items-center"
          >
            {x}
          </div>
        ))}

        {gridFour.map((x) => (
          <div
            key={v4()}
            className="w-[40px] h-[40px] md:w-[62px] md:h-[62px] border-2 border-red-500 mx-auto cursor-pointer flex justify-center items-center"
          >
            {x}
          </div>
        ))}

        {gridFive.map((x) => (
          <div
            key={v4()}
            className="w-[40px] h-[40px] md:w-[62px] md:h-[62px] border-2 border-red-500 mx-auto cursor-pointer flex justify-center items-center"
          >
            {x}
          </div>
        ))}

        {gridSix.map((x) => (
          <div
            key={v4()}
            className="w-[40px] h-[40px] md:w-[62px] md:h-[62px] border-2 border-red-500 mx-auto cursor-pointer flex justify-center items-center"
          >
            {x}
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
