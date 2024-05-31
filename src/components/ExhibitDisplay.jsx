import React, { useEffect, useState } from "react";
import ObjectCard from "./ObjectCard";

export default function ExhibitDisplay({ exhibits, searched }) {
  useEffect(() => {}, []);

  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {exhibits.length > 0
          ? exhibits.map((exhibit) => {
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
  );
}
