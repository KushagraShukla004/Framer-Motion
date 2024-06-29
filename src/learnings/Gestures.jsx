import { motion, MotionConfig } from "framer-motion";

const Gestures = () => {
  return (
    <div
      style={{ display: "grid", placeContent: "center", gap: "0.8rem", height: "100vh" }}
    >
      {/* MotionConfig adds whatever props assigned here to all the elements wrapped inside it  */}
      <MotionConfig
        transition={{
          duration: 0.125,
          ease: "easeInOut",
        }}
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95, rotate: "2.5deg" }}
          className="example-button"
        >
          Click Me!
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.75, rotate: "-2.5deg" }}
          className="example-button"
          style={{
            backgroundColor: "red",
          }}
        >
          Click Me!
        </motion.button>
      </MotionConfig>
    </div>
  );
};

export default Gestures;
