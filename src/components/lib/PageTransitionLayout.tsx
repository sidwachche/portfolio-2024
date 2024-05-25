"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ReactNode, FC } from "react";

// ROUTER
import { usePathname, useRouter } from "next/navigation";

// TYPES
interface ILayoutProps {
  children: ReactNode;
}

const PageTransitionLayout: FC<ILayoutProps> = ({ children }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode={"wait"}>
      <motion.div
        key={pathname}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{
          type: "tween",
          duration: 0.5,
        }}
        variants={{
          initialState: {
            x: -1000,
          },
          animateState: {
            x: 0,
          },
          exitState: {
            opacity: -1000,
          },
        }}
        className="min-h-screen w-full" // Feel free to add your classes here
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransitionLayout;
