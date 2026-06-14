import { motion, type MotionProps } from "framer-motion";
import type { PropsWithChildren } from "react";

export interface MotionRevealProps extends PropsWithChildren {
  className?: string;
  delay?: number;
}

export function MotionReveal({
  children,
  className,
  delay = 0,
}: MotionRevealProps) {
  const motionProps: MotionProps = {
    initial: { y: 18 },
    transition: { duration: 0.56, delay, ease: [0.22, 1, 0.36, 1] },
    viewport: { once: true, amount: 0.24 },
    whileInView: { y: 0 },
  };

  return (
    <motion.div className={className} {...motionProps}>
      {children}
    </motion.div>
  );
}
