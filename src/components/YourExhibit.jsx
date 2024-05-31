import React from "react";
import { useNavigate } from "react-router-dom";

export default function YourExhibit() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex justify-end">
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
    </div>
  );
}
