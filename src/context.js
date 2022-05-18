import React from "react";
import { useContext, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [navButton, setNavButton] = useState(false);
  const [darkmode, setDarkmode] = useState(true);

  const changemode = () => {
    setDarkmode(!darkmode);
    if (darkmode) {
      document.body.style.backgroundColor = "#1E1C55";
      document.body.style.color = "white";
      return;
    } else {
      document.body.style.backgroundColor = "#FFFFFF";
      document.body.style.color = "black";
    }
  };

  return (
    <AppContext.Provider
      value={{ navButton, setNavButton, darkmode, setDarkmode, changemode }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
