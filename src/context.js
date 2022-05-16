import React from "react";
import { useContext, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [navButton, setNavButton] = useState(false);
  return (
    <AppContext.Provider value={{ navButton, setNavButton }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
