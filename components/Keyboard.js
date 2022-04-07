import { useState, useEffect } from "react";
import { v4 } from "uuid";
import addLetterToGrid from "../utils/addLetterToGrid";
import deleteLetterFromGrid from "../utils/deleteLetterFromGrid";

import existingWord from "../utils/existingWord";

export default function Keyboard({
  gridOne,
  setGridOne,
  gridTwo,
  setGridTwo,
  gridThree,
  setGridThree,
  gridFour,
  setGridFour,
  gridFive,
  setGridFive,
  gridSix,
  setGridSix,
}) {
  let keyboardFloor1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  let keyboardFloor2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  let keyboardFloor3 = ["Z", "X", "C", "V", "B", "N", "M"];

  const [index, setIndex] = useState(0);
  const [tabIndex, setTabIndex] = useState(0);

  const addLetter = (letter) => {
    // Ajout de lettre pour le 1er mot
    if (tabIndex === 0) {
      addLetterToGrid(letter, gridOne, setGridOne, index, setIndex);
    }

    // Ajout de lettre pour le 2e mot
    if (tabIndex === 1) {
      addLetterToGrid(letter, gridTwo, setGridTwo, index, setIndex);
    }

    // Ajout de lettre pour le 3e mot
    if (tabIndex === 2) {
      addLetterToGrid(letter, gridThree, setGridThree, index, setIndex);
    }

    // Ajout de lettre pour le 4e mot
    if (tabIndex === 3) {
      addLetterToGrid(letter, gridFour, setGridFour, index, setIndex);
    }

    // Ajout de lettre pour le 5e mot
    if (tabIndex === 4) {
      addLetterToGrid(letter, gridFive, setGridFive, index, setIndex);
    }

    // Ajout de lettre pour le 6e mot
    if (tabIndex === 5) {
      addLetterToGrid(letter, gridSix, setGridSix, index, setIndex);
    }
  };

  const deleteLetter = () => {
    // Suppresion de lettre pour le 1er mot
    if (tabIndex === 0) {
      deleteLetterFromGrid(gridOne, setGridOne, index, setIndex);
    }

    // Suppresion de lettre pour le 2e mot
    if (tabIndex === 1) {
      deleteLetterFromGrid(gridTwo, setGridTwo, index, setIndex);
    }

    // Suppresion de lettre pour le 3e mot
    if (tabIndex === 2) {
      deleteLetterFromGrid(gridThree, setGridThree, index, setIndex);
    }

    // Suppresion de lettre pour le 4e mot
    if (tabIndex === 3) {
      deleteLetterFromGrid(gridFour, setGridFour, index, setIndex);
    }

    // Suppresion de lettre pour le 5e mot
    if (tabIndex === 4) {
      deleteLetterFromGrid(gridFive, setGridFive, index, setIndex);
    }

    // Suppresion de lettre pour le 6e mot
    if (tabIndex === 5) {
      deleteLetterFromGrid(gridSix, setGridSix, index, setIndex);
    }
  };

  const searchWord = async () => {
    console.log(gridOne);
    // Recherche pour le 1er mot
    if (tabIndex === 0) {
      // Vérifie si l'on a tapé un mot entier
      if (gridOne[4].letter !== "") {
        // Vérifie que le mot existe bien
        existingWord(gridOne, setGridOne, setIndex, tabIndex, setTabIndex);
      }
    }

    // Recherche pour le 2e mot
    if (tabIndex === 1) {
      // Vérifie si l'on a tapé un mot entier
      if (gridTwo[4].letter !== "") {
        // Vérifie que le mot existe bien
        existingWord(gridTwo, setGridTwo, setIndex, tabIndex, setTabIndex);
      }
    }

    // Recherche pour le 3e mot
    if (tabIndex === 2) {
      // Vérifie si l'on a tapé un mot entier
      if (gridThree[4].letter !== "") {
        // Vérifie que le mot existe bien
        existingWord(gridThree, setGridThree, setIndex, tabIndex, setTabIndex);
      }
    }

    // Recherche pour le 4e mot
    if (tabIndex === 3) {
      // Vérifie si l'on a tapé un mot entier
      if (gridFour[4].letter !== "") {
        // Vérifie que le mot existe bien
        existingWord(gridFour, setGridFour, setIndex, tabIndex, setTabIndex);
      }
    }

    // Recherche pour le 5e mot
    if (tabIndex === 4) {
      // Vérifie si l'on a tapé un mot entier
      if (gridFive[4].letter !== "") {
        // Vérifie que le mot existe bien
        existingWord(gridFive, setGridFive, setIndex, tabIndex, setTabIndex);
      }
    }

    // Recherche pour le 6e mot
    if (tabIndex === 5) {
      // Vérifie si l'on a tapé un mot entier
      if (gridSix[4].letter !== "") {
        // Vérifie que le mot existe bien
        existingWord(gridSix, setGridSix, setIndex, tabIndex, setTabIndex);
      }
    }
  };

  useEffect(() => {
    searchWord();
  }, [gridOne, gridTwo, gridThree, gridFour, gridFive, gridSix]);

  return (
    <>
      {/* {wordError && <p>This word doesn't exists</p>} */}
      <div className="pt-7">
        <div className="flex flex-col items-center gap-y-1">
          <div className="flex gap-x-1">
            {keyboardFloor1.map((x) => (
              <button
                key={v4()}
                className="w-[25px] md:w-[43px] h-[43px] md:h-[57px] border-2 border-green-500 cursor-pointer p-2 flex justify-center items-center"
                onClick={(e) => addLetter(e.currentTarget.innerText)}
              >
                {x}
              </button>
            ))}
          </div>
          <div className="flex gap-x-1">
            {keyboardFloor2.map((x) => (
              <button
                key={v4()}
                className="w-[25px] md:w-[43px] h-[43px] md:h-[57px] border-2 border-green-500 cursor-pointer p-2 flex justify-center items-center"
                onClick={(e) => addLetter(e.currentTarget.innerText)}
              >
                {x}
              </button>
            ))}
          </div>
          <div className="flex gap-x-1">
            <button
              className="w-[60px] md:w-[70px] h-[43px] md:h-[57px] border-2 border-green-500 cursor-pointer p-2 flex justify-center items-center"
              onClick={(e) => addLetter(e.currentTarget.innerText)}
            >
              Enter
            </button>
            {keyboardFloor3.map((x) => (
              <button
                key={v4()}
                className="w-[25px] md:w-[43px] h-[43px] md:h-[57px] border-2 border-green-500 cursor-pointer p-2 flex justify-center items-center"
                onClick={(e) => addLetter(e.currentTarget.innerText)}
              >
                {x}
              </button>
            ))}
            <button
              className="w-[60px] md:w-[70px] h-[43px] md:h-[57px] border-2 border-green-500 cursor-pointer p-2 flex justify-center items-center"
              onClick={() => deleteLetter()}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
