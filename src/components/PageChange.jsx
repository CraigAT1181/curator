import React from "react";
import { useParams } from "react-router-dom";

export default function PageChange({pageNumber, setPageNumber}) {
  return (
    <div className="flex">
      <button onClick={() => setPageNumber(pageNumber--)}>-</button>
      <p>{pageNumber}</p>
      <button onClick={() => setPageNumber(pageNumber++)}>+</button>
    </div>
  );
}
