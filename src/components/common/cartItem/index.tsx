import { Link } from "react-router-dom";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { useCartContext } from "../../../hooks/useCartContext";
import { Product } from "../../../types/productTypes";

interface CartItemProps {
  item: Product;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { removeFromCart, increaseAmount, decreaseAmount } = useCartContext();
  const { id, title, image, price, quantity } = item;

  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        <Link to={`/product/${id}`}>
          <img className="max-w-[80px]" src={image} alt={title} />
        </Link>
        <div className="w-full flex flex-col">
          <div className="flex justify-between mb-2">
            <Link
              to={`/product/${id}`}
              className="text-sm uppercase font-medium max-w-[240px] hover:underline"
            >
              {title}
            </Link>
            <div
              onClick={() => removeFromCart(id)}
              className="text-xl cursor-pointer"
            >
              <IoMdClose className="text-gray-500 hover:text-red-500 transition" />
            </div>
          </div>
          <div className="flex gap-x-2 h-[36px] text-sm">
            <div className="flex flex-1 max-w-[100px] items-center h-full border font-medium">
              <div
                onClick={() => decreaseAmount(id)}
                className="flex-1 flex items-center justify-center cursor-pointer bg-red-500"
              >
                <IoMdRemove />
              </div>

              <div className="h-full justify-center flex items-center px-2">
                {quantity}
              </div>
              <div
                onClick={() => increaseAmount(id)}
                className="flex-1 h-full flex items-center justify-center cursor-pointer"
              >
                <IoMdAdd />
              </div>
            </div>
            <div className="flex-1 flex items-center justify-around">
              $ {price.toFixed(2)}
            </div>
            <div className="flex-1 flex justify-end items-center font-medium">
              ${(price * quantity).toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
