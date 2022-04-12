import DoneIcon from "@mui/icons-material/Done";

import CreateWordle from "./CreateWordle";

export default function GameWon({
  setGameResult,
  setShowCreateModal,
  showCreateModal,
  secretWord,
}) {
  return (
    <div className="absolute top-0 left-0 w-screen h-screen bg-gray-500/80 p-7 flex justify-center items-center">
      {!showCreateModal && (
        <div className="relative w-[350px] bg-stone-800 p-5 rounded-xl flex flex-col gap-y-3">
          <div className="w-fit rounded-3xl p-2 bg-green-900 mx-auto">
            <DoneIcon className="text-green-500" />
          </div>
          <h1 className="text-center text-white font-bold">You Won !</h1>
          <p className="text-center text-white">
            You have guess the Wordle{" "}
            <span className="font-bold">{secretWord}</span>
          </p>
          <button className="text-white text-sm font-bold bg-blue-800 p-2 rounded hover:bg-blue-900">
            Copy This Attempt
          </button>
          <button
            className="text-white text-sm font-bold bg-green-500 p-2 rounded hover:bg-green-600"
            onClick={() => setShowCreateModal(true)}
          >
            Make Your Own Wordle
          </button>
          <button className="text-white text-sm font-bold bg-red-500 p-2 rounded hover:bg-red-600">
            Play A Random Word
          </button>
        </div>
      )}
      {showCreateModal && <CreateWordle />}
    </div>
  );
}
