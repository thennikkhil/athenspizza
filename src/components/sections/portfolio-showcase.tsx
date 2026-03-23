"use client";
import { motion } from "framer-motion";

const PIZZA_IMAGES = [
  { id: 1, color: "bg-gray-200", label: "Classic" },
  { id: 2, color: "bg-purple-200", label: "Signature" },
  { id: 3, color: "bg-orange-200", label: "Multigrain" },
  { id: 4, color: "bg-blue-200", label: "Sides" },
];

export default function PortfolioShowcase() {
  // We double the array to create the infinite loop effect
  const displayItems = [...PIZZA_IMAGES, ...PIZZA_IMAGES];

  return (
    <div className="relative w-full overflow-hidden bg-brand-snow py-10">
      <motion.div
        className="flex gap-6 w-max"
        animate={{
          x: ["0%", "-50%"], // Moves halfway (since we doubled the items)
        }}
        transition={{
          duration: 20, // Adjust speed here
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {displayItems.map((item, index) => (
          <div
            key={index}
            className={`h-64 w-[350px] rounded-3xl md:h-80 md:w-[450px] ${item.color} flex items-center justify-center border border-black/5 shadow-sm`}
          >
            {/* You will replace these with <img src="..." /> later */}
            <span className="text-black/20 font-bold text-2xl">{item.label}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}