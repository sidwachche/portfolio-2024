"use client";

import clsx from "clsx";

const CircularLoader = ({
  size = 30,
  ringColorClass = "border-t-primary",
  borderColorClass = "border-mid-100",
  className = "",
}: {
  size?: number;
  ringColorClass?: string;
  className?: string;
  borderColorClass?: string;
}) => {
  const loaderStyle = {
    width: size,
    height: size,
  };

  return (
    <div
      className={clsx("relative inline-block", className)}
      style={loaderStyle}
    >
      <div
        className={clsx(
          ringColorClass,
          borderColorClass,
          "border-solid rounded-full animate-spin-fast border-t-4"
        )}
        style={{ ...loaderStyle, borderWidth: size / 12 }}
      ></div>
    </div>
  );
};

export default CircularLoader;
