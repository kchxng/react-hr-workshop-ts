import { createContext, useContext, useState } from "react";

type UIProps = {};
export const UIContext: any = createContext({});

export const useUIContext: any = () => useContext(UIContext);

type ProvProps = { children: any };
export const UIProvider = (props: ProvProps) => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [showSearchBox, setShowSearchBox] = useState<boolean>(false);

  const value = {
    drawerOpen,
    setDrawerOpen,
    showSearchBox,
    setShowSearchBox,
  };

  return (
    <UIContext.Provider value={value}>{props.children}</UIContext.Provider>
  );
};
