import React from "react";
import DynamicText from "@/components/DynamicText";
import ImageCarousel from "@/components/ImageCarousel";
import { AnimatePresence, motion } from "framer-motion";

const index = () => {
  return (
    <AnimatePresence>
      <motion.div
        className="home_container"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 30 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <ImageCarousel />
        <DynamicText />
      </motion.div>
    </AnimatePresence>
  );
};

export default index;
