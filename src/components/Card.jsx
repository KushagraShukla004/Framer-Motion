/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
const Card = ({ children }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        show: { opacity: 1 },
      }}
      className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-100"
    >
      {children}
    </motion.div>
  );
};

export default Card;
