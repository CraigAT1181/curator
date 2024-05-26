import React from "react";

export default function PageChange({ pageNumber, setPageNumber, totalPages }) {
  let firstPage;
  let lastPage;

  if (pageNumber === 1) {
    firstPage = true;
  } else if (pageNumber === totalPages) {
    lastPage = true;
  } else {
    firstPage = false;
    lastPage = false;
  }

  return (
    <div className="flex">
      <button
        onClick={() => setPageNumber(pageNumber--)}
        disabled={firstPage}>
        -
      </button>
      <p>{pageNumber}</p>
      <button
        onClick={() => setPageNumber(pageNumber++)}
        disabled={lastPage}>
        +
      </button>
    </div>
  );
}
