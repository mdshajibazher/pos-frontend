"use client"
import {createContext, useContext, useState} from "react";

export const GlobalContext = createContext(null);


export default function GlobalContextProvider({children}){
    const [sideNavOpen, setSideNavOpen] = useState(true);
    return (
      <GlobalContext.Provider
        value={{
            sideNavOpen,
            setSideNavOpen
        }}
      >
          {children}
      </GlobalContext.Provider>
    );

}

export  function useGlobalContext(){
    const context = useContext(GlobalContext);
    if(!context === undefined){
        throw new Error("useGlobalContext must be within a GlobalContextProvider");
    }
    return context;
}