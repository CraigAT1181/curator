import React from "react";
import { useSession } from "./SessionContext";
import ObjectCard from "./ObjectCard";

export default function ExhibitDisplay({ pageTotal }) {
  const { exhibits } = useSession();

  return (
    <div>
      {exhibits && exhibits.length > 0 && (
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
          {exhibits.map((exhibit) => {
            return (
              <ObjectCard
                key={exhibit.objectID || exhibit.id}
                exhibit={exhibit}
              />
            );
          })}
        </div>
      )}

      {pageTotal === 0 && (
        <div className="text-center mt-10">
          <span>If available, museum exhibits will appear here.</span>
        </div>
      )}
    </div>
  );
}
