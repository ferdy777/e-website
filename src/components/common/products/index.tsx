import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";
import type { Product } from "../../../types/productTypes";

interface ProductProps {
  product: Product;
  addToCart: (product: Product) => void;
  activeProductId: number | null;
  setActiveProductId: (id: number | null) => void;
}

const Product: React.FC<ProductProps> = ({
  product,
  addToCart,
  activeProductId,
  setActiveProductId,
}) => {
  const { id, image, category, title, price } = product;
  const isActive = activeProductId === id;

  return (
    <div id="products">
      <div
        className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition"
        onClick={() => setActiveProductId(isActive ? null : id)}
      >
        {/* Product Image */}
        <div className="w-full flex justify-center items-center h-full">
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              src={image}
              alt={title}
              className="max-h-[160px] group-hover:scale-110 transition duration-300"
            />
          </div>
        </div>

        {/* Action Buttons (Fix for Mobile & Desktop) */}
        <div
          className={`absolute top-6 right-5 p-2 flex flex-col items-center justify-center gap-y-2 transition-all duration-300
            ${
              isActive
                ? "opacity-100 visible"
                : "opacity-0 invisible group-hover:opacity-100 group-hover:visible"
            }`}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product);
              setActiveProductId(null);
            }}
          >
            <div className="flex justify-center items-center text-white w-12 h-12 bg-red-500 cursor-pointer">
              <BsPlus className="text-3xl" />
            </div>
          </button>
          <Link
            to={`/product/${id}`}
            className="w-12 h-12 bg-white flex justify-center items-center drop-shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <BsEyeFill />
          </Link>
        </div>
      </div>

      <div>
        <div className="text-sm capitalize text-gray-500 mb-1">{category}</div>
        <Link to={`/product/${id}`}>
          <h2 className="font-semibold mb-1">{title}</h2>
        </Link>
        <div className="font-semibold">${price.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default Product;
