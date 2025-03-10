"use client";

import { createContext, useContext, useState } from "react";

const PanelContext = createContext({
  isOpen: false,
  setIsOpen: (val: boolean) => {},
  smiles: "",
  setSmiles: (val: string) => {},
});

export const PanelProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [smiles, setSmiles] = useState("");

  return (
    <PanelContext.Provider
      value={{
        isOpen,
        setIsOpen,
        smiles,
        setSmiles,
      }}
    >
      {children}
    </PanelContext.Provider>
  );
};

export const usePanel = () => {
  return useContext(PanelContext);
};
