import React from "react";
import ObjectCard from "./ObjectCard";

export default function ExhibitDisplay({ exhibits }) {

  return (
    <div>
      {exhibits.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {exhibits.map((exhibit) => {
            return (
              <ObjectCard
                key={exhibit.objectID || exhibit.id}
                exhibit={exhibit}
              />
            );
          })}
        </div>
      ) : (
        <div>
          <span>If available, museum exhibits will appear here.</span>
        </div>
      )}
    </div>
  );
}
