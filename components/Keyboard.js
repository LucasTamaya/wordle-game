import { v4 } from "uuid";

export default function Keyboard({setGrid}) {
  let keyboardFloor1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  let keyboardFloor2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  let keyboardFloor3 = ["Z", "X", "C", "V", "B", "N", "M"];

  const selectValue = (e) => {
    alert(`Vous avez selectionner la lettre ${e}`);
  };

  return (
    <div className="pt-7">
      <div className="flex flex-col items-center gap-y-1">
        <div className="flex gap-x-1">
          {keyboardFloor1.map((x) => (
            <button
              key={v4()}
              className="w-[25px] md:w-[43px] h-[43px] md:h-[57px] border-2 border-green-500 cursor-pointer p-2 flex justify-center items-center"
              onClick={(e) => selectValue(e.currentTarget.innerText)}
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
              onClick={(e) => selectValue(e.currentTarget.innerText)}
            >
              {x}
            </button>
          ))}
        </div>
        <div className="flex gap-x-1">
          <button
            className="w-[60px] md:w-[70px] h-[43px] md:h-[57px] border-2 border-green-500 cursor-pointer p-2 flex justify-center items-center"
            onClick={(e) => selectValue(e.currentTarget.innerText)}
          >
            Enter
          </button>
          {keyboardFloor3.map((x) => (
            <button
              key={v4()}
              className="w-[25px] md:w-[43px] h-[43px] md:h-[57px] border-2 border-green-500 cursor-pointer p-2 flex justify-center items-center"
              onClick={(e) => selectValue(e.currentTarget.innerText)}
            >
              {x}
            </button>
          ))}
          <button
            className="w-[60px] md:w-[70px] h-[43px] md:h-[57px] border-2 border-green-500 cursor-pointer p-2 flex justify-center items-center"
            onClick={(e) => selectValue(e.currentTarget.innerText)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
