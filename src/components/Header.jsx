import React from "react";

export default function Header() {
  return (
    <div className="flex-col px-16 pt-6">
      <div className="flex justify-center">
        <h1 className="text-6xl md:text-8xl">Curator</h1>
      </div>

      <div className="flex justify-center">
        <button className="border border-gray-500 hover:bg-gray-700 hover:text-white rounded py-0 px-2 mt-2">
          Your Exhibit
        </button>
      </div>
      <hr className="mt-4 bg-gray-700 h-1" />
    </div>
  );
}
