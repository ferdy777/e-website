import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import ProductProvider from "./contexts/productContext.tsx";
import SideBarProvider from "./contexts/sideBarContext.tsx";
import CartProvider from "./contexts/cartContext.tsx";

createRoot(document.getElementById("root")!).render(
  <ProductProvider>
    <SideBarProvider>
      <CartProvider>
        <StrictMode>
          <App />
        </StrictMode>
      </CartProvider>
    </SideBarProvider>
  </ProductProvider>
);
