import { v4 } from "uuid";
import { useState } from "react";

import Keyboard from "./Keyboard";

export default function Grid() {
  let emptyGrid = new Array(30);
  emptyGrid.fill("");

  // Création de la grid vide
  const [grid, setGrid] = useState(emptyGrid);

  return (
    <div className="p-7">
      <div className="mx-auto w-fit grid grid-rows-5 grid-cols-5 gap-2 bg-blue-500 p-2">
        {grid.map((x) => (
          <div
            key={v4()}
            className="w-[40px] h-[40px] md:w-[62px] md:h-[62px] border-2 border-red-500 mx-auto cursor-pointer"
          ></div>
        ))}
      </div>
      <Keyboard setGrid={setGrid} />
    </div>
  );
}
