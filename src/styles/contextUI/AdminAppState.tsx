import React, { createContext, useContext, useReducer } from "react";

// State Type
interface State {
  theme: string;
  drawer: boolean;
}
const initialState: State = {
  theme: "light",
  drawer: false,
};

function reducer(state: any, action: any) {
  switch (action.type) {
    case "drawer":
      return { ...state, drawer: !state.drawer };
    case "theme-switch":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    default:
      throw new Error();
  }
}

const AppStateContext = createContext({});
export const useAppState: any = () => useContext(AppStateContext);

type Props = { children: any };
export default function AdminAppState({ children }: Props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return (
    <AppStateContext.Provider value={value}>
      {children}
    </AppStateContext.Provider>
  );
}
