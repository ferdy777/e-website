import { motion } from "framer-motion";
import WomanImg from "../../../../../images/woman_hero.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="h-auto min-h-screen bg_hero bg-center bg-cover py-16 flex items-center">
      <div className="max-w-6xl w-full mx-auto flex flex-col lg:flex-row items-center text-center lg:text-left gap-8 px-4">
        <motion.div
          className="flex-1 flex flex-col justify-center lg:px-2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            className="font-semibold flex items-center uppercase justify-center lg:justify-start"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="w-10 h-[2px] bg-red-500 mr-3"></div>
            <span>New Trend</span>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[70px] leading-tight font-light mb-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            AUTUMN SALE STYLISH <br />
            <span className="font-semibold">WOMEN</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <Link
              to="/"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("products")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="self-center lg:self-start uppercase font-semibold border-b-2 border-blue-950 hover:text-red-500 transition"
            >
              Discover More
            </Link>
          </motion.div>
        </motion.div>
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <img
            className="w-60 sm:w-72 md:w-96 lg:w-auto"
            src={WomanImg}
            alt="woman"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
