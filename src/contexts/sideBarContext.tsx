/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useMemo, ReactNode } from "react";
import { SideBarContextType } from "../types/sidebarTypes";

export const SideBarContext = createContext<SideBarContextType | null>(null);

interface SideBarProviderProps {
  children: ReactNode;
}

const SideBarProvider: React.FC<SideBarProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen((prev) => !prev);

  // ✅ UseMemo to prevent unnecessary re-renders
  const providerValue = useMemo(() => ({ isOpen, toggleSidebar }), [isOpen]);

  return (
    <SideBarContext.Provider value={providerValue}>
      {children}
    </SideBarContext.Provider>
  );
};

export default SideBarProvider;
