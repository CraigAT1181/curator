import React, { useState, useEffect } from "react";
import { useSession } from "./SessionContext";

export default function AddExhibitItem({ exhibit }) {
  const { userExhibit, setUserExhibit } = useSession();
  const [isInExhibit, setIsInExhibit] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    setIsInExhibit(
      userExhibit.some((item) => item.objectID === exhibit.objectID)
    );
  }, [userExhibit, exhibit.objectID]);

  const handleAddItem = () => {
    if (!isInExhibit) {
      setUserExhibit((prevExhibit) => [...prevExhibit, exhibit]);
      setClicked(true)
    }
  };

  const handleRemoveItem = () => {
    if (isInExhibit) {
      setUserExhibit((prevExhibit) =>
        prevExhibit.filter((item) => item.objectID !== exhibit.objectID)
      );
      setClicked(false)
    }
  };

  return (
    <div>
      {isInExhibit ? (
        <div
          className="badge-clicked"
          title="Remove from your exhibit">
          <button onClick={handleRemoveItem}>-</button>
        </div>
      ) : (
        <div
          className="badge-unclicked"
          title="Add to your exhibit">
          <button onClick={handleAddItem}>+</button>
        </div>
      )}
    </div>
  );
}
