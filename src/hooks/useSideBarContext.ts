import { useContext } from "react";
import { SideBarContext } from "../contexts/sideBarContext";

export const useSidebar = () => {
  const context = useContext(SideBarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SideBarProvider");
  }
  return context;
};
