import React, { useState, useEffect } from "react";
import { useSession } from "./SessionContext";

export default function AddExhibitItem({ exhibit }) {
  const { userExhibit, setUserExhibit } = useSession();
  const [isInExhibit, setIsInExhibit] = useState(false);

  // Check if the exhibit is already in the user's exhibit list when component mounts or userExhibit changes
  useEffect(() => {
    setIsInExhibit(userExhibit.some((item) => item.objectID === exhibit.objectID));
  }, [userExhibit, exhibit.objectID]);

  // Handler to add the exhibit to the user's exhibit list
  const handleAddItem = () => {
    if (!isInExhibit) {
      setUserExhibit((prevExhibit) => [...prevExhibit, exhibit]);
    }
  };

  // Handler to remove the exhibit from the user's exhibit list
  const handleRemoveItem = () => {
    if (isInExhibit) {
      setUserExhibit((prevExhibit) =>
        prevExhibit.filter((item) => item.objectID !== exhibit.objectID)
      );
    }
  };

  return (
    <div>
      {isInExhibit ? (
        <div className="badge-clicked" title="Remove from your exhibit">
          <button onClick={handleRemoveItem}>-</button>
        </div>
      ) : (
        <div className="badge-unclicked" title="Add to your exhibit">
          <button onClick={handleAddItem}>+</button>
        </div>
      )}
    </div>
  );
}
