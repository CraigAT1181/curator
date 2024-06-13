import React from "react";
import { useSession } from "./SessionContext";

export default function PageChange({ pageTotal }) {
  const { pageNumber, setPageNumber } = useSession();

  const firstPage = pageNumber === 1;
  const lastPage = pageNumber === pageTotal;

  return (
    <div className="flex mt-4">
      <button
        className="page-button"
        onClick={() => setPageNumber(pageNumber - 1)}
        disabled={firstPage}>
        -
      </button>
      <p className="page-number">
        {pageNumber} <span className="font-extralight mx-2">of</span>{" "}
        {pageTotal}
      </p>
      <button
        className="page-button"
        onClick={() => setPageNumber(pageNumber + 1)}
        disabled={lastPage}>
        +
      </button>
    </div>
  );
}
