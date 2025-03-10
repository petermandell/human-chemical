"use client";

import { createContext, useContext, useState } from "react";

const PanelContext = createContext({
  isOpen: false,
  setIsOpen: (val: boolean) => {},
  smiles: "",
  setSmiles: (val: string) => {},
});

export const PanelProvider = ({ children }: { children: React.ReactNode }) => {
  const [_isOpen, _setIsOpen] = useState(false);
  const [_smiles, _setSmiles] = useState("");

  const setIsOpen = (val: boolean) => {
    _setIsOpen(val);
  };

  const setSmiles = (val: string) => {
    _setSmiles(val);
  };

  console.log({ _smiles });

  return (
    <PanelContext.Provider
      value={{
        isOpen: _isOpen,
        setIsOpen,
        smiles: _smiles,
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
