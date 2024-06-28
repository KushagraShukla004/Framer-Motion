import { motion, useAnimationControls } from "framer-motion";

const AnimationControls = () => {
  const controls = useAnimationControls();

  const handleClick = () => {
    controls.start("flip");
  };
  return (
    <div
      style={{ display: "grid", placeContent: "center", gap: "0.8rem", height: "100vh" }}
    >
      <button onClick={handleClick} className="example-button">
        Flip It!
      </button>
      <motion.div
        //just a cleaner and more reusable way than writing it as a prop.
        //we can also define variants globally and use as strings like below in multiple components
        variants={{ initial: { rotate: "0deg" }, flip: { rotate: "360deg" } }}
        // whileHover="flip"
        initial="initial"
        animate={controls}
        style={{ width: 150, height: 150, background: "black" }}
      ></motion.div>
    </div>
  );
};

export default AnimationControls;
