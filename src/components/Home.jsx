import React from "react";

export default function Home() {
  return (
    <div className="flex-col justify-center">

      <div className="flex justify-center mt-2">
        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none">
          Metropolitan Museum
        </button>
        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none ml-2">
          Fitzwilliam Museum
        </button>
      </div>
    </div>
  );
}
