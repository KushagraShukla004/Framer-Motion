import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const ViewBasedAnimations = () => {
  const ref = useRef(null);
  //{once:true} will make it happen only once
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    console.log("Is in view -> ", isInView);
  }, [isInView]);

  return (
    <>
      <div style={{ height: "150vh" }}></div>
      <motion.div
        style={{ height: "100vh", background: "black" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      ></motion.div>
      <div
        ref={ref}
        style={{
          height: "100vh",
          background: isInView ? "blue" : "red",
          transition: "1s background",
        }}
      ></div>
    </>
  );
};

export default ViewBasedAnimations;
