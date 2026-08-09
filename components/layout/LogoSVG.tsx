"use client";

import { motion, Variants } from "framer-motion";

/**
 * Nexora Technologies — Custom Typographic Logo
 * Exact vector replica of the requested brand typography, with drawing animation.
 */

const containerVariants: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const pathVariants: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    filter: [
      "drop-shadow(0px 0px 0px rgba(255,255,255,0))",
      "drop-shadow(0px 0px 4px rgba(255,255,255,0.4))",
      "drop-shadow(0px 0px 0px rgba(255,255,255,0))"
    ],
    transition: {
      pathLength: { duration: 1.2, ease: "easeInOut" },
      opacity: { duration: 1.2, ease: "easeInOut" },
      filter: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.2 }
    },
  },
};

const fillVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: [1, 1.1, 1],
    filter: [
      "drop-shadow(0px 0px 0px rgba(74,69,61,0))",
      "drop-shadow(0px 0px 6px rgba(74,69,61,0.6))",
      "drop-shadow(0px 0px 0px rgba(74,69,61,0))"
    ],
    transition: {
      opacity: { duration: 0.8, delay: 1.4, ease: "easeOut" },
      scale: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.4 },
      filter: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.4 }
    },
  },
};

const textVariants: Variants = {
  hidden: { opacity: 0, y: 5 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 1.6,
      ease: "easeOut",
    },
  },
};

export function LogoFull({ className = "" }: { className?: string }) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-15 -10 325 95"
      className={`text-foreground ${className}`}
      aria-label="Nexora Technologies"
      initial="hidden"
      animate="visible"
    >
      <defs>
        <linearGradient id="nGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff0026ff" />
          <stop offset="100%" stopColor="#3f0009ff" />
        </linearGradient>
      </defs>

      {/* ══ BIG COLORFUL 'N' ══ */}
      <motion.g
        fill="none"
        stroke="url(#nGradient)"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="2"
        variants={containerVariants}
      >
        <motion.path d="M 0 56 L 0 0 L 48 56 L 48 0" variants={pathVariants} />
      </motion.g>

      {/* ══ NEXORA CUSTOM WORDMARK ══ */}
      <motion.g
        fill="none"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={containerVariants}
      >
        {/* E */}
        <motion.path d="M 95 10 L 65 10 L 65 45 L 95 45" variants={pathVariants} />
        <motion.path d="M 65 27.5 L 85 27.5" variants={pathVariants} />

        {/* X */}
        <motion.path d="M 110 10 L 140 45" variants={pathVariants} />
        <motion.path d="M 140 10 L 110 45" variants={pathVariants} />

        {/* O */}
        <motion.circle cx="175" cy="27.5" r="17.5" variants={pathVariants} />

        {/* R */}
        <motion.path d="M 210 45 L 210 10 L 225 10 A 10 10 0 0 1 225 30 L 210 30" variants={pathVariants} />
        <motion.path d="M 220 30 L 235 45" variants={pathVariants} />

        {/* A */}
        <motion.path d="M 250 45 L 265 10 L 280 45" variants={pathVariants} />
      </motion.g>

      {/* Red Triangle inside 'A' */}
      <motion.polygon
        points="265,26 258,40 272,40"
        fill="#f70000ff"
        stroke="#f70000ff"
        strokeWidth="2"
        strokeLinejoin="round"
        variants={fillVariants}
      />

      {/* ══ TECHNOLOGIES SUB-BRAND ══ */}
      <motion.text
        x="165"
        y="74"
        fontFamily="'Montserrat', 'Inter', sans-serif"
        fontSize="15"
        fontWeight="600"
        fill="#E31837"
        letterSpacing="9"
        textAnchor="middle"
        variants={textVariants}
      >
        TECHNOLOGIES
      </motion.text>
    </motion.svg>
  );
}

export function LogoShort({ className = "" }: { className?: string }) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-15 -10 170 65"
      className={`text-foreground ${className}`}
      aria-label="NXR"
      initial="hidden"
      animate="visible"
    >
      <defs>
        <linearGradient id="nGradientShort" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff1135ff" />
          <stop offset="100%" stopColor="#47010bff" />
        </linearGradient>
      </defs>

      {/* BIG COLORFUL 'N' */}
      <motion.g
        fill="none"
        stroke="url(#nGradientShort)"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="2"
        variants={containerVariants}
      >
        <motion.path d="M 0 56 L 0 0 L 48 56 L 48 0" variants={pathVariants} />
      </motion.g>

      <motion.g
        fill="none"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={containerVariants}
      >
        {/* X */}
        <motion.path d="M 60 10 L 90 45" variants={pathVariants} />
        <motion.path d="M 90 10 L 60 45" variants={pathVariants} />

        {/* R */}
        <motion.path d="M 105 45 L 105 10 L 120 10 A 10 10 0 0 1 120 30 L 105 30" variants={pathVariants} />
        <motion.path d="M 115 30 L 130 45" variants={pathVariants} />
      </motion.g>
    </motion.svg>
  );
}
