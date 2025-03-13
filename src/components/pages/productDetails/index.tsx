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
    <section className="min-h-screen flex flex-col relative px-4 sm:px-6 pb-4 sm:pb-6">
      <button
        onClick={() => navigate(-1)}
        className="fixed top-20 left-4 sm:left-6 z-50 flex items-center space-x-2 text-gray-800 font-semibold hover:text-black transition bg-white px-2 py-1 rounded-full shadow-md"
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
      <div className="mt-28 py-36 max-w-5xl w-full mx-auto lg:py-40">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
          <div className="flex flex-1 justify-center">
            <img
              className="w-36 sm:w-52 lg:w-64 object-contain"
              src={image}
              alt={title}
            />
          </div>
          <div className="flex-1 text-center lg:text-left space-y-3">
            <h1 className="text-xl sm:text-2xl font-semibold">{title}</h1>
            <div className="text-lg text-red-500 font-medium">${price}</div>
            <p className="text-gray-700 text-sm leading-tight">{description}</p>
            <button
              onClick={handleAddToCart}
              className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition w-fit mt-10"
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
