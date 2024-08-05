import React, { useState } from "react";
import { motion, transform } from "framer-motion";

const Test = () => {
  const [open, setOpen] = useState(false);

  const variants = {
    //   opacity: 1,
    //   x: 800,
    //   transition: { type: "spring", stiffness: 100, damping: 50 },
    visible: (i) => ({
      opacity: 1,
      x: 100,
      transition: { delay: i * 0.5 },
    }),
    hidden: { opacity: 0 },
  };

  const items = ["items1", "items2", "items3", "items4"];

  return (
    <div className="course">
      {/* <motion.div
        className="box"
        variants={variants}
        // initial={{ opacity: 0.5, scale: 0.5 }}
        // transition={{ duration: 1 }}
        // whileInView={{ opacity: 1, scale: 2 }}
        // drag
        animate={open ? "visible" : "hidden"}
      ></motion.div> 
      <button onClick={() => setOpen((prev) => !prev)}>Click</button>
      */}
      <motion.ul initial="hidden" animate="visible" variants={variants}>
        {items.map((item, i) => (
          <motion.li variants={variants} key={item} custom={i}>
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Test;
