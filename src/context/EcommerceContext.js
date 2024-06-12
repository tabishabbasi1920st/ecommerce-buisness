import { createContext, useEffect, useState } from "react";

export const EcommerceContext = createContext();

const EcommerceContextProvider = ({ children }) => {
  useEffect(() => {});

  return (
    <EcommerceContext.Provider value={{}}>{children}</EcommerceContext.Provider>
  );
};

export default EcommerceContextProvider;
