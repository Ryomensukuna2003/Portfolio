import { useRef } from "react";
import { motion, useReducedMotion } from "motion/react";

const animationVariants = {
  fadeIn: {
    container: {
      hidden: { opacity: 0 },
      visible: (i = 1) => ({
        opacity: 1,
        transition: { staggerChildren: 0.05, delayChildren: i * 0.3 },
      }),
    },
    child: {
      visible: {
        opacity: 1,
        y: [0, -10, 0],
        transition: { type: "spring", damping: 12, stiffness: 100 },
      },
      hidden: { opacity: 0, y: 10 },
    },
  },
  fadeInUp: {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.2 },
      },
    },
    child: {
      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      hidden: { opacity: 0, y: 20 },
    },
  },
  shiftInUp: {
    container: {
      hidden: {},
      visible: (i = 1) => ({
        transition: { staggerChildren: 0.04, delayChildren: 0.1 * i },
      }),
    },
    child: {
      hidden: {
        y: "100%",
        transition: { ease: [0.75, 0, 0.25, 1], duration: 0.6 },
      },
      visible: {
        y: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
      },
    },
  },
};

/**
 * Animated heading. Renders ONE semantic heading element (default <h1>) with an
 * accessible full-text label; the per-letter spans are decorative (aria-hidden),
 * so screen readers announce the whole word, not letter-by-letter.
 * Honors prefers-reduced-motion by skipping the entrance entirely.
 */
const TextAnimate = ({
  text,
  type = "shiftInUp",
  as: Tag = "h1",
  className = "",
  ...props
}) => {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const letters = Array.from(text);
  const { container, child } = animationVariants[type] ?? animationVariants.shiftInUp;

  const MotionTag = motion[Tag] ?? motion.h1;

  if (reduceMotion) {
    return (
      <Tag ref={ref} className={className} {...props}>
        {text}
      </Tag>
    );
  }

  return (
    <MotionTag
      ref={ref}
      aria-label={text}
      className={className}
      style={{ display: "flex", overflow: "hidden" }}
      variants={container}
      initial="hidden"
      animate="visible"
      {...props}
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={child} aria-hidden="true">
          {letter === " " ? " " : letter}
        </motion.span>
      ))}
    </MotionTag>
  );
};

export default TextAnimate;
