import { useSidebar } from "../../../hooks/useSideBarContext";
import { IoMdArrowForward } from "react-icons/io";
import CartItem from "../cartItem";
import { FiTrash2 } from "react-icons/fi";
import { useCartContext } from "../../../hooks/useCartContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

const Sidebar: React.FC = () => {
  const { isOpen, toggleSidebar } = useSidebar();
  const { cart, clearCart, total } = useCartContext();
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        toggleSidebar();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, toggleSidebar]);

  const handleNavigation = (path: string) => {
    toggleSidebar();
    navigate(path);
  };

  return (
    <div
      ref={sidebarRef}
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px] 
      h-screen flex flex-col`}
    >
      <div className="sticky top-0 bg-white z-10 shadow-md py-4 px-2 border-b flex justify-between items-center">
        <div className="uppercase text-sm font-semibold">
          Shopping Bag ({cart.length})
        </div>
        <button onClick={toggleSidebar} className="cursor-pointer">
          <IoMdArrowForward className="w-8 h-8 text-gray-700 hover:text-black transition" />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto px-2 mt-2">
        {cart.length > 0 ? (
          cart.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <p className="text-center text-gray-500 mt-4">Your cart is empty.</p>
        )}
      </div>
      <div className="sticky bottom-0 left-0 w-full py-4 bg-white shadow-md px-2 border-t">
        <div className="flex w-full justify-between items-center mb-2">
          <div className="uppercase font-semibold">
            <span className="mr-2">Total:</span> ${total.toFixed(2)}
          </div>
          <button
            onClick={clearCart}
            className="cursor-pointer py-3 bg-red-500 text-white w-12 h-12 flex items-center justify-center text-xl"
          >
            <FiTrash2 />
          </button>
        </div>
        <button
          onClick={() => handleNavigation("/viewcart")}
          className="bg-gray-200 flex p-4 justify-center items-center w-full font-medium text-black mb-2"
        >
          View Cart
        </button>
        <button
          onClick={() => handleNavigation("/checkout")}
          className="bg-black flex p-4 justify-center items-center w-full font-medium text-white"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};
export default Sidebar;
