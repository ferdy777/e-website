import { useSidebar } from "../../../hooks/useSideBarContext";
import { useCartContext } from "../../../hooks/useCartContext";
import { Link } from "react-router-dom";
import Logo from "../../../images/logo.svg";
import { useEffect, useState } from "react";
import { BsBag } from "react-icons/bs";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { toggleSidebar } = useSidebar();
  const { totalCartQuantity } = useCartContext();

  useEffect(() => {
    const handleScroll = () => {
      setIsActive(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"
      } fixed w-full z-10 transition-all`}
    >
      <div className="flex max-w-[80%] mx-auto items-center justify-between h-full">
        <Link to={"/"}>
          <div className="">
            <img className="w-[40px]" src={Logo} alt="Logo" />
          </div>
        </Link>
        <div onClick={toggleSidebar} className="cursor-pointer flex relative">
          <BsBag className="text-2xl" />
          <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
            {totalCartQuantity}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
