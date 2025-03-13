import { useParams, useNavigate } from "react-router-dom";
import { useCartContext } from "../../../hooks/useCartContext";
import { useProductContext } from "../../../hooks/useProductContext";
import { ToastContainer, toast } from "react-toastify";
import { AiOutlineArrowLeft } from "react-icons/ai";
import "react-toastify/dist/ReactToastify.css";

const ProductScreen = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products } = useProductContext();
  const { addToCart } = useCartContext();

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center text-lg font-semibold">
        Loading...
      </section>
    );
  }

  const { title, price, description, image } = product;

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${title} added to cart!`);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <button
        onClick={() => navigate(-1)}
        className="absolute top-20 left-4 sm:left-6 flex items-center space-x-2 text-gray-800 font-semibold hover:text-black transition bg-white px-3 py-1 rounded-full shadow-md"
      >
        <AiOutlineArrowLeft size={20} />
        <span className="hidden sm:inline text-sm">Back</span>
      </button>

      <ToastContainer
        position="top-right"
        autoClose={1200}
        toastStyle={{
          maxWidth: "240px",
          width: "90%",
          borderRadius: "6px",
          padding: "6px",
        }}
      />
      <main className="flex-grow flex items-center justify-center px-4">
        <div className="w-full max-w-[90%] lg:max-w-[80%] mx-auto flex flex-col lg:flex-row justify-between items-center py-10 lg:py-20">
          <div className="flex-1 flex justify-center p-4">
            <img
              className="w-40 sm:w-48 md:w-56 lg:w-64 object-contain"
              src={image}
              alt={title}
            />
          </div>
          <div className="flex-1 text-center lg:text-left space-y-4 px-4">
            <h1 className="text-xl sm:text-2xl font-semibold">{title}</h1>
            <div className="text-lg text-red-500 font-medium">${price}</div>
            <p className="text-gray-700 text-sm leading-relaxed">
              {description}
            </p>

            <button
              onClick={handleAddToCart}
              className="bg-black text-white py-2 px-6 rounded-md hover:bg-gray-800 transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductScreen;
