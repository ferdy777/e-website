/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect, useMemo, ReactNode } from "react";
import axios from "axios";
import { Product, ProductContextType } from "../types/productTypes";

export const ProductContext = createContext<ProductContextType | null>(null);

interface ProductProviderProps {
  children: ReactNode;
}

const ProductProvider: React.FC<ProductProviderProps> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get<Product[]>(
          "https://fakestoreapi.com/products"
        );

        setProducts((prevState) =>
          prevState.length
            ? prevState
            : data.map((product) => ({ ...product, quantity: 0 }))
        );

        if (import.meta.env.MODE === "development") {
          console.log("Fetched Products:", data);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // ✅ UseMemo to prevent unnecessary re-renders
  const providerValue = useMemo(() => ({ products }), [products]);

  return (
    <ProductContext.Provider value={providerValue}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
