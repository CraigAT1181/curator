import React from "react";
import { useNavigate } from "react-router";

export default function ErrorPage() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex-col text-center">
        <h3 className="text-2xl mb-4">Oops, something's gone wrong!</h3>
        <p>Click the button to return Home</p>
        <button
          className="return-home-button mt-4"
          onClick={() => {
            navigate("/home");
          }}>
          Home
        </button>
      </div>
    </div>
  );
}
