import { useState } from "react";
import { useCartContext } from "../../../hooks/useCartContext";
import Product from "../../common/products";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const ViewScreen = () => {
  const { cart, addToCart } = useCartContext();
  const navigate = useNavigate();

  const [activeProductId, setActiveProductId] = useState<number | null>(null);

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    toast.success(`${product.title} added to cart!`);
  };

  return (
    <section className="px-2 pb-20 md:pb-32">
      <button
        onClick={() => navigate(-1)}
        className="absolute lg:top-20 top-16 left-4 sm:left-6 flex items-center space-x-2 text-gray-800 font-semibold hover:text-black transition bg-white px-3 py-1 rounded-full shadow-md z-50"
      >
        <AiOutlineArrowLeft size={20} />
        <span className="hidden sm:inline text-sm">Back</span>
      </button>

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
      <div className="grid lg:grid-cols-4 md:grid-cols-2 max-w-[80%] gap-1 mx-auto pt-24 grid-cols-1">
        {cart.length > 0 ? (
          cart.map((item) => (
            <Product
              key={item.id}
              product={item}
              addToCart={() => handleAddToCart(item)}
              activeProductId={activeProductId}
              setActiveProductId={setActiveProductId}
            />
          ))
        ) : (
          <div className="py-60 flex justify-center items-center">
            <div>
              <p className="font-bold text-2xl">Your cart is empty.</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ViewScreen;
