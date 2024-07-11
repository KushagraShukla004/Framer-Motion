import { useScroll } from "framer-motion";
import Card from "./Card";
import { motion } from "framer-motion";

const gridContainerVariants = {
  hidden: { opacity: 0 },
  //staggerChildren allows us to animate the card to appear one at a time
  show: { opacity: 1, transition: { staggerChildren: 0.25 } },
};

const Animations = () => {
  const { scrollYProgress: completionProgress } = useScroll();
  return (
    <div className="flex flex-col gap-10 overflow-x-hidden bg-slate-950 md:h-[150vh]">
      <motion.section
        // variants={{
        //   hidden: { opacity: 0 },
        //   show: { opacity: 1, transition: { staggerChildren: 0.25 } },
        // }}

        //you can also do the same by calling it as an object (for redundancy and clearity)

        variants={gridContainerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-3 p-10 gap-10"
      >
        {/*See the card component for it's motion functionality. (It's clearer this way) */}

        {/* Fade Up/Down */}
        <Card>
          <motion.div
            className="size-20 bg-stone-200 rounded-lg mr-5"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          />
          <motion.div
            className="size-20 bg-stone-200 rounded-full"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.4 }}
          />
        </Card>

        {/* Shape Shifting */}
        <Card>
          {/* Scale:[1,2,2,1] means 
            @keyframe 1: scale:1 
            @keyframe 2: scale:2 
            @keyframe 2: scale:2 
            @keyframe 1: scale:1 

            same for rotate

            borderRadius changes the size of border i.e. 50% means circle (as in vanilla css)
          */}
          <motion.div
            className="size-1/3 bg-rose-400 rounded-lg"
            animate={{
              scale: [1, 2, 2, 1],
              rotate: [0, 90, 90, 0],
              borderRadius: ["10%", "10%", "50%", "10%"],
            }}
            transition={{
              duration: 5,
              ease: "easeOut",
              //   repeat: Infinity,
              repeat: 2,
              repeatDelay: 1,
            }}
          />
        </Card>

        {/* Button Hover */}
        <Card>
          {/*
          whileTap={} prop means while clicking. 
          whileHover={} prop means while hovering.
          
          bounceDamping: this affects the damping of the bounce spring. If set to 0, spring will oscillate indefinitely. Set to 10 by default.

          bounceStiffness: this affects the stiffness of the bounce spring. Higher values will create more sudden movement. Set to 500 by default.
          */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1, backgroundColor: "#c6c6c6", color: "black" }}
            transition={{ bounceDamping: 10, bounceStiffness: 600 }}
            className="bg-emerald-600 w-1/2 py-4 rounded-lg text-2xl font-light tracking-wide"
          >
            Subscribe
          </motion.button>
        </Card>

        {/* Drag Animation */}
        <Card>
          {/* just add prop drag */}
          {/* But we need 
          dragConstraints prop for setting a limit to how much it can be draggable */}
          <motion.div
            className="w-1/3 h-1/3 bg-orange-500 rounded-3xl cursor-grab"
            drag
            dragConstraints={{
              top: -60,
              right: 60,
              bottom: 60,
              left: -60,
            }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
          />
        </Card>

        {/* Scroll Progress */}
        <Card>
          <motion.div className="w-40 aspect-square bg-gray-50/20 rounded-xl">
            <motion.div
              className="w-full bg-gray-400 rounded-xl h-full origin-bottom"
              style={{ scaleY: completionProgress }}
            />
          </motion.div>
        </Card>
        <Card></Card>
      </motion.section>
    </div>
  );
};

export default Animations;
