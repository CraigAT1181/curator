import React from "react";
import { useNavigate } from "react-router-dom";
import { useSession } from "./SessionContext";
import ObjectCard from "./ObjectCard";

export default function YourExhibit() {
  const navigate = useNavigate();
  const { userExhibit } = useSession();

  return (
    <div>
      <div className="flex justify-end mb-4">
        <button
          title="Back button"
          onClick={() => navigate(-1)}>
          <i className="fa-solid fa-arrow-left"></i>
        </button>
      </div>
      {userExhibit.length === 0 && (
        <div className="flex text-center h-80 items-center md:justify-center">
          <h2>Exhibits you add will appear here.</h2>
        </div>
      )}

      <div className="">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {userExhibit.length > 0
            ? userExhibit.map((exhibit) => {
                return (
                  <ObjectCard
                    key={exhibit.objectID}
                    exhibit={exhibit}
                  />
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
}
