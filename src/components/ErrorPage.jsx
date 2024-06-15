import React from "react";
import { useNavigate } from "react-router";
import { useSession } from "./SessionContext";

export default function ErrorPage() {
  const navigate = useNavigate();
  const { setMuseum, setExhibits, setActiveSearch } = useSession();
  // Reset Exhibits, Museum and activeSearch to avoid an error loop and return the user to the Home page.
  const handleNavigateHome = () => {
    setExhibits([]);
    setMuseum("");
    setActiveSearch(false);
    navigate("/home");
  };

  return (
    <div>
      <div className="flex-col text-center">
        <h3 className="text-2xl mb-4">Oops, something's gone wrong!</h3>
        <p>
          We may be having trouble connecting with a particular museum. Click
          below to return home, and try another.
        </p>
        <button
          className="return-home-button mt-4"
          onClick={handleNavigateHome}>
          Home
        </button>
      </div>
    </div>
  );
}
