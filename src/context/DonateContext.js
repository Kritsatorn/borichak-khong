import React, { useState, useEffect, useRef } from "react";

const DonateContext = React.createContext();
const DonateContextProvider = (props) => {
  const [Things, setThings] = useState({});

  return (
    <DonateContext.Provider value={{}}>{props.children}</DonateContext.Provider>
  );
};
export { DonateContextProvider, DonateContext };
