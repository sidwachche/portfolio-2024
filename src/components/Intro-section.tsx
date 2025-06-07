"use client";

import Image from "next/image";
import reactLogo from "../../public/images/react.svg";
import jsLogo from "../../public/images/javascript.svg";
import nextLogo from "../../public/images/nextjs-icon.svg";
import { motion } from "framer-motion";
import { useState, useLayoutEffect } from "react";

// const techLogos = [
//   { img: reactLogo, position: { right: 0, top: "33%" }, name: "react" },
//   { img: jsLogo, position: { right: "10%", top: "8%" }, name: "javascript" },
//   { img: nextLogo, position: { right: "15%", bottom: "30%" }, name: "nextjs" },
// ];

const tagLine = "Transforming Designs into Interactive Web Delight".split(" ");

function IntroSection() {
  const [containerHeight, setContainerHeight] = useState(500);

  useLayoutEffect(() => {
    const updateHeight = () => {
      const height = Math.max(window?.innerHeight - 200 || 500, 500);
      setContainerHeight(height);
    };

    updateHeight();
    window?.addEventListener("resize", updateHeight);

    return () => {
      window?.removeEventListener("resize", updateHeight);
    };
  }, []);

  return (
    <div
      style={{
        height: containerHeight,
      }}
      className="flex flex-col gap-40 relative w-full h-dvh items-center"
    >
      <div className="flex flex-col items-center gap-2">
        <motion.h2
          initial={{
            opacity: 0,
            x: -50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
            },
          }}
          className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tighter border-b py-2 bg-gradient-to-r from-indigo-500 to-indigo-500/80 bg-clip-text text-transparent px-0.5"
        >
          Sid Wachche
        </motion.h2>
        <p className="text-sm text-slate-600">Founding Engineer @Singulr AI</p>
      </div>
      <div className="h-auto space-y-4 font-extrabold leading-tight tracking-tighter text-center">
        <h1 className="text-5xl lg:text-7xl inline-block pr-2 text-primary-gradient">
          Front-End Dev
        </h1>
        <h1 className="md:text-2xl text-xl font-semibold text-slate-500">
          {tagLine.map((el, i) => (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1,
                delay: i / 4,
              }}
              key={i}
            >
              {el}{" "}
            </motion.span>
          ))}
        </h1>
      </div>
      {/* <section className=" flex-row gap-10 hidden md:flex">
        {techLogos.map(({ img, name, position }) => (
          <motion.div
            initial={{ x: -500 }}
            animate={{ x: 0 }}
            key={name}
            className=""
          >
            <Image
              src={img}
              alt={name}
              width={80}
              height={80}
              style={position}
              className="inline-block absolute opacity-90 grayscale-[50%] box-content p-10 hover:grayscale-0"
            />
          </motion.div>
        ))}
      </section> */}
    </div>
  );
}

export default IntroSection;
