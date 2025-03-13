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
      <section className="h-screen flex justify-center items-center">
        loading...
      </section>
    );
  }

  const { title, price, description, image } = product;

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${title} added to cart!`);
  };

  return (
    <section className="min-h-screen flex flex-col">
      <button
        onClick={() => navigate(-1)}
        className="absolute left-10 lg:left-2 top-1/2 transform -translate-y-1/2 flex items-center space-x-2 text-gray-800 font-bold hover:text-black transition"
      >
        <AiOutlineArrowLeft size={30} className="text-3xl" />
        <span className="hidden sm:inline text-lg">Back</span>
      </button>
      <ToastContainer position="top-right" autoClose={1200} />
      <div className="flex-grow max-w-6xl w-full mx-auto px-4 pt-32 pb-10">
        <div className="flex flex-col lg:flex-row items-center mt-10 relative">
          <div className="flex flex-1 justify-center items-center">
            <img
              className="w-40 sm:w-60 lg:w-80 object-contain"
              src={image}
              alt={title}
            />
          </div>
          <div className="flex-1 text-center lg:text-left space-y-4">
            <h1 className="text-2xl sm:text-3xl font-semibold">{title}</h1>
            <div className="text-xl text-red-500 font-medium">${price}</div>
            <p className="text-gray-700 text-sm sm:text-base">{description}</p>
            <button
              onClick={handleAddToCart}
              className="bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800 transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductScreen;
