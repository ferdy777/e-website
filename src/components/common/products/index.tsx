import { useState } from "react";
import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";
import type { Product } from "../../../types/productTypes";

interface ProductProps {
  product: Product;
  addToCart: (product: Product) => void;
}

const Product: React.FC<ProductProps> = ({ product, addToCart }) => {
  const { id, image, category, title, price } = product;
  const [showIcons, setShowIcons] = useState(false);

  return (
    <div id="products">
      <div
        className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition"
        onClick={() => setShowIcons(!showIcons)} // Toggle icons on small screens
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

        {/* Action Buttons (Show on Hover for Large Screens, Click for Small Screens) */}
        <div
          className={`absolute top-6 -right-11 ${
            showIcons ? "right-5 opacity-100" : "opacity-0"
          } group-hover:right-5 group-hover:opacity-100 p-2 flex flex-col items-center justify-center gap-y-2 transition-all duration-300`}
        >
          <button onClick={() => addToCart(product)}>
            <div className="flex justify-center items-center text-white w-12 h-12 bg-red-500 cursor-pointer">
              <BsPlus className="text-3xl" />
            </div>
          </button>
          <Link
            to={`/product/${id}`}
            className="w-12 h-12 bg-white flex justify-center items-center drop-shadow-xl"
          >
            <BsEyeFill />
          </Link>
        </div>
      </div>

      {/* Product Details */}
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
