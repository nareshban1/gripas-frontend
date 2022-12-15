import React, { ReactNode, useRef } from "react";
import { useInView } from "framer-motion";
const AnimateInView = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.25s",
      }}
      className={className}
    >
      {children}
    </div>
  );
};

export default AnimateInView;
