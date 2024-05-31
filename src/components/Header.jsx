import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <div className="flex-col px-16 pt-6">
      <div className="flex justify-center">
        <h1
          className="title"
          onClick={() => navigate("/")}>
          Curator
        </h1>
      </div>

      <div className="flex justify-center">
        <button
          className="your-exhibits-button mt-4"
          onClick={() => navigate("/your-exhibit")}>
          Your Exhibit
        </button>
      </div>
      <hr className="mt-4 bg-gray-700 h-1" />
    </div>
  );
}
