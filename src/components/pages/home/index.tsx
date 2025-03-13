import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Hero from "./components/hero";
import Product from "../../common/products";
import { useProductContext } from "../../../hooks/useProductContext";
import { useCartContext } from "../../../hooks/useCartContext";

const HomeScreen = () => {
  const { products = [] } = useProductContext();
  const { addToCart } = useCartContext();

  const filteredProducts = products.filter(
    (item) =>
      item.category === "men's clothing" || item.category === "women's clothing"
  );

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    toast.success(`${product.title} added to cart!`);
  };
  return (
    <>
      <Hero />
      <ToastContainer
        position="top-right"
        autoClose={1200}
        toastStyle={{
          maxWidth: "250px",
          width: "90%",
          borderRadius: "8px",
          padding: "10px",
        }}
      />
      <section className="py-16">
        <div className="max-w-[80%] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8">
            {filteredProducts.map((product) => (
              <Product
                key={product.id}
                product={product}
                addToCart={() => handleAddToCart(product)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeScreen;
