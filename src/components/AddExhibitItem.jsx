import React from "react";
import { useSession } from "./SessionContext";

export default function AddExhibitItem({ exhibit }) {
  const { setUserExhibit } = useSession();

  const handleAddItem = () => {
    setUserExhibit((prevExhibit) => {
      if (prevExhibit.some((item) => item.objectID === exhibit.objectID)) {
        return prevExhibit;
      }

      return [...prevExhibit, exhibit];
    });
  };

  return (
    <div
      className="badge"
      title="Add to your exhibit">
      <button onClick={() => handleAddItem()}>+</button>
    </div>
  );
}
