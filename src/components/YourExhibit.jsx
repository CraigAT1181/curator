import React from "react";
import { useNavigate } from "react-router-dom";
import { useSession } from "./SessionContext";
import ObjectCard from "./ObjectCard";

export default function YourExhibit() {
  const navigate = useNavigate();
  const { userExhibit } = useSession();

  return (
    <div>
      <div className="flex justify-end">
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
      <div className="flex justify-center">
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
