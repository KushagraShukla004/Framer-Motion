import { useState } from "react";
//The atomic component for framer motion is motion
import { motion, AnimatePresence } from "framer-motion";
//Just pre-pend (i.e before the word) 'motion.'('.' is imp!) to any html element
//Then we use props and propTitles for using motion elements's feature which are called as Variants

//AnimatePresence allows components to animate out when they're removed from the React tree.(i.e exit={{}} prop)

function BasicsOfMotion() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div
      //this style is just to make everything in center
      style={{
        display: "grid",
        placeContent: "center",
        height: "100vh",
        gap: "0.8rem",
      }}
    >
      <motion.button
        className="example-button"
        onClick={() => {
          setIsVisible(!isVisible);
        }}
        layout
        //it basically adds smooth transition to a button that moves up or down when the element below (👇) Mounts or unMounts
      >
        Show/Hide
      </motion.button>
      <AnimatePresence mode="popLayout">
        {isVisible && (
          <motion.div
            //Motion props or Variants and they can have any normal css tags like the style tag
            //initial={{}} defines the initial state of the element when it Mounts
            initial={{
              rotate: "0deg",
              scale: 0,
              //y: is short for translateY
              y: 0,
            }}
            //(imp!)animate={{}} this is where we animate our element

            animate={{
              rotate: "180deg",
              scale: 1,
              // y: 50,
              //y:[start,next,next,next....,next,end]
              //these next(s) increases the time for them to stay at that place
              //here 2 -150 means they will stay 150px up for 1 sec
              //like what we do in @keyframes in css
              y: [0, 150, -150, -150, 0],
            }}
            // defines what happens to the element Before it UnMounts
            exit={{
              rotate: "0deg",
              scale: 0,
              y: 0,
            }}
            //(also imp!)does the same what css transition does and more
            //here default unit of time is second
            transition={{
              duration: 1,
              //type of transition
              // type: "spring",
              ease: "backInOut",
              //this adds @keyframes 0% 25% 50% ...100% features
              //1 means 100% of duration which here is ==1sec ...if it was 5 then 1 mean ==5sec
              times: [0, 0.25, 0.5, 0.85, 1],
            }}
            style={{ width: 150, height: 150, background: "black" }}
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default BasicsOfMotion;
