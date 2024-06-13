import React, { createContext, useContext, useState } from "react";

const SessionContext = createContext();

export function SessionProvider({ children }) {
  const [userExhibit, setUserExhibit] = useState([]);
  const [museum, setMuseum] = useState(null);
  const [exhibits, setExhibits] = useState([]);
  const [searchTerms, setSearchTerms] = useState("");
  const [activeSearch, setActiveSearch] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);

  return (
    <SessionContext.Provider
      value={{
        userExhibit,
        setUserExhibit,
        museum,
        setMuseum,
        exhibits,
        setExhibits,
        searchTerms,
        setSearchTerms,
        activeSearch,
        setActiveSearch,
        pageNumber,
        setPageNumber
      }}>
      {children}
    </SessionContext.Provider>
  );
}

export function useSession() {
  const context = useContext(SessionContext);

  if (!context) {
    throw new Error("useSession must be used within a SessionProvider");
  }

  return context;
}
