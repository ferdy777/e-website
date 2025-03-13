import { useState } from "react";
import { useCartContext } from "../../../hooks/useCartContext";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineArrowLeft } from "react-icons/ai";

const CheckoutScreen = () => {
  const { cart } = useCartContext();
  const navigate = useNavigate();
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    address: "",
  });

  const totalAmount = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomerInfo({ ...customerInfo, [e.target.name]: e.target.value });
  };

  const handleCheckout = () => {
    if (!customerInfo.name || !customerInfo.email || !customerInfo.address) {
      toast.error("Please fill in all fields!");
      return;
    }

    toast.success("Checkout successful! 🎉");
    setTimeout(() => {
      navigate("/");
    }, 1500);

    setCustomerInfo({ name: "", email: "", address: "" });
  };

  return (
    <div className="pb-20 pt-14 min-h-screen flex items-center justify-center">
      <div className="relative max-w-4xl w-full bg-white shadow-md rounded-lg px-6 py-6 lg:py-10">
        <button
          onClick={() => navigate(-1)}
          className="absolute top-5 left-5 flex items-center space-x-2 text-gray-800 font-bold hover:text-black transition"
        >
          <AiOutlineArrowLeft size={30} />
          <span className="hidden sm:inline text-lg">Back</span>
        </button>

        <ToastContainer position="top-right" autoClose={1200} />

        <h2 className="text-2xl font-bold mb-6 text-center">Checkout</h2>
        <div className="max-h-60 overflow-y-auto space-y-4 border-b pb-4">
          {cart.length > 0 ? (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center p-2 border rounded-lg shadow-sm"
              >
                <div>
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="text-gray-500">Qty: {item.quantity}</p>
                </div>
                <p className="font-semibold">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center">Your cart is empty.</p>
          )}
        </div>
        <div className="flex justify-between font-bold text-lg mt-4">
          <p>Total:</p>
          <p>${totalAmount.toFixed(2)}</p>
        </div>
        <div className="mt-6 space-y-4">
          <label className="block font-medium">Full Name</label>
          <input
            type="text"
            name="name"
            value={customerInfo.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Enter your full name"
          />

          <label className="block font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={customerInfo.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Enter your email"
          />

          <label className="block font-medium">Shipping Address</label>
          <input
            type="text"
            name="address"
            value={customerInfo.address}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Enter your shipping address"
          />
        </div>
        <button
          onClick={handleCheckout}
          className="w-full bg-red-500 text-white py-2 mt-6 rounded hover:bg-red-600 transition"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default CheckoutScreen;
