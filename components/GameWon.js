import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";

export default function GameWon() {
  return (
    <div className="absolute top-0 left-0 w-screen h-screen bg-gray-500/80 p-7 flex justify-center items-center">
      <div className="relative w-[350px] bg-stone-800 p-5 rounded-xl flex flex-col gap-y-3">
        <div className="w-fit rounded-3xl p-2 bg-green-900 mx-auto">
          <DoneIcon className="text-green-500" />
        </div>
        <div className="absolute top-0 right-0 m-2 border border-white flex justify-center items-center p-1 rounded-3xl">
          <CloseIcon
            sx={{ fontSize: 10 }}
            className="text-white cursor-pointer"
          />
        </div>
        <h1 className="text-center text-white font-bold">You Won !</h1>
        <p className="text-center text-white">Wordle Guessed in</p>
        <button className="text-white text-sm font-bold bg-blue-800 p-2 rounded hover:bg-blue-900">Copy This Attempt</button>
        <button className="text-white text-sm font-bold bg-green-500 p-2 rounded hover:bg-green-600">Make Your Own Wordle</button>
        <button className="text-white text-sm font-bold bg-red-500 p-2 rounded hover:bg-red-600">Play A Random Word</button>
      </div>
    </div>
  );
}
