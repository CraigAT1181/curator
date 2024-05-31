import React, { createContext, useContext, useState } from "react";

const SessionContext = createContext();

export function SessionProvider({ children }) {
  const [userExhibit, setUserExhibit] = useState([]);

  return (
    <SessionContext.Provider value={{ userExhibit, setUserExhibit }}>
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
