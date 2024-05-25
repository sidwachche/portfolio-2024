"use client";

import clsx from "clsx";
import { motion } from "framer-motion";

const colors = ["#ff5f56", "#ffbd2e", "#27c93f"];
function MacWindowWrapper({
  children,
  tagName,
  disableTapAnimation = false,
}: {
  children: React.ReactNode;
  tagName: string;
  disableTapAnimation?: boolean;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 150,
      }}
      whileTap={{ scale: disableTapAnimation ? 1 : 0.9 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
        },
      }}
      viewport={{ once: true }}
      className={clsx(
        disableTapAnimation ? "cursor-default" : "cursor-pointer",
        "border border-solid border-gray-300 rounded-lg overflow-hidden"
      )}
    >
      <div className="bg-white w-full h-8 flex gap-2 items-center px-3 rounded-t-lg border-b border-gray-300">
        {colors.map((color, index) => (
          <div
            key={`${tagName}-${index}`}
            style={{ background: color }}
            className=" size-3 rounded-full"
          ></div>
        ))}
      </div>
      {children}
    </motion.div>
  );
}

export default MacWindowWrapper;
