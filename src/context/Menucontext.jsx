import { createContext, useContext, useState } from 'react';

const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [selectedMenuId, setSelectedMenuId] = useState("null");
   const [showAddMenu, setShowAddMenu] = useState(false);
  const [showAddItem, setShowAddItem] = useState(false);

  return (
    <MenuContext.Provider value={{ showAddMenu, setShowAddMenu,showAddItem, setShowAddItem,selectedMenuId, setSelectedMenuId }}>
      {children}
    </MenuContext.Provider>
  );
};


export const useMenu = () => useContext(MenuContext);
